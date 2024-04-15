import type { MiddlewareHandler } from 'hono'

const ONE_WEEK = 60 * 60 * 24 * 7
const FIVE_MINUTES = 60 * 5

export const htmlCache: MiddlewareHandler = async (c, next) => {
  c.header(
    'Cache-Control',
    `max-age=${FIVE_MINUTES}, stale-while-revalidate=${ONE_WEEK}`,
  )

  await next()
}
