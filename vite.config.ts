import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    vitePluginFaviconsInject('./src/assets/favicon.png'),
  ],
})
