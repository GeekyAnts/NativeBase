const config = {
  preset: 'jest-expo/ios',
  transformIgnorePatterns: [
    '<rootDir>/../node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  setupFilesAfterEnv: ['<rootDir>/__mocks__/globalMock.js'],
};

module.exports = config;
