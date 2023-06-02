import { twMerge } from 'tailwind-merge'
import headshot from '~/assets/headshot.png'
import twitter from '~/assets/icons/twitter.svg'
import linkedin from '~/assets/icons/linkedin.svg'
import github from '~/assets/icons/github.svg'

export default function Index() {
  return (
    <div className="relative">
      <Cube className="absolute -right-20 top-40 rotate-12" />
      <Cube className="absolute right-60 top-0 -rotate-12" />
      <Cube className="absolute -left-28 top-56 -rotate-6" />
      <div className="max-w-2xl relative">
        <img
          src={headshot}
          alt="Headshot"
          className="h-20 border border-zinc-400 w-20 object-cover rounded-full grayscale mix-blend-darken shadow-inner"
        />
        <h1 className="text-5xl font-bold tracking-tight leading-tight mt-8">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="mt-8 text-lg text-zinc-700">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <div className="mt-8 flex items-center gap-x-6">
          <a
            target="_blank"
            href="https://twitter.com/RomanSndlr"
            rel="noreferrer"
          >
            <img className="h-6 w-6" alt="Twitter logo" src={twitter} />
          </a>
          <a
            target="_blank"
            href="https://github.com/romansndlr"
            rel="noreferrer"
          >
            <img className="h-6 w-6" src={github} alt="Github logo" />
          </a>
          <a
            href="https://linkedin.com/in/romansndlr"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-6 w-6" src={linkedin} alt="Linkedin logo" />
          </a>
        </div>
      </div>
    </div>
  )
}

function Cube({ className }: { className?: string }) {
  return (
    <div className={twMerge('relative', className)}>
      <div className="h-10 w-10 bg-white border border-zinc-400 shadow animate-float z-10 relative" />
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a1a1aa' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        className="h-10 w-10 bg-zinc-300 absolute z-0 left-2 top-2 border border-zinc-400 shadow-inner"
      />
    </div>
  )
}
