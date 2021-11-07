import fs from "fs";
import swc from 'rollup-plugin-swc';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const swcConf = JSON.parse(fs.readFileSync(new URL(".swcrc", import.meta.url), {encoding: 'utf8'}));

export default [{
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'default'
  },
  plugins: [
    nodeResolve({
      extensions: ['.ts'],
    }),
    swc(swcConf),
  ]
}]
