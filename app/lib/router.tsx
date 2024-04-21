import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import { baseRenderer } from './renderer'

export function createRouter() {
  const app = new Hono()

  app.use('/assets/*', (c, next) => {
    const ONE_YEAR = 60 * 60 * 24 * 365

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
    const ONE_WEEK = 60 * 60 * 24 * 7
    const FIVE_MINUTES = 60 * 5

    c.header(
      'Cache-Control',
      `max-age=${FIVE_MINUTES}, stale-while-revalidate=${ONE_WEEK}`,
    )

    return next()
  })

  // Render the base layout for all routes
  app.get('*', baseRenderer)

  return app
}
