// jest.config.js
export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx$': 'babel-jest',
    },
};