import { Home } from './components/pages/home'
import { Talks } from './components/pages/talks'
import { Work } from './components/pages/work'
import { createRouter } from './lib/router'

const router = createRouter()

router.get('/', (c) => c.render(<Home />))
router.get('/work', (c) => c.render(<Work />))
router.get('/talks', (c) => c.render(<Talks />))

export default {
  port: 3000,
  fetch: router.fetch,
}
