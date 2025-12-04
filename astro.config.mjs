// @ts-check
import { defineConfig } from 'astro/config';
//import supersub from 'remark-supersub';

export default defineConfig({
  output: 'server',
  markdown: {
   // remarkPlugins: [supersub],
  },
});
