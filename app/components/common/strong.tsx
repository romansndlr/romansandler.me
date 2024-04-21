import type { PropsWithChildren } from 'hono/jsx'

export function Strong({ children }: PropsWithChildren) {
  return <strong className="font-semibold">{children}</strong>
}
