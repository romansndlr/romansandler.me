import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { assetCache } from './middleware/asset-cache'
import { appLayout } from './middleware/app-layout'
import { logger } from 'hono/logger'
import { workController } from './controllers/work'
import { homeController } from './controllers/home'
import './styles/main.css'

const app = new Hono()

/***************************************
 * Middleware
 ***************************************/

// built in middleware
app.use(logger())

// Assets are generated by Vite to the dist folder
app.use('/assets/*', assetCache, serveStatic({ root: './dist' }))

// Currently all the routes should have the same layout
app.use('*', appLayout)

/***************************************
 * Router
 ***************************************/

app.get('/', ...homeController)
app.get('/work', ...workController)

/***************************************
 * Server
 ***************************************/

export default {
  port: 3000,
  fetch: app.fetch,
}
