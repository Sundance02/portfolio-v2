import { SectionLabel } from './section-label'

const roles = [
  {
    period: '2023 — Now',
    title: 'Independent Software Engineer',
    company: 'Studio Varga',
    summary: 'Building production systems for institutions and startups, from API design to front-end delivery.',
  },
  {
    period: '2020 — 2023',
    title: 'Staff Engineer',
    company: 'Erste Digital',
    summary: 'Led the platform team behind mobile banking, owning the GraphQL gateway used by 40+ product squads.',
  },
  {
    period: '2017 — 2020',
    title: 'Senior Full-stack Engineer',
    company: 'Moniker Agency',
    summary: 'Shipped high-traffic web platforms for cultural and public-sector clients on Node.js and React.',
  },
  {
    period: '2015 — 2017',
    title: 'Software Engineer',
    company: 'Kunsthalle Wien',
    summary: 'Built the ticketing integrations, digital guides and in-gallery installations for the museum.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-24 md:py-36">
        <div className="flex flex-col gap-6">
          <SectionLabel>Experience</SectionLabel>
          <p className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
            A decade of shipping software people rely on.
          </p>
        </div>

        <ol className="flex flex-col">
          {roles.map((role) => (
            <li
              key={role.period}
              className="grid gap-3 border-t border-background/15 py-8 transition-colors last:border-b hover:bg-background/5 md:grid-cols-12 md:gap-8"
            >
              <span className="font-mono text-sm text-background/60 md:col-span-3">{role.period}</span>
              <div className="flex flex-col gap-1 md:col-span-4">
                <h3 className="text-xl font-semibold tracking-tight">{role.title}</h3>
                <p className="text-background/60">{role.company}</p>
              </div>
              <p className="leading-relaxed text-background/80 text-pretty md:col-span-5">{role.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
