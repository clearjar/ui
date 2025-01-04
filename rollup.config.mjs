import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { readFileSync } from 'fs';
import terser from '@rollup/plugin-terser';
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default [
  {
    input: 'src/index.ts', // Main entry point
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: './tsconfig.json'
      }),
      postcss({
        extract: true,
        modules: true,
        use: ['sass'],
        inject: true,
        minimize: true
      }),
      terser(),
    ],
    external: [
      'react', 
      'react-dom',
    ]
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts.default()],
    external: [
      /\.css$/,
      /\.scss$/,
      'react',
      'react-dom'
    ]
  },
];