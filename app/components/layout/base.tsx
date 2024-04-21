import type { PropsWithChildren } from 'hono/jsx'
import { Link } from '../common/link'
import { NavLink } from '../common/nav-link'
import { asset } from '#/lib/url'

export async function BaseLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Roman Sandler's personal website" />
        <meta name="turbo-refresh-method" content="morph" />
        <meta name="turbo-refresh-scroll" content="preserve" />
        <title>Roman Sandler</title>
        <link rel="stylesheet" href={await asset('resources/css/app.css')} />
      </head>
      <body className="h-full antialiased dark:bg-black dark:text-white">
        <div className="mx-auto flex h-full max-w-3xl flex-col px-6 py-10 md:px-8 md:py-14">
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
        <script type="module" src={await asset('resources/js/app.ts')} />
      </body>
    </html>
  )
}
