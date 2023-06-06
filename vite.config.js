import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cv-project/', // set this to your repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // set this to 'docs' for GitHub Pages
    assetsDir: '.', // set this to '.' to inline assets in the HTML
    rollupOptions: {
      input: {
        main: './index.html' // set the main entry point as index.html
      },
      output: {
        entryFileNames: 'folder/scripts.js'
      }
    }
  }
});
