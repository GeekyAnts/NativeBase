// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
// https://kulshekhar.github.io/ts-jest/user/react-native/

// const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./.scripts/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|native-base-shoutem-theme|react-native-keyboard-aware-scroll-view|react-native-iphone-x-helper|react-native-vector-icons)/)',
  ],
};
