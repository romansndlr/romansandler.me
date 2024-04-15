import devServer from '@hono/vite-dev-server'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

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
    tsconfigPaths(),
    devServer({
      entry: './src/index.tsx',
    }),
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
})
