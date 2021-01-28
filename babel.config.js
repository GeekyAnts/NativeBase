module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-react'],
  plugins:
    process.env.NODE_ENV === 'production' ? ['transform-remove-console'] : [],
};
