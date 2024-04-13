import { PropsWithChildren } from 'hono/jsx'

const isProd = process.env.NODE_ENV === 'production'

export async function Layout({ children }: PropsWithChildren) {
  let mainStylesPath = '/src/styles/main.css'

  if (isProd) {
    const viteManifest = await import('../../dist/.vite/manifest.json')

    const hashedPath = viteManifest.default['src/index.tsx'].css[0]

    if (hashedPath) {
      mainStylesPath = hashedPath
    }
  }

  return (
    <html lang="en" className="min-h-full">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href={mainStylesPath} />
      </head>
      <body className="min-h-full antialiased dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  )
}
