module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:
    process.env.NODE_ENV === 'production'
      ? ['transform-remove-console']
      : [
          [
            'module-resolver',
            {
              alias: {
                // For development, we want to alias the library to the source
                'styled-system': path.join(
                  __dirname,
                  'src',
                  'styled-system',
                  'styled-system',
                  'src',
                  'index.js'
                ),
              },
            },
          ],
        ],
};
