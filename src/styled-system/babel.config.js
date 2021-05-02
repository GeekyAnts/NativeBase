module.exports = {
  presets: [['@babel/env', { loose: true }], '@babel/preset-react'],
  // plugins: ['@babel/transform-runtime'],
  env: {
    esm: {
      presets: [
        ['@babel/env', { loose: true, modules: false }],
        '@babel/preset-react',
      ],
      // plugins: [['@babel/transform-runtime', { useESModules: true }]],
    },
  },
}
