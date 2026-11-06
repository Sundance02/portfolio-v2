import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { SectionLabel } from './section-label'

export function Work() {
  return (
    <section id="work" className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-24 md:py-36">
      <div className="flex items-end justify-between gap-6">
        <div className="flex flex-col gap-6">
          <SectionLabel>Selected work</SectionLabel>
          <p className="max-w-xl text-3xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
            Recent projects, built end to end.
          </p>
        </div>
        <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:block">
          2024 — 2026
        </span>
      </div>

      <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.slug} className={index % 2 === 1 ? 'md:pt-24' : ''}>
            <Link
              href={`/work/${project.slug}`}
              className="group flex flex-col gap-5 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-foreground"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-muted/30">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-2 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-background text-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b pb-4">
                <h3 className="text-2xl font-semibold tracking-tight underline-offset-4 group-hover:underline">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </p>
                <p className="leading-relaxed text-pretty">{project.summary}</p>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full border px-3 py-1 font-mono text-xs">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
