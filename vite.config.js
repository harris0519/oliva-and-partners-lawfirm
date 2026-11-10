import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { attorneys, practiceAreas } from './src/data/siteData.js';

// GitHub Pages serves files directly, so every clean route needs an entry page.
function githubPagesRoutes() {
  return {
    name: 'github-pages-routes',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const html = bundle['index.html'];
      if (!html || html.type !== 'asset') throw new Error('Missing built index.html');

      const routes = [
        'about', 'practice-areas', 'attorneys', 'insights', 'contact',
        ...practiceAreas.map(area => `practice-areas/${area.slug}`),
        ...attorneys.map(attorney => `attorneys/${attorney.slug}`),
      ];
      for (const route of routes) {
        this.emitFile({ type: 'asset', fileName: `${route}/index.html`, source: html.source });
      }
      this.emitFile({ type: 'asset', fileName: '404.html', source: html.source });
      this.emitFile({ type: 'asset', fileName: '.nojekyll', source: '' });
    },
  };
}

export default defineConfig({
  plugins: [react(), githubPagesRoutes()],
  base: process.env.VITE_SITE_BASE || '/oliva-and-partners-lawfirm/',
  server: {
    proxy: { '/api': 'http://127.0.0.1:3001' },
  },
});
