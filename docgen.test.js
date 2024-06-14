import { describe, it, expect } from 'vitest';
import {   toPascalCase,
    resolveRef,
    generateTypes,
    generateObjectType,
    generateRequestType,
    generateResponseType } from './docgen';

describe('toPascalCase', () => {
  it('should convert a string to PascalCase', () => {
    expect(toPascalCase('some_string')).toBe('SomeString');
    expect(toPascalCase('another-string')).toBe('AnotherString');
    expect(toPascalCase('one more/string')).toBe('OneMoreString');
  });
});

describe('resolveRef', () => {
  it('should resolve a $ref to its actual definition', () => {
    const definitions = {
      SimpleRef: { type: 'string' }
    };
    expect(resolveRef('#/definitions/SimpleRef', definitions)).toEqual({ type: 'string' });
  });
});

describe('generateTypes', () => {
  it('should generate TypeScript types from Swagger schema definitions', () => {
    const definitions = {
      SimpleRef: { type: 'string' }
    };
    const schema = {
      $ref: '#/definitions/SimpleRef'
    };
    expect(generateTypes(schema, definitions)).toBe('SimpleRef');
  });
});

describe('generateRequestType', () => {
    it('should generate TypeScript type for Swagger operation request', () => {
      const operation = {
        parameters: [
          { name: 'id', in: 'query', schema: { type: 'integer' } },
          { name: 'name', in: 'query', schema: { type: 'string' } }
        ]
      };
      const definitions = {};
      const result = generateRequestType(operation, definitions);
      expect(result).toBe('{ id: number; name: string }');
    });
  });
  
  describe('generateRequestType with $ref', () => {
    it('should resolve $ref and generate TypeScript type for Swagger operation request', () => {
      const operation = {
        parameters: [
          { name: 'user', in: 'body', schema: { $ref: '#/definitions/User' } }
        ]
      };
      const definitions = {
        User: { type: 'object', properties: { id: { type: 'integer' }, name: { type: 'string' } } }
      };
      const result = generateRequestType(operation, definitions);
      expect(result).toBe('{ user: User }');
    });
  });