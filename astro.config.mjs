import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bakecode.co.uk',
  output: 'static',
  trailingSlash: 'never',
  redirects: {
    '/products': '/#products',
    '/services': '/#services',
    '/about': '/',
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
