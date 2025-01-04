import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'lib/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extract: 'styles.css',
        modules: false,
        use: ['sass'],
        inject: false,
      }),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.(css|scss|woff2?|ttf)$/],
  },
];