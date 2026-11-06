import { SectionLabel } from './section-label'

const disciplines = ['Full-stack web', 'Distributed systems', 'API design', 'Performance engineering', 'Developer tooling']
const clients = ['Erste Group', 'Wiener Linien', 'Northwind Studio', 'City of Vienna', 'Kunsthalle']

export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-36">
      <SectionLabel className="md:col-span-3">About</SectionLabel>

      <div className="flex flex-col gap-16 md:col-span-9">
        <p className="text-3xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
          I write software with the rigour of a contract and the care of a craft —{' '}
          <span className="text-muted-foreground">
            typed, tested and observable systems that stay boring in production.
          </span>
        </p>

        <div className="grid gap-10 sm:grid-cols-3">
          <InfoList title="Disciplines" items={disciplines} />
          <InfoList title="Selected clients" items={clients} />
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Based in</h3>
            <p className="leading-relaxed">
              Vienna, Austria.
              <br />
              Working worldwide, remote first.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{title}</h3>
      <ul className="flex flex-col gap-2 leading-relaxed">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
