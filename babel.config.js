module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-typescript-to-proptypes',
          {
            comments: true,
            strict: true,
            typeCheck: true,
          },
        ],
      ],
    },
  },
};
