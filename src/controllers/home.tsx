import { Hono } from 'hono'
import { htmlCache } from '../middleware/html-cache'
import { Mark } from '../components/mark'

export const homeController = new Hono()

homeController.get('/', htmlCache, (c) =>
  c.render(
    <div class="space-y-6 text-2xl leading-relaxed">
      <p>
        Hi! I'm Roman Sandler, I am a former educator turned software engineer
        from Tel Aviv, Israel.
      </p>
      <p>
        I love everything about building software for the web, and I love
        sharing everything I know about it.
      </p>
      <p>
        I mostly work with <Mark>TypeScript</Mark>, <Mark>React</Mark>, and{' '}
        <Mark>Tailwind CSS</Mark>, but I'm always playing around with new and
        exciting technologies.
      </p>
    </div>,
  ),
)
