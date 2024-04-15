import { htmlCache } from '../middleware/html-cache'
import { createFactory } from 'hono/factory'

const factory = createFactory()

export const workController = factory.createHandlers(htmlCache, (c) =>
  c.render(<div>fpp</div>),
)
