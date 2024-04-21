import type { MiddlewareHandler } from 'hono'

const ONE_YEAR = 60 * 60 * 24 * 365
const ONE_WEEK = 60 * 60 * 24 * 7
const FIVE_MINUTES = 60 * 5

export const assetsCache: MiddlewareHandler = async (c, next) => {
  // never expire the assets since they have a hash in the file name
  c.header('Cache-Control', `max-age=${ONE_YEAR}, immutable`)

  await next()
}

export const htmlCache: MiddlewareHandler = async (c, next) => {
  c.header(
    'Cache-Control',
    `max-age=${FIVE_MINUTES}, stale-while-revalidate=${ONE_WEEK}`,
  )

  await next()
}
