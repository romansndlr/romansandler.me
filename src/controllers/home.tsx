import { createFactory } from 'hono/factory'
import { Mark } from '#/components/mark'
import { htmlCache } from '#/middleware/html-cache'

const factory = createFactory()

export const homeController = factory.createHandlers(htmlCache, (c) =>
  c.render(
    <div class="space-y-6 text-2xl leading-relaxed">
      <p>
        Hi! I'm Roman Sandler, I am a former educator turned software engineer.
        I live in Tel Aviv, Israel with my wife, two boys and one dog.
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
