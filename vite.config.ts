import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import Pages from 'vite-plugin-pages'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  base   : 'https://ethonline2022-ens-analytics.github.io/ens-analytics-fe/',
  plugins: [ react(), eslint(), Pages() ],
  define : {
    global: 'globalThis'
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  }
})