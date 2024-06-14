#!/usr/bin/env node

import { spawnSync } from "child_process"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const args = process.argv.slice(2) // Get the command line arguments
const linkFileFrom = args[0] // Assume the parameter is the first argument

if (!linkFileFrom) {
	console.error("Error: link_file_from parameter is required.")
	process.exit(1)
}

// Resolve the path to docgen.js relative to this script
const scriptPath = resolve(__dirname, "../docgen.js")

const result = spawnSync("node", [scriptPath, linkFileFrom], {
	stdio: "inherit",
})

if (result.error) {
	console.error('Error running "node docgen.js":', result.error)
	process.exit(1)
}

process.exit(result.status)
