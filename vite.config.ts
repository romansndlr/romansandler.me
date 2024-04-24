import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    manifest: true,
    copyPublicDir: false,
    rollupOptions: {
      input: ['./src/css/app.css', 'src/js/app.ts'],
    },
  },
  plugins: [
    tsconfigPaths(),
    devServer({
      entry: './app/index.tsx',
    }),
  ],
  server: {
    port: 3000,
  },
})
