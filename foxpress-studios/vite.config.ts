import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle:  { optimizationLevel: 7 },
      optipng:   { optimizationLevel: 7 },
      mozjpeg:   { quality: 75 },
      pngquant:  { quality: [0.7, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: true },
        ],
      },
      webp: { quality: 75 },
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    target:           'esnext',
    minify:           'terser',
    cssMinify:        true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react';
          }
          if (id.includes('node_modules/react-router-dom/')) {
            return 'router';
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'framer';
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'icons';
          }
        }
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
