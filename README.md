# Swagger to TypeScript Types Generator

  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Code Formatting](#code-formatting)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)


This project provides a tool to convert Swagger (OpenAPI 2.0) API definitions into TypeScript types. It uses `axios` to fetch Swagger definitions from a URL and `fs` to write the generated types to a `.ts` file.

## Features

- Converts Swagger definitions into TypeScript types.
- Supports `$ref` references resolution within Swagger definitions.
- Generates TypeScript types for operation requests and responses.

## Prerequisites

Before you begin, ensure you have Node.js installed on your machine. This project has been tested with Node.js version 14.x.

## Installation

To install the project dependencies, run the following command:

```
npm install
```

## Usage

To generate TypeScript types from a Swagger file, run the following command:
```
npm run generate <your-swagger-file-url>
```


Where `<your-swagger-file-url>` is the URL of your Swagger JSON file.

The generated TypeScript types will be written to the file `./types/rest_types.ts`.

## Code Formatting

To format the codebase, run the following command:
```
npm run format
```

## Testing

To run the tests and verify the correctness of the functions, use the following command:

```
npm test
```


## Contributing

If you would like to contribute to the project, please submit a pull request with your changes or open an issue to discuss what you would like to change.

## License

This project is released under the MIT License.
