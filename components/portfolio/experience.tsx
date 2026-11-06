import { SectionLabel } from './section-label'

const roles = [
  {
    period: 'July 2026 — Oct 2026',
    title: 'ERP Functional Implementation',
    company: 'Dynamics Motion',
    summary:
      'Analyzed enterprise business requirements and designed custom Odoo module workflows. Developed, tested, and implemented tailored ERP solutions aligned with business process specifications.',
  },
  {
    period: '2022 — 2026',
    title: 'B.Sc. in Information Technology',
    company: "King Mongkut's Institute of Technology Ladkrabang",
    summary:
      'Graduated with a GPA of 3.68 from KMITL Faculty of Information Technology. Built strong practical expertise in full-stack web and mobile application engineering, database design, and modern software development through KMITL’s rigorous project-driven curriculum.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-24 md:py-36">
        <div className="flex flex-col gap-6">
          <SectionLabel>Experience & Education</SectionLabel>
          <p className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
            Practical development across enterprise solutions and academic foundations.
          </p>
        </div>

        <ol className="flex flex-col">
          {roles.map((role) => (
            <li
              key={role.title + role.period}
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
