import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@' : fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  server: {
    proxy: {
      '/dev' : 'http://127.0.0.1:4523/mock/1045892/',
    }
  },
})
