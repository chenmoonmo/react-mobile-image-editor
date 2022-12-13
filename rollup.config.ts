import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import svgr from '@svgr/rollup'

import pkg from './package.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: `src/index.ts`,
    output: [
      { file: `${pkg.main}`, format: 'cjs' },
      { file: `${pkg.module}`, format: 'es' },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    watch: {
      include: 'src/**',
    },
    plugins: [
      resolve({
        browser: true,
      }),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      svgr({icon: true }),
      commonjs(),
    ],
  },
  {
    input: 'src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
