import { PropsWithChildren } from 'hono/jsx'

export function Blockquote({
  children,
  cite,
}: PropsWithChildren<{
  cite?: string
}>) {
  return (
    <blockquote className="my-4 space-y-3 border-l-4 border-black bg-black/5 py-3 pr-3 pl-4 font-medium xl:pl-6 dark:border-white dark:bg-white/10">
      <p>{children}</p>
      {cite && <cite className="block text-base xl:text-lg">- {cite}</cite>}
    </blockquote>
  )
}
