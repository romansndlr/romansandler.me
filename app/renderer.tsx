import { jsxRenderer } from 'hono/jsx-renderer'
import { Link } from '#/components/common/link'
import { asset } from '#/lib/url'

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string }): Response
  }
}

export const renderer = jsxRenderer(async ({ children, title }) => (
  <html lang="en" className="group h-full">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Roman Sandler's personal website" />
      <meta name="turbo-refresh-method" content="morph" />
      <meta name="turbo-refresh-scroll" content="preserve" />
      <title>Roman Sandler - {title}</title>
      <link rel="stylesheet" href={await asset('src/css/app.css')} />
      <script type="module" src={await asset('src/js/app.ts')} defer />

      {/* Initiate the dark/light mode based on the user's preference (inline to avoid FOUC) */}
      <script
        dangerouslySetInnerHTML={{
          __html: /* javascript */ `
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.dataset.theme = 'dark'
        } else {
          document.documentElement.dataset.theme = 'light'
        }
      `,
        }}
      />
    </head>
    <body className="h-full antialiased dark:bg-black dark:text-white">
      <div className="mx-auto flex h-full max-w-3xl flex-col px-6 py-10 md:px-8 md:py-14">
        <header className="border-b py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold md:text-4xl">
              <a href="/" aria-label="Home page">
                Roman Sandler
              </a>
            </h1>
            <DarkModeToggle />
          </div>
        </header>
        <main className="mt-6 flex-1">{children}</main>
        <footer className="border-t pt-6">
          This website is powered by <Link href="https://bun.sh/">Bun</Link> and{' '}
          <Link href="https://hono.dev/">Hono</Link>
        </footer>
      </div>
    </body>
  </html>
))

function DarkModeToggle() {
  return (
    <button
      type="button"
      role="switch"
      data-controller="dark-mode"
      data-action="click->dark-mode#toggle"
      className="relative inline-flex h-6 w-10 items-center rounded-full bg-black group-data-[theme=dark]:bg-white/20"
    >
      <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white transition group-data-[theme=dark]:translate-x-5"></span>
    </button>
  )
}
