import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { getLogo } from '@/lib/stack'
import { SectionLabel } from '@/components/portfolio/section-label'
import { StackLogo } from '@/components/portfolio/stack-logo'
import { CodeSnippet } from './code-snippet'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-8 border-t py-16 md:grid-cols-12 md:py-24">
      <SectionLabel className="self-start md:sticky md:top-24 md:col-span-3">{label}</SectionLabel>
      <div className="flex flex-col gap-10 md:col-span-9">{children}</div>
    </section>
  )
}

export function ProjectDetails({ project }: { project: Project }) {
  const isThesis = project.slug === 'thesis-project'

  return (
    <div className="mx-auto flex max-w-7xl flex-col px-6 pt-16 md:pt-24">
      <Row label="Overview">
        <p className="text-2xl font-medium leading-snug tracking-tight text-pretty md:text-4xl">
          {project.overview}
        </p>
      </Row>

      {/* The challenge: Kept only for Urban Waste Segregation System */}
      {isThesis && project.challenge && (
        <Row label="The challenge">
          <p className="max-w-3xl text-lg leading-relaxed text-pretty">{project.challenge}</p>
        </Row>
      )}

      <Row label="Approach">
        <ul className="grid gap-10 md:grid-cols-3">
          {project.approach.map((step) => (
            <li key={step.title} className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground text-pretty">{step.detail}</p>
            </li>
          ))}
        </ul>
      </Row>

      {project.gallery && project.gallery.length > 0 && (
        <Row label="Gallery">
          <div className="grid gap-8 sm:grid-cols-2">
            {project.gallery.map((item, idx) => (
              <figure key={idx} className="flex flex-col gap-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border bg-muted/30">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain p-2 transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="font-mono text-xs text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Row>
      )}

      <Row label="Architecture">
        <dl className="flex flex-col">
          {project.architecture.map((item) => (
            <div
              key={item.layer}
              className="grid gap-2 border-b py-5 first:pt-0 last:border-b-0 sm:grid-cols-4 sm:gap-8"
            >
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground sm:pt-1">
                {item.layer}
              </dt>
              <dd className="leading-relaxed sm:col-span-3">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </Row>

      {/* In the code: Kept only for Urban Waste Segregation System */}
      {isThesis && project.snippet && (
        <Row label="In the code">
          <CodeSnippet filename={project.snippet.filename} code={project.snippet.code} />
        </Row>
      )}

      {/* Outcomes: Kept only for Urban Waste Segregation System */}
      {isThesis && project.outcomes && project.outcomes.length > 0 && (
        <Row label="Outcomes">
          <dl className="grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
            {project.outcomes.map((outcome) => (
              <div key={outcome.label} className="flex flex-col-reverse justify-end gap-3 bg-background p-6 md:p-8">
                <dt className="leading-relaxed text-muted-foreground text-pretty">{outcome.label}</dt>
                <dd className="font-mono text-3xl font-medium tracking-tight md:text-4xl">{outcome.value}</dd>
              </div>
            ))}
          </dl>
        </Row>
      )}

      <Row label="Built with">
        <ul className="flex flex-wrap gap-3">
          {project.stack.map((tech) => {
            const logo = getLogo(tech)
            return (
              <li key={tech} className="flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-medium">
                {logo ? <StackLogo logo={logo} className="size-4" /> : null}
                {tech}
              </li>
            )
          })}
        </ul>
      </Row>
    </div>
  )
}
