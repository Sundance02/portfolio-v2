import { ArrowUpRight, Phone, Mail, FileText } from 'lucide-react'
import { GuillocheBand, GuillocheRosette } from './guilloche'
import { SectionLabel } from './section-label'

const links = [
  { label: 'GitHub', href: 'https://github.com/Sundance02' },
  { label: 'Download CV (PDF)', href: '/CV_Sahatsawat-Vongboonthaneth.pdf' },
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
            {"Let's connect and build something extraordinary."}
          </p>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:famesahatsawat@gmail.com"
              className="group inline-flex w-fit items-center gap-4 border-b-2 border-foreground pb-2 text-2xl font-medium tracking-tight md:text-4xl"
            >
              <Mail className="size-6 text-muted-foreground md:size-8" />
              famesahatsawat@gmail.com
              <ArrowUpRight
                className="size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="tel:062-365-1047"
              className="group inline-flex w-fit items-center gap-4 border-b border-muted pb-1 text-xl font-medium tracking-tight text-muted-foreground transition-colors hover:text-foreground md:text-2xl"
            >
              <Phone className="size-5 md:size-6" />
              +66 062-365-1047
              <ArrowUpRight
                className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <ul className="flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-5 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
                >
                  {link.label.includes('CV') && <FileText className="size-4" />}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-foreground text-background">
        <GuillocheBand className="h-24 text-background opacity-60" />
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 font-mono text-xs uppercase tracking-widest text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Sahatsawat Vongboonthaneth</span>
          <span>Bangkok, Thailand</span>
        </div>
      </footer>
    </>
  )
}
