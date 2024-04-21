import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import { NotFound } from './components/pages/404'
import { Home } from './components/pages/home'
import { Talks } from './components/pages/talks'
import { Work } from './components/pages/work'
import { renderer } from './renderer'

const ONE_YEAR = 60 * 60 * 24 * 365
const ONE_WEEK = 60 * 60 * 24 * 7
const FIVE_MINUTES = 60 * 5

const app = new Hono()

app.use('/assets/*', (c, next) => {
  // never expire the assets since they have a hash in the file name
  c.header('Cache-Control', `max-age=${ONE_YEAR}, immutable`)

  // Assets are compiled by Vite to the dist folder
  return serveStatic({ root: './dist' })(c, next)
})

app.use('/public/*', serveStatic({ root: './' }))

// Log all requests
app.use(logger())

// Cache all pages for 5 minutes
app.use((c, next) => {
  c.header(
    'Cache-Control',
    `max-age=${FIVE_MINUTES}, stale-while-revalidate=${ONE_WEEK}`,
  )

  return next()
})

app.get('*', renderer)

app.get('/', (c) => c.render(<Home />))

app.get('/talks', (c) => c.render(<Talks />))

app.get('/work', (c) => c.render(<Work />))

app.notFound((c) => c.render(<NotFound />))

export default {
  port: 3000,
  fetch: app.fetch,
}
