module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(test).ts'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    modulePathIgnorePatterns: [
      '<rootDir>/Desktop/drone-fleet-api backup',
      '<rootDir>/Desktop/drone-fleet-api v2',
      '<rootDir>/.vscode',
      '<rootDir>/Desktop/Lambdas',
      '<rootDir>/AppData/Local/Programs/Microsoft VS Code/resources/app/extensions',
      '<rootDir>/Desktop/HogentY2'
    ]
  };
  