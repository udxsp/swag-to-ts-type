import fs from 'fs';
import axios from 'axios';

function toPascalCase(str) {
    return str
        .replace(/\//g, ' ')
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function(match, index) {
            return match.toUpperCase();
        })
        .replace(/[-_]\w/g, function(match) {
            return match.charAt(1).toUpperCase();
        })
        .replace(/\s+/g, '');
}

// Funzione per risolvere i riferimenti $ref
function resolveRef(ref, definitions) {
    const refPath = ref.split('/');
    return definitions[refPath[refPath.length - 1]];
}

// Funzione per generare i tipi TypeScript dagli schemi Swagger
function generateTypes(schema, definitions, typeName) {
  if (schema.$ref) {
    const refSchema = resolveRef(schema.$ref, definitions);
    return refSchema ? refSchema.title || schema.$ref.split('/').pop() : 'any';
  } else if (schema.type === 'object') {
    return `{ ${Object.keys(schema.properties)
      .map((key) => `${key}: ${generateTypes(schema.properties[key], definitions)}`)
      .join('; ')} }`;
  } else if (schema.type === 'array') {
    return `${generateTypes(schema.items, definitions)}[]`;
  } else if (schema.type === 'integer') {
    return 'number';
  } else {
    return schema.type || 'any';
  }
}

// Funzione principale per convertire Swagger in TypeScript
async function convertSwaggerToTS(swaggerUrl, outputFilePath) {
  try {
    const response = await axios.get(swaggerUrl);
    const swaggerJSON = response.data;
    let tsContent = '';

    // Genera tipi per le definizioni
    const definitions = swaggerJSON.definitions || {};
    if (swaggerJSON.definitions) {
      tsContent += '/* Definitions */\n';
      for (const defName in swaggerJSON.definitions) {
        const def = swaggerJSON.definitions[defName];
        const type = generateTypes(def, definitions, defName);
        definitions[defName] = type;
        tsContent += `export type ${defName} = ${type};\n\n`;
      }
    }

    // Genera tipi per le richieste e risposte degli endpoint
    if (swaggerJSON.paths) {
      tsContent += '/* Endpoints */\n';
      for (const path in swaggerJSON.paths) {
        for (const method in swaggerJSON.paths[path]) {
          const operation = swaggerJSON.paths[path][method];
          const endpointName = toPascalCase(path.slice(1).replace(/[{}]/g, ''));
          const requestTypeName = `${endpointName}Req`;
          const responseTypeName = `${endpointName}Res`;

          // Genera tipo per la richiesta
          let requestType = 'undefined';
          if (operation.parameters) {
            const params = operation.parameters.reduce((acc, param) => {
              const paramType = param.schema
                ? (param.schema.$ref ? generateTypes({ $ref: param.schema.$ref }, definitions) : generateTypes(param.schema, definitions))
                : (param.type === 'integer' ? 'number' : param.type || 'any');
              acc[param.name] = paramType;
              return acc;
            }, {});
            requestType = `{ ${Object.keys(params).map((key) => `${key}: ${params[key]}`).join('; ')} }`;
          }

          // Genera tipo per la risposta
          let responseType = 'undefined';
          if (operation.responses && operation.responses['200']) {
            const responseSchema = operation.responses['200'].schema;
            if (responseSchema) {
              responseType = responseSchema.$ref
                ? generateTypes({ $ref: responseSchema.$ref }, definitions)
                : generateTypes(responseSchema, definitions);
            }
          }

          tsContent += `export type ${requestTypeName} = ${requestType};\n`;
          tsContent += `export type ${responseTypeName} = ${responseType};\n\n`;
        }
      }
    }

    // Scrive i tipi TypeScript nel file di output
    fs.writeFileSync(outputFilePath, tsContent);
    console.log(`Typescript definitions written to ${outputFilePath}`);
  } catch (error) {
    console.error('Error converting Swagger to TypeScript:', error);
  }
}

// Percorsi dei file Swagger di input e TypeScript di output
const swaggerUrl = process.argv[2];
const outputFilePath = './types/rest_types.ts';

// Esegue la conversione
await convertSwaggerToTS(swaggerUrl, outputFilePath);
