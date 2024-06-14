#!/usr/bin/env node

import { execSync } from "child_process"

const args = process.argv.slice(2) // Get the command line arguments
const linkFileFrom = args[0] // Assume the parameter is the first argument

if (!linkFileFrom) {
	console.error("Error: link_file_from parameter is required.")
	process.exit(1)
}

try {
	execSync(`node docgen.js ${linkFileFrom}`, { stdio: "inherit" })
} catch (error) {
	console.error('Error running "npm run generate":', error)
	process.exit(1) // Exit with error code
}
