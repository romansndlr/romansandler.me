import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: ['./src/index.tsx'],
    },
    copyPublicDir: false,
  },
  plugins: [
    devServer({
      entry: './src/index.tsx',
    }),
    tailwindcss(),
  ],
})
