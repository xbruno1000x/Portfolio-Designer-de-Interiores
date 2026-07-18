import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const fileEnv = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'PUBLIC_');
const siteUrl = process.env.PUBLIC_SITE_URL || fileEnv.PUBLIC_SITE_URL || 'https://portfolio-designer.bruno-faria.workers.dev';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
