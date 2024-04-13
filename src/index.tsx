import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import { Layout } from './components/layout'
import { Blockquote } from './components/blockquote'
import { Link } from './components/link'
import { Mark } from './components/mark'
import { Strong } from './components/strong'
import './styles/main.css'

const ONE_YEAR = 60 * 60 * 24 * 365

const app = new Hono()

app.use(logger())

app.use(
  '/assets/*',
  async (c, next) => {
    // never expire the assets since they have a hash in the file name
    c.header('Cache-Control', `public, max-age=${ONE_YEAR}, immutable`)

    await next()
  },
  serveStatic({ root: './dist' }),
)

app.get('/', (c) => {
  return c.html(
    <Layout>
      <div className="mx-auto min-h-full max-w-3xl py-10 px-6 md:py-14 md:px-8">
        <header>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Hello! I'm{' '}
            <Link
              href="https://twitter.com/RomanSndlr"
              aria-label="Roman Sandler on Twitter, opens in new tab"
            >
              Roman Sandler
            </Link>
          </h2>
          <p className="mt-4 text-xl md:text-2xl md:leading-relaxed">
            I want to tell y'all why I believe I'd be an amazing hire for the{' '}
            <Strong>Design Engineer</Strong> role at{' '}
            <Strong>Tailwind Labs</Strong>!
          </p>
        </header>
        <main className="mt-6 space-y-6 text-lg leading-relaxed md:text-xl md:leading-relaxed">
          <section>
            <h3 className="sr-only">Introduction and personal background</h3>
            <p>
              First, a bit about myself: I am a <Strong>36-year-old</Strong>{' '}
              living in <Strong>Tel Aviv, Israel</Strong>,{' '}
              <Strong>married with 2 young boys</Strong>. I've been writing code
              professionally for about <Strong>8 years</Strong>, mostly working
              on user interfaces, design systems, and frontend architecture.
              Prior to starting a career in tech,{' '}
              <Strong>
                I worked for about 10 years in the education space
              </Strong>
              , mostly with after-school programs.
            </p>
          </section>
          <section>
            <h3 className="sr-only">
              The beginning of my career and exposure to Adam and Tailwind
            </h3>
            <p>
              I started out with <Mark>PHP</Mark> and <Mark>Laravel</Mark>.
              That's how I first became aware of you, Adam, listening to{' '}
              <Strong>the second season of "The Laravel Podcast"</Strong>. I
              have since followed your work from{' '}
              <Strong>"Refactoring to Collections"</Strong> to{' '}
              <Strong>Tailwind UI</Strong>. Two of my absolute favorite talks
              you ever gave were <Strong>"Cruddy by Design"</Strong> and{' '}
              <Strong>"Curing the Common Loop"</Strong>. I love finding
              constraints like <Strong>"Only use the 7 REST verbs"</Strong> that
              just make an entire category of problems go away.
            </p>
          </section>
          <section>
            <h3 className="sr-only">My professional experience</h3>
            <p>
              Very early in my career, my bosses realized I have a "knack" for
              UI, and since this is quite a rare talent (at least in the Israeli
              tech scene), I started getting more and more UI-related tasks, and
              it became my <Strong>expertise</Strong>. So, I have tons of
              experience writing rich, interactive, bespoke UIs using mostly{' '}
              <Mark>React</Mark>, <Mark>TypeScript</Mark>, and{' '}
              <Mark>Tailwind CSS</Mark>. I was actually one of those people
              watching the <Strong>Kite Tail</Strong> live streams and asking,{' '}
              <Strong>"What is this CSS framework?!"</Strong>. I started working
              with <Mark>Tailwind CSS</Mark> when it was on{' '}
              <Strong>version 0.6.4</Strong> and never looked back!
            </p>
          </section>
          <section>
            <h3 className="sr-only">
              My experience with new tools and technologies
            </h3>
            <p>
              I was actually an early adopter of a lot of tools. I was
              convincing people of <Strong>"utility first"</Strong> when{' '}
              <Mark>styled-components</Mark> was all the rage and people gave
              names to every single div. In recent years, I was very early to
              adopt <Mark>Remix</Mark> (hopefully, I can convince you that it's
              better than <Mark>Next.js</Mark> <span aria-label="wink">😉</span>
              ) and <Mark>react-aria-components</Mark> (deployed to production
              while it was still in alpha). I love trying out new tools, but
              that's never the deciding factor in my technical decisions. The
              reason I was early to adopt those tools was because they brought a
              novel, elegant, solution to{' '}
              <Strong>real-world problems and issues</Strong>.
            </p>
          </section>
          <section>
            <h3 className="sr-only">Why I want to work at Tailwind Labs</h3>
            <p>
              The primary reason working at <Strong>Tailwind Labs</Strong> would
              be an <Strong>absolute dream come true</Strong> for me is that I
              feel a deep connection to your philosophy and spirit. The
              statement:
            </p>{' '}
            <Blockquote cite="Walt Disney">
              "We don't make movies to make money; we make money to make more
              movies"
            </Blockquote>{' '}
            <p>
              has always resonated deeply with me. I have always cared, in a way
              that few around me do, about the little details and day-to-day
              challenges, and I know that{' '}
              <Strong>you especially Adam feel similarly</Strong>.
            </p>
          </section>
          <section className="space-y-6">
            <h3 className="sr-only">Projects I'm proud of</h3>
            <p>
              One of the projects I am most proud of working on is{' '}
              <Link
                href="https://pro.fiverr.com"
                aria-label="Fiverr pro website, opens in new tab"
              >
                Fiverr Pro
              </Link>
              . I was on the team that created this product within{' '}
              <Link
                href="https://fiverr.com"
                aria-label="Fiverr website, opens in new tab"
              >
                Fiverr
              </Link>
              , and I was the primary frontend developer driving that project.
              During that time, I contributed a lot to the{' '}
              <Strong>Fiverr design system</Strong> and created components and
              APIs that were{' '}
              <Strong>
                used by many different teams and developers across the org.
              </Strong>
            </p>
            <p>
              In my current position at{' '}
              <Link
                href="https://venn.city"
                aria-label="Venn website, opens in new tab"
              >
                Venn
              </Link>
              , I <Strong>lead the frontend guild</Strong> and{' '}
              <Strong>serve as the architect</Strong> for our frontend projects
              and infrastructure. I run bi-weekly internal meetups, hold daily
              mentorship calls, and make almost all UI-related decisions at the
              company. One of the cooler things I was able to achieve here was
              creating a <Strong>Tailwind-based design system</Strong> that
              needed to be applied to multiple different products.
            </p>
          </section>
          <section className="space-y-6">
            <h3 className="sr-only">What I'm excited to work on</h3>
            <p>
              Working at <Strong>Tailwind Labs</Strong>, I would be very excited
              to work on <Strong>Catalyst</Strong>! As I've said, I have a lot
              of experience working on design systems, and I've spent years
              trying to figure out how to build and architect these common
              components in a way that is truly scalable but also{' '}
              <Strong>a delight to the consumer.</Strong>
            </p>
            <p>
              I would also be very excited to help out with all the{' '}
              <Strong>
                educational aspects: documentation, tutorials, blog posts
              </Strong>
              , and anything else that helps spread the word! As a former
              educator, I have tons of experience with{' '}
              <Strong>teaching and mentoring</Strong>, and my biggest dream is
              to{' '}
              <Strong>
                combine my love for coding and my love for teaching.
              </Strong>
            </p>
          </section>
          <section className="space-y-6">
            <h3 className="sr-only">Teaching examples</h3>
            <p>
              Fortunately, I've had a few opportunities to experiment with doing
              that:
            </p>
            <ul className="space-y-4">
              <li className="space-y-2">
                <Link
                  href="https://www.youtube.com/live/F8LH9d9eN3M?si=wAxGOd6ZAKNlWaHn"
                  aria-label="Cypress.io webinar on YouTube, opens in new tab"
                >
                  Cypress.io webinar
                </Link>
                : I was invited by Gleb (former CTO at{' '}
                <Link
                  href="https://www.cypress.io/"
                  aria-label="Cypress.io site, opens in new tab"
                >
                  Cypress.io
                </Link>
                ) to come talk about how to write Cypress tests that{' '}
                <Strong>stand the test of time.</Strong>
              </li>
              <li className="space-y-2">
                <Link
                  href="https://youtu.be/Zdvr0z-qFdw?si=t4MjHKdheuFriqQT"
                  aria-label="The Testing Matrix on YouTube, opens in new tab"
                >
                  The Testing Matrix
                </Link>
                : I developed an idea I called{' '}
                <Strong>"The Testing Matrix"</Strong> that is an alternative to{' '}
                <Strong>"The Testing Pyramid"</Strong>. Gleb and I presented it
                together at the{' '}
                <Link
                  href="https://testjssummit.com/"
                  aria-label="TestJS Summit landing page, opens in new tab"
                >
                  TestJS Summit
                </Link>{' '}
                conference.
              </li>
            </ul>
          </section>
          <section className="space-y-6">
            <h3 className="sr-only">Summary</h3>
            <p>
              That's basically it! I would truly be honored to even be
              considered for the <Strong>Design Engineer</Strong> position and
              believe that I would absolutely crush it, given the chance.
            </p>
            <p>
              With great respect,{' '}
              <Strong>
                <span aria-label="rock on">🤘🏻</span> Roman.
              </Strong>
            </p>
          </section>
        </main>
      </div>
    </Layout>,
  )
})

export default app
