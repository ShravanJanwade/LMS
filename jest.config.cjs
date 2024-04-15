// jest.config.js

module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Set test environment to jest-environment-jsdom
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transform .jsx files using babel-jest
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/mock.css', // Mock CSS files
  },
};
