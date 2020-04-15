// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
// import typescript from '@rollup/plugin-sucrase';
// import flow from 'rollup-plugin-flow';
// import commonjs from 'rollup-plugin-commonjs';
import commonjs from '@rollup/plugin-commonjs';
import externalPeer from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import json from 'rollup-plugin-json';
import multiInput from 'rollup-plugin-multi-input';
// import sourceMaps from 'rollup-plugin-sourcemaps';
import babel from 'rollup-plugin-babel';
import jsx from 'acorn-jsx';
import path from 'path';

import pkg from './package.json';
import tsconfig from './tsconfig.json';
const bCfg = pkg.babel;
const extensions = ['.tsx', '.json', '.ts'];
const dependencies = ({ dependencies }) => Object.keys(dependencies || {});
const external = dependencies(pkg);

export default {
  input: ['src/**/*.ts', 'src/**/*.tsx', '!src/__tests__/**/*'],
  output: [
    {
      dir: path.dirname(pkg.main),
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: path.dirname(pkg.module),
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  external,
  acornInjectPlugins: [jsx({ allowNamespaces: false })],
  plugins: [
    multiInput(),
    // sourceMaps(),
    externalPeer(),
    resolve({
      module: false,
      jsnext: true,
      browser: true,
      extensions,
    }),
    // flow(),
    // typescript({
    //   exclude: ['node_modules/**'],
    //   transforms: ['jsx', 'typescript', 'imports']
    // }),
    json(),
    typescript({
      include: 'src/**/*.{ts,tsx}',
      rollupCommonJSResolveHack: true,
      tsconfig: 'tsconfig.json',
      clean: true,
      abortOnError: false,
      exclude: ['node_modules/**', '**/__tests__/**'],
      extensions,
    }),
    // typescript({ module: 'CommonJS', noEmitOnError: false }),
    babel({
      ...bCfg,
    }),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['**/__tests__/**', 'node_modules/react-native-vector-icons/lib/**'],
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
        extensions,
      },
    }),
  ],
};
