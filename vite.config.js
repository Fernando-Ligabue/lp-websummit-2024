import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    chunkFileNames: "./assets/[name].[hash].js",
    assetFileNames: "./assets/[name].[hash].[ext]",
  },
})
