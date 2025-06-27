// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://3333444n.github.io',
  base: '/karen-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});