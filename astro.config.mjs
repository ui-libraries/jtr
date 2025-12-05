// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
//import supersub from 'remark-supersub';

export default defineConfig({
  output: 'server',

  markdown: {
   // remarkPlugins: [supersub],
  },

  adapter: node({
    mode: 'standalone',
  }),
});