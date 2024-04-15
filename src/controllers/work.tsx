import { createFactory } from 'hono/factory'
import { htmlCache } from '#/middleware/html-cache'

const factory = createFactory()

export const workController = factory.createHandlers(htmlCache, (c) =>
  c.render(<div>fpp</div>),
)
