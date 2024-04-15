const {defaults} = require('jest-config');

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

module.exports = config;