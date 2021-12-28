export default {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.dev.json',
    },
    __basedir: '<rootDir>',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/test/*(test|spec)).*|(\\.|/)(test|spec)\\.(jsx?|tsc?)$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/test/coverage/.*',
    'test/mocks/.*',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  coverageDirectory: './test/coverage/',
  coveragePathIgnorePatterns: ['/test/.*', 'node_modules'],
  coverageProvider: 'v8',
};
