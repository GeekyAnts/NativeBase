const config = {
  projects: [{ preset: 'jest-expo/web' }, { preset: 'jest-expo/node' }],
  transformIgnorePatterns: [
    '<rootDir>/../node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  setupFilesAfterEnv: ['<rootDir>/__mocks__/globalMock.js'],
  globals: {
    window: {},
  },
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js', // replaces .css imports with an empty object
    '\\.(jpg|png|gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js', // replaces file imports with a useless string
    '^react($|/.+)': '<rootDir>/node_modules/react$1', // makes sure all React imports are running off of the one in this package.
  },
};

module.exports = config;
