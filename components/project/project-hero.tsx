import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { GuillocheRosette } from '@/components/portfolio/guilloche'
import { Microprint } from '@/components/portfolio/microprint'

export function ProjectHero({ project, index }: { project: Project; index: number }) {
  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Duration', value: project.duration },
    { label: 'Team', value: project.team },
    { label: 'Year', value: project.year },
  ]

  return (
    <>
      <section className="relative isolate overflow-hidden bg-foreground text-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[30vmin] -top-[20vmin] -z-10 size-[80vmin] opacity-40"
        >
          <GuillocheRosette className="size-full text-background motion-safe:animate-[spin_240s_linear_infinite]" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-16 pt-32 md:pb-24 md:pt-40">
          <div className="reveal flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-background/70">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 underline-offset-4 transition-opacity hover:underline hover:opacity-80"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All work
            </Link>
            <span>
              Project · No. SV—{project.year}—{String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="reveal flex flex-col gap-6" style={{ animationDelay: '150ms' }}>
            <p className="font-mono text-xs uppercase tracking-widest text-background/60">{project.category}</p>
            <h1 className="text-[clamp(3rem,10vw,8.5rem)] font-semibold leading-[0.9] tracking-tighter text-balance">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-background/80 text-pretty md:text-xl">
              {project.summary}
            </p>
          </div>

          <div
            className="reveal flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
            style={{ animationDelay: '300ms' }}
          >
            <dl className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-xs uppercase tracking-widest text-background/50">{item.label}</dt>
                  <dd className="leading-relaxed">{item.value}</dd>
                </div>
              ))}
            </dl>
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      linkIndex === 0
                        ? 'inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5'
                        : 'inline-flex items-center gap-2 rounded-full border border-background/40 px-6 py-3 text-sm font-medium transition-colors hover:bg-background hover:text-foreground'
                    }
                  >
                    {link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <Microprint
          phrase={`${project.title} · ${project.category} · ${project.year} · Certified Original · `}
          className="border-t border-background/15 py-3 text-background/50"
        />
      </section>

      <div className="mx-auto max-w-7xl px-6 pt-6 md:pt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border bg-muted/30">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.alt}
            fill
            priority
            sizes="(min-width: 1280px) 1232px, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </>
  )
}
