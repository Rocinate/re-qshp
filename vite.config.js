import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression(), visualizer()],
  resolve: {
    alias: {
      '@' : fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  server: {
    port: 5900,
    proxy: {
      '/dev' : {
        target: 'http://121.4.126.180:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, '')
      }
    }
  },
})
