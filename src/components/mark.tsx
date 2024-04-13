import { PropsWithChildren } from 'hono/jsx'

export function Mark({ children }: PropsWithChildren) {
  return (
    <mark className="rounded bg-black/10 py-0.5 px-1 font-medium leading-5 dark:bg-white/20 dark:text-white">
      {children}
    </mark>
  )
}
