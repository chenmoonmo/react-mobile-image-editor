import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';

import pkg from './package.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
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
    copy({
      targets: [
        {
          src: 'src/assets/icons',
          dest: 'dist/icons'
        },
      ],
    }),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),

    commonjs(),
   
  ],
};
