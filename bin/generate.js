#!/usr/bin/env node

import {  exec } from "child_process"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const swaggerUrl = process.argv[2];

if (!swaggerUrl) {
  console.error('Usage: swagger-to-ts-type <your-swagger-file-url>');
  process.exit(1);
}

function generateTypes(swaggerUrl) {
  const scriptPath = path.resolve(__dirname, '../docgen.js');
  const command = `node ${scriptPath} ${swaggerUrl}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Script error: ${stderr}`);
      return;
    }

    console.log(stdout);
  });
}

generateTypes(swaggerUrl);