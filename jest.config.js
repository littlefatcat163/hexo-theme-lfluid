/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!src/create-lnote.ts',
    '!src/register-lnote.ts'
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'yml'
  ],
  transform: {
    '\\.yml$': 'jest-transform-yaml'
  },
  testTimeout: 10000
}