import { clsx } from 'clsx'
import type { PropsWithChildren } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'

export function NavLink({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  const context = useRequestContext()
  const path = context.req.routePath

  return (
    <a class={clsx(path === href && 'font-semibold')} href={href}>
      {children}
    </a>
  )
}
