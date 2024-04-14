import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import { Layout } from './components/layout'
import { Mark } from './components/mark'
import './styles/main.css'

const ONE_YEAR = 60 * 60 * 24 * 365

const app = new Hono()

app.use(logger())

app.use(
  '/assets/*',
  async (c, next) => {
    // never expire the assets since they have a hash in the file name
    c.header('Cache-Control', `public, max-age=${ONE_YEAR}, immutable`)

    await next()
  },
  serveStatic({ root: './dist' }),
)

app.get('/', (c) => {
  return c.html(
    <Layout>
      <div class="space-y-6 text-2xl leading-relaxed">
        <p>
          Hi! I'm Roman Sandler, I am a former educator turned software engineer
          from Tel Aviv, Israel.
        </p>
        <p>
          I love everything about building software for the web, and I love
          sharing everything I know about it.
        </p>
        <p>
          I mostly work with <Mark>TypeScript</Mark>, <Mark>React</Mark>, and{' '}
          <Mark>Tailwind CSS</Mark>, but I'm always playing around with new and
          exciting technologies.
        </p>
      </div>
    </Layout>,
  )
})

export default {
  port: 3000,
  fetch: app.fetch,
}
