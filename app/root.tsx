import type { LinksFunction } from '@remix-run/node'
import type { NavLinkProps } from '@remix-run/react'
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
import { twMerge } from 'tailwind-merge'

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
        <Cube className="fixed left-20 top-20" />
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
                  <NavbarLink to="/about">About</NavbarLink>
                  <NavbarLink to="/blog">Blog</NavbarLink>
                  <NavbarLink to="/projects">Projects</NavbarLink>
                  <NavbarLink to="/podcast">Podcast</NavbarLink>
                  <NavbarLink to="/talks">Talks</NavbarLink>
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

export function Cube({ className }: { className?: string }) {
  return (
    <div className={twMerge('relative rotate-45', className)}>
      <div className="h-10 w-10 bg-white border border-zinc-300 shadow animate-bounce z-10 relative" />
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a1a1aa' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        className="h-10 w-10 bg-zinc-100 absolute z-0 right-2 top-2 ring-1 ring-zinc-300"
      />
    </div>
  )
}
