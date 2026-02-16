// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://michael-w271.github.io',
  base: '/ml-portfolio',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx()]
});
