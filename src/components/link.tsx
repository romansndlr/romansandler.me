import { PropsWithChildren } from 'hono/jsx'

export function Link({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a
      className="font-semibold underline underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  )
}
