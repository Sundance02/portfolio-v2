import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

export function NextProject({ project }: { project: Project }) {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <Link
        href={`/work/${project.slug}`}
        className="group flex flex-col gap-6 border-t pt-16 md:flex-row md:items-end md:justify-between md:pt-24"
      >
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Next project</span>
          <span className="text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-tighter underline-offset-8 group-hover:underline">
            {project.title}
          </span>
          <span className="text-muted-foreground">{project.category}</span>
        </div>
        <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-2">
          <ArrowRight className="size-6" aria-hidden="true" />
        </span>
      </Link>
    </div>
  )
}
