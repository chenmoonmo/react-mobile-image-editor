import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import svgr from '@svgr/rollup'

import tsTreeshaking from 'rollup-plugin-ts-treeshaking';

import pkg from './package.json';

const config =  [
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
      svgr({icon: true }),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      tsTreeshaking(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];

export default config;