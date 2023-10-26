import { resolve }  from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Vinyl/',
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve('index.html'),
      }
    }
  }
})

