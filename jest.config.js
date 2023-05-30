// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const config = {
  collectCoverageFrom: ['**/*.{js,jsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/lib',
    '<rootDir>/node_modules/',
    '<rootDir>/jest.config.js',
    '<rootDir>/webpack.*.js',
    '<rootDir>/.*rc.js',
    '<rootDir>/*/index.js', // ignore helper index files
    '<rootDir>/example',
  ],
  coverageReporters: ['json', 'text', 'lcov', 'clover'], // per https://github.com/facebook/jest/issues/9396#issuecomment-573328488
  coverageThreshold: {
    global: {
      branches: 88,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '.+\\.scss$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: ['<rootDir>/__tests__/helpers'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  transform: { '^.+\\.[jt]sx?$': ['babel-jest', { configFile: path.resolve(__dirname, '.babelrc') }] },
  transformIgnorePatterns: [
    // Since `@readme/variable` doesn't ship any transpiled code, we need to transform it as we're running tests.
    '<rootDir>/node_modules/@readme/variable/^.+\\.jsx?$',
  ],
};

module.exports = config;
