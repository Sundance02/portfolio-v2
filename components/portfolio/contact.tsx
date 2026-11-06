import { ArrowUpRight } from 'lucide-react'
import { GuillocheBand, GuillocheRosette } from './guilloche'
import { SectionLabel } from './section-label'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Read.cv', href: 'https://read.cv' },
]

export function Contact() {
  return (
    <>
      <section id="contact" className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 -z-10 size-[36rem] opacity-25 md:size-[44rem]"
        >
          <GuillocheRosette className="size-full text-foreground motion-safe:animate-[spin_300s_linear_infinite_reverse]" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 md:py-36">
          <SectionLabel>Contact</SectionLabel>
          <p className="max-w-3xl text-4xl font-semibold leading-none tracking-tighter text-balance md:text-7xl">
            {"Have a project in mind? Let's make it official."}
          </p>
          <a
            href="mailto:hello@elenavarga.com"
            className="group inline-flex w-fit items-center gap-4 border-b-2 border-foreground pb-2 text-2xl font-medium tracking-tight md:text-4xl"
          >
            hello@elenavarga.com
            <ArrowUpRight
              className="size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <ul className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-foreground/20 bg-background px-5 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-foreground text-background">
        <GuillocheBand className="h-24 text-background opacity-60" />
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 font-mono text-xs uppercase tracking-widest text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Elena Varga</span>
          <span>Certified original · Designed in Vienna</span>
        </div>
      </footer>
    </>
  )
}
