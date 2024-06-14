import fs from "fs"
import axios from "axios"
import { exec } from "child_process"

/**
 * Converts a string to PascalCase.
 * @param {string} str - The string to convert.
 * @return {string} The PascalCase version of the string.
 */
export function toPascalCase(str) {
	return str
		.replace(/\//g, " ")
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (match) => match.toUpperCase())
		.replace(/[-_]\w/g, (match) => match.charAt(1).toUpperCase())
		.replace(/\s+/g, "")
}

/**
 * Resolves a $ref to its actual definition within the provided definitions.
 * @param {string} ref - The $ref string to resolve.
 * @param {Object} definitions - The object containing all definitions.
 * @return {Object} The resolved reference from the definitions.
 */
export function resolveRef(ref, definitions) {
	const refPath = ref.split("/")
	return definitions[refPath[refPath.length - 1]]
}

/**
 * Generates TypeScript types from Swagger schema definitions.
 * @param {Object} schema - The Swagger schema object.
 * @param {Object} definitions - The Swagger definitions object.
 * @param {string} [typeName] - The name of the type being generated.
 * @return {string} The TypeScript type definition.
 */
export function generateTypes(schema, definitions, typeName = "") {
	if (schema.$ref) {
		const refSchema = resolveRef(schema.$ref, definitions)
		return refSchema
			? refSchema.title || schema.$ref.split("/").pop()
			: "any"
	}

	switch (schema.type) {
		case "object":
			return generateObjectType(schema, definitions)
		case "array":
			return `${generateTypes(schema.items, definitions)}[]`
		case "integer":
			return "number"
		default:
			return schema.type || "any"
	}
}

/**
 * Generates TypeScript object type from a Swagger schema object.
 * @param {Object} schema - The Swagger schema object.
 * @param {Object} definitions - The Swagger definitions object.
 * @return {string} The TypeScript object type definition.
 */
export function generateObjectType(schema, definitions) {
	return `{ ${Object.keys(schema.properties)
		.map(
			(key) =>
				`${key}: ${generateTypes(schema.properties[key], definitions)}`,
		)
		.join("; ")} }`
}

/**
 * Generates TypeScript definitions for Swagger definitions.
 * @param {Object} definitions - The Swagger definitions object.
 * @return {string} The TypeScript definitions as a string.
 */
export function generateDefinitions(definitions) {
	return Object.entries(definitions)
		.map(([defName, def]) => {
			const type = generateTypes(def, definitions, defName)
			return `export type ${defName} = ${type};\n`
		})
		.join("\n")
}

/**
 * Generates TypeScript types for Swagger endpoint parameters and responses.
 * @param {Object} paths - The Swagger paths object.
 * @param {Object} definitions - The Swagger definitions object.
 * @return {string} The TypeScript types for endpoints as a string.
 */
export function generateEndpointTypes(paths, definitions) {
	return Object.entries(paths)
		.map(([path, methods]) => {
			return Object.entries(methods)
				.map(([method, operation]) => {
					const endpointName = toPascalCase(
						path.slice(1).replace(/[{}]/g, ""),
					)
					const requestTypeName = `${endpointName}Req`
					const responseTypeName = `${endpointName}Res`

					const requestType = generateRequestType(
						operation,
						definitions,
					)
					const responseType = generateResponseType(
						operation,
						definitions,
					)

					return (
						`export type ${requestTypeName} = ${requestType};\n` +
						`export type ${responseTypeName} = ${responseType};\n`
					)
				})
				.join("\n")
		})
		.join("\n")
}

/**
 * Generates TypeScript type for Swagger operation request.
 * @param {Object} operation - The Swagger operation object.
 * @param {Object} definitions - The Swagger definitions object.
 * @return {string} The TypeScript type for the request.
 */
export function generateRequestType(operation, definitions) {
	if (!operation.parameters) return "undefined"

	return `{ ${operation.parameters
		.map((param) => {
			const paramType = param.schema
				? generateTypes(param.schema, definitions)
				: param.type === "integer"
					? "number"
					: param.type || "any"
			return `${param.name}: ${paramType}`
		})
		.join("; ")} }`
}

/**
 * Generates TypeScript type for Swagger operation response.
 * @param {Object} operation - The Swagger operation object.
 * @param {Object} definitions - The Swagger definitions object.
 * @return {string} The TypeScript type for the response.
 */
export function generateResponseType(operation, definitions) {
	const responseSchema = operation.responses?.["200"]?.schema
	if (!responseSchema) return "undefined"

	return generateTypes(responseSchema, definitions)
}

/**
 * Main function to convert Swagger JSON to TypeScript definitions.
 * @param {string} swaggerUrl - The URL to the Swagger JSON.
 * @param {string} outputFilePath - The file path to write the TypeScript definitions.
 */
export async function convertSwaggerToTS(swaggerUrl, outputFilePath) {
	try {
		const response = await axios.get(swaggerUrl)
		const swaggerJSON = response.data
		const definitions = swaggerJSON.definitions || {}
		const paths = swaggerJSON.paths || {}

		const tsDefinitions = generateDefinitions(definitions)
		const tsEndpoints = generateEndpointTypes(paths, definitions)

		const tsContent = `${tsDefinitions}\n${tsEndpoints}`

		fs.writeFileSync(outputFilePath, tsContent)
		console.log(`Typescript definitions written to ${outputFilePath}`)
	} catch (error) {
		console.error("Error converting Swagger to TypeScript:", error)
	}
}

// Input and output file paths for Swagger JSON and TypeScript definitions
const swaggerUrl = process.argv[2]
const outputFilePath = "./types/rest_types.ts"

// Execute the conversion
convertSwaggerToTS(swaggerUrl, outputFilePath).catch(console.error)

// Esegui Prettier per formattare il file generato
exec(`prettier --write ${outputFilePath}`, (err, stdout, stderr) => {
	if (err) {
		console.error("Errore durante l'esecuzione di Prettier:", err)
		return
	}
	console.log(`Prettier ha formattato il file: ${outputFilePath}`)
})
