import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    manifest: true,
    copyPublicDir: false,
    rollupOptions: {
      input: ['./resources/css/app.css'],
    },
  },
  plugins: [
    tsconfigPaths(),
    devServer({
      entry: './app/server.tsx',
    }),
  ],
  server: {
    port: 3000,
  },
})
