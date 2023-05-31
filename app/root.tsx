import type { LinksFunction } from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import appStyles from './styles/app.css'
import fontStyles from './styles/fonts.css'
import clsx from 'clsx'

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: appStyles,
  },
  {
    rel: 'stylesheet',
    href: fontStyles,
  },
]

export default function App() {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full flex flex-col bg-zinc-50 text-zinc-900">
        <div className="bg-white ring-1 w-full flex-1 ring-zinc-200 mx-auto max-w-7xl lg:px-8">
          <header className="relative">
            <div className="flex items-center justify-center h-24">
              <div className="absolute">
                <div
                  className="absolute w-full h-full top-3 right-3 z-0 bg-zinc-100 ring-1 ring-zinc-300"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a1a1aa' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                <nav className="flex gap-x-6 px-6 ring-1 ring-inset ring-zinc-300 bg-white z-10 relative overflow-hidden">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      clsx(
                        'py-4',
                        isActive && 'font-medium border-b border-zinc-800'
                      )
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      clsx('py-4', isActive && 'font-medium')
                    }
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      clsx('py-4', isActive && 'font-medium')
                    }
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    to="/podcast"
                    className={({ isActive }) =>
                      clsx('py-4', isActive && 'font-medium')
                    }
                  >
                    Podcast
                  </NavLink>
                  <NavLink
                    to="/talks"
                    className={({ isActive }) =>
                      clsx('py-4', isActive && 'font-medium')
                    }
                  >
                    Talks
                  </NavLink>
                </nav>
              </div>
            </div>
          </header>
          <main className="mt-20 px-24">
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
