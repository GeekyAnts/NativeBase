/** @type {import('next').NextConfig} */
const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const path = require('path');
const withTM = require('next-transpile-modules')(['react-native-web']);

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': path.resolve(
        __dirname,
        'node_modules',
        'react-native-web'
      ),
      'native-base': path.resolve(__dirname, '..', 'src'),
      'react': path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
      'react-native-web': path.resolve(
        __dirname,
        'node_modules',
        'react-native-web'
      ),
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
};

module.exports = withPlugins(
  [withTM, [withExpo, { projectRoot: __dirname }]],
  nextConfig
);
