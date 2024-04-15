import { clsx } from 'clsx'
import type { PropsWithChildren } from 'hono/jsx'
import { jsxRenderer, useRequestContext } from 'hono/jsx-renderer'
import { Link } from '#/components/link'

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

export const appLayout = jsxRenderer(({ children }) => {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Roman Sandler's personal website" />
        <title>Roman Sandler</title>
        {/* The only context where this shouldn't be applied in is Vite build time */}
        {mainStylesPath && <link rel="stylesheet" href={mainStylesPath} />}
      </head>
      <body className="h-full antialiased dark:bg-black dark:text-white">
        <div className="mx-auto flex h-full max-w-3xl flex-col py-10 px-6 md:py-14 md:px-8">
          <header class="border-b py-6">
            <h1 className="text-3xl font-semibold md:text-4xl">
              <a href="/" aria-label="Home page">
                Roman Sandler
              </a>
            </h1>
            <nav class="mt-6">
              <ul class="flex gap-x-4">
                <li>
                  <NavLink href="/work">Work</NavLink>
                </li>
                <li>
                  <NavLink href="/talks">Talks</NavLink>
                </li>
              </ul>
            </nav>
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
})

function NavLink({ children, href }: PropsWithChildren<{ href: string }>) {
  const context = useRequestContext()
  const path = context.req.routePath

  return (
    <a class={clsx(path === href && 'font-semibold')} href={href}>
      {children}
    </a>
  )
}
