import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://abogadosencdmx.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    }
  }
});
