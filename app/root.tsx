import type { LinksFunction } from '@remix-run/node'
import type { NavLinkProps } from '@remix-run/react'
import {
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
import React from 'react'

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
  const [lightsOn, setLightsOn] = React.useState(false)

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full flex flex-col bg-zinc-50 text-zinc-900">
        <div className="bg-white relative ring-1 w-full flex-1 ring-zinc-300 mx-auto max-w-6xl lg:px-8">
          <header className="relative">
            <div className="flex items-center justify-center h-24">
              <div className="absolute">
                <div
                  className="absolute w-full h-full top-3 left-3 z-0 bg-zinc-300 border border-zinc-400 shadow-inner"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a1a1aa' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                <div className="shadow relative z-10">
                  <nav className="flex gap-x-6 px-6 ring-1 ring-inset ring-zinc-400 bg-white overflow-hidden">
                    <NavbarLink to="/about">About</NavbarLink>
                    <NavbarLink to="/blog">Blog</NavbarLink>
                    <NavbarLink to="/projects">Projects</NavbarLink>
                    <NavbarLink to="/podcast">Podcast</NavbarLink>
                    <NavbarLink to="/talks">Talks</NavbarLink>
                  </nav>
                </div>
              </div>
              <button
                onClick={() => setLightsOn((prevLightsOn) => !prevLightsOn)}
                className={clsx(
                  'absolute right-6 top-7 border rounded-full p-2',
                  {
                    'text-yellow-500 border-yellow-500 bg-yellow-100 shadow shadow-yellow-400 hover:shadow-none':
                      lightsOn,
                    'text-zinc-500 border-zinc-400 shadow-inner hover:bg-zinc-50':
                      !lightsOn,
                  }
                )}
              >
                {lightsOn ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-50.34,2.34a8,8,0,0,0-11.32,0L128,132.69l-26.34-26.35a8,8,0,0,0-11.32,11.32L120,147.31V184a8,8,0,0,0,16,0V147.31l29.66-29.65A8,8,0,0,0,165.66,106.34Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
                  </svg>
                )}
              </button>
            </div>
          </header>
          <main className="mt-20 px-6 lg:px-32">
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

function NavbarLink({ children, ...props }: NavLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          'py-4',
          isActive
            ? 'border-b border-zinc-800 text-zinc-800'
            : 'text-zinc-500 hover:text-zinc-800'
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}
