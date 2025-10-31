import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/react-js-jsx-and-css-mastering-front-end-development-KimaniImmaculate/', // add this
  plugins: [
    react(),
    tailwindcss(),
  ],
});



