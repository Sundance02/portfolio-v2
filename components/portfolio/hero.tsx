import { ArrowDownRight, FileText } from 'lucide-react'
import { GuillocheRosette } from './guilloche'
import { Microprint } from './microprint'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-foreground text-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[35vmin] top-1/2 -z-10 size-[115vmin] -translate-y-1/2 opacity-60 md:-right-[20vmin]"
      >
        <GuillocheRosette className="size-full text-background motion-safe:animate-[spin_240s_linear_infinite]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end gap-10 px-6 pb-12 pt-32">
        <h1
          className="reveal text-[clamp(2.75rem,8.5vw,7.8rem)] font-semibold leading-[0.92] tracking-tighter text-balance"
          style={{ animationDelay: '250ms' }}
        >
          Sahatsawat
          <br />
          Vongboonthaneth
        </h1>

        <div
          className="reveal flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          style={{ animationDelay: '450ms' }}
        >
          <p className="max-w-xl text-lg leading-relaxed text-background/80 text-pretty">
            Full-stack web and mobile developer. I build production-grade applications — from
            designing SQL/NoSQL databases to crafting intuitive UIs with React, Next.js, and React Native,
            with robust backend logic in Express.js and Django.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              View selected work
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="/CV_Sahatsawat-Vongboonthaneth.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/40 px-6 py-3 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
            >
              <FileText className="size-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      <Microprint className="border-t border-background/15 py-3 text-background/50" />
    </section>
  )
}
