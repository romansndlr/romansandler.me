import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { jsxRenderer } from 'hono/jsx-renderer'
import { logger } from 'hono/logger'
import { BaseLayout } from './components/layout/base'
import { Home } from './components/pages/home'
import { htmlCache, assetsCache } from './middleware/assets'

const app = new Hono()

/***************************************
 * Middleware
 ***************************************/

// Assets are compiled by Vite to the dist folder
app.use('/assets/*', assetsCache, serveStatic({ root: './dist' }))

app.use(logger())
app.use(jsxRenderer(BaseLayout))
app.use(htmlCache)

/***************************************
 * Router
 ***************************************/

app.get('/', (c) => c.render(<Home />))

/***************************************
 * Server
 ***************************************/

export default {
  port: 3000,
  fetch: app.fetch,
}
