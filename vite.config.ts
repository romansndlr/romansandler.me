import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
  build: {
    target: 'esnext',
    manifest: true,
    rollupOptions: {
      input: ['./src/index.tsx'],
      external: (id) => id.includes('manifest.json'),
    },
    copyPublicDir: false,
  },
  plugins: [
    devServer({
      entry: './src/index.tsx',
    }),
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
})
