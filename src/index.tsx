import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import { Mark } from './components/mark'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Link } from './components/link'
import './styles/main.css'

const ONE_YEAR = 60 * 60 * 24 * 365
const ONE_WEEK = 60 * 60 * 24 * 7
const FIVE_MINUTES = 60 * 5

const isDev = process.env.NODE_ENV === 'development'

let mainStylesPath = ''

// Only when running the Vite dev server we set the path to the source file
if (isDev) {
  mainStylesPath = '/src/styles/main.css'
} else {
  const viteManifest = await import('../dist/.vite/manifest.json')

  const hashedPath = viteManifest.default['src/index.tsx'].css[0]

  if (hashedPath) {
    mainStylesPath = hashedPath
  }
}

const app = new Hono()

app.use(logger())

app.use(
  '/assets/*',
  async (c, next) => {
    // never expire the assets since they have a hash in the file name
    c.header('Cache-Control', `max-age=${ONE_YEAR}, immutable`)

    await next()
  },
  serveStatic({ root: './dist' }),
)

app.use(
  '*',
  jsxRenderer(({ children }) => (
    <html lang="en" className="min-h-full">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Roman Sandler</title>
        {/* The only context where this shouldn't be applied in is Vite build time */}
        {mainStylesPath && <link rel="stylesheet" href={mainStylesPath} />}
      </head>
      <body className="min-h-full antialiased dark:bg-black dark:text-white">
        <div className="mx-auto flex h-full min-h-full max-w-3xl flex-col py-10 px-6 md:py-14 md:px-8">
          <header>
            <h1 className="text-3xl font-semibold md:text-4xl">
              <a href="/" aria-label="Home page">
                Roman Sandler
              </a>
            </h1>
          </header>
          <main className="mt-6 flex-1">{children}</main>
          <footer class="border-t pt-6">
            This website is powered by <Link href="https://bun.sh/">Bun</Link>{' '}
            and <Link href="https://hono.dev/">Hono</Link>
          </footer>
        </div>
      </body>
    </html>
  )),
)

app.get(
  '/',
  async (c, next) => {
    c.header(
      'Cache-Control',
      `max-age=${FIVE_MINUTES}, stale-while-revalidate=${ONE_WEEK}`,
    )

    await next()
  },
  (c) =>
    c.render(
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
      </div>,
    ),
)

export default {
  port: 3000,
  fetch: app.fetch,
}
