// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://terrazulspa.cl',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Cada ruta queda como carpeta/index.html: funciona tal cual en Apache,
    // Nginx o cualquier hosting estático, sin reglas de reescritura.
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
