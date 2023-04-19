const { defineConfig } = require('rollup');
// const replace = require('@rollup/plugin-replace');
const babel = require('@rollup/plugin-babel');
const typescript = require('rollup-plugin-typescript2');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
// const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { terser } = require('rollup-plugin-terser');
const sourcemaps = require('rollup-plugin-sourcemaps');
const { visualizer } = require('rollup-plugin-visualizer');
// const emotion = require('rollup-plugin-emotion');
const strip = require('@rollup/plugin-strip');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  resolve({ extensions }),
  commonjs(),
  typescript({
    tsconfigOverride: {
      exclude: [
        '**/__tests__',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.tsx',
      ],
    },
  }),
  babel({
    exclude: 'node_modules/**',
    extensions,
    plugins: ['@babel/plugin-transform-runtime'],
    babelHelpers: 'runtime',
    skipPreflightCheck: true,
  }),
  sourcemaps(),
  visualizer({
    filename: './statistics.html',
    title: 'Bundle Size Stats',
  }),
];

const output = [
  {
    dir: 'lib',
    format: 'cjs',
    sourcemap: isProduction,
    exports: 'named',
  },
  {
    dir: 'lib/esm',
    format: 'esm',
    sourcemap: isProduction,
    exports: 'named',
  },
];

const productionPlugins = [
  strip({
    functions: ['console.log'],
    labels: ['DEBUG'],
    sourceMap: true,
  }),
  terser({
    compress: {
      drop_console: true,
      passes: 2,
    },
    output: {
      comments: false,
    },
  }),
];

module.exports = defineConfig({
  input: 'src/index.ts',
  output,
  plugins: [...plugins, ...productionPlugins],
});
