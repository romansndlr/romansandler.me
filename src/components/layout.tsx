/**
 * We obviously can't run this server code in the browser,
 * but we have to process all of the src files
 * to get Vite to generate all the tailwind classes.
 *
 * So we need to consider 3 different environments here:
 * 1. Vite dev server runtime
 * 2. Vite build time
 * 3. Bun server runtime
 */

import { PropsWithChildren } from 'hono/jsx'
import { Link } from './link'

const isDev = process.env.NODE_ENV === 'development'

let mainStylesPath = ''

// Only when running the Vite dev server we set the path to the source file
if (isDev) {
  mainStylesPath = '/src/styles/main.css'
} else {
  const viteManifest = await import('../../dist/.vite/manifest.json')

  const hashedPath = viteManifest.default['src/index.tsx'].css[0]

  if (hashedPath) {
    mainStylesPath = hashedPath
  }
}

export async function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="min-h-full">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        {/* The only env where this shouldn't be applied in is Vite build time */}
        {mainStylesPath && <link rel="stylesheet" href={mainStylesPath} />}
      </head>
      <body className="min-h-full antialiased dark:bg-black dark:text-white">
        <div className="mx-auto flex min-h-full max-w-3xl flex-col py-10 px-6 md:py-14 md:px-8">
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
  )
}
