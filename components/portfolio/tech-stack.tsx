import { stackGroups } from '@/lib/stack'
import { GuillocheBand } from './guilloche'
import { SectionLabel } from './section-label'
import { StackLogo } from './stack-logo'

const CURRENT_YEAR = 2026

export function TechStack() {
  return (
    <section id="stack" className="bg-foreground text-background">
      <GuillocheBand className="text-background opacity-40" />
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-24 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <SectionLabel>Tech stack</SectionLabel>
            <p className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              Tools I trust in production.
            </p>
          </div>
          <p className="max-w-sm leading-relaxed text-background/70 text-pretty">
            Chosen for longevity over novelty. The numbers show how many years each tool has been part
            of my daily work.
          </p>
        </div>

        <div className="flex flex-col">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-6 border-t border-background/15 py-8 last:border-b md:grid-cols-12 md:gap-8"
            >
              <div className="flex flex-col gap-1 md:col-span-3">
                <h3 className="text-xl font-semibold tracking-tight">{group.title}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-background/50">{group.note}</p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-9">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="group flex items-center gap-3 rounded-xl border border-background/15 px-4 py-3 transition-colors hover:bg-background hover:text-foreground"
                  >
                    <StackLogo logo={item.logo} className="size-5" />
                    <span className="flex-1 truncate text-sm font-medium">{item.name}</span>
                    <span className="font-mono text-xs text-background/50 transition-colors group-hover:text-foreground/60">
                      <span className="sr-only">Years of experience: </span>
                      {CURRENT_YEAR - item.since}y
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
