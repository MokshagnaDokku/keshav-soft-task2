import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
  base: './',   // <--- ADD THIS LINE (This makes paths relative)
  root: 'src', 
  build: {
    outDir: '../dist', 
    emptyOutDir: true, // Cleans the dist folder before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        contact: resolve(__dirname, 'src/contact.html'),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/templates/partials'), 
    }),
  ],
});