import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_SITE_BASE || '/oliva-and-partners-lawfirm/',
  server: {
    proxy: { '/api': 'http://127.0.0.1:3001' },
  },
});
