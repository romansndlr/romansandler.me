import { MiddlewareHandler } from 'hono'

const ONE_YEAR = 60 * 60 * 24 * 365

export const assetCache: MiddlewareHandler = async (c, next) => {
  // never expire the assets since they have a hash in the file name
  c.header('Cache-Control', `max-age=${ONE_YEAR}, immutable`)

  await next()
}
