import { Award, GraduationCap, MapPin, Languages } from 'lucide-react'
import { SectionLabel } from './section-label'

const disciplines = [
  'Full-stack Web (Next.js, React, Django)',
  'Mobile Development (React Native)',
  'Backend & APIs (Express.js, REST)',
  'Database Design (PostgreSQL, MongoDB, MySQL)',
  'Cloud & DevOps (AWS, Docker, CI/CD)',
  'ERP Solutions (Odoo Implementation)',
]

const highlights = [
  'GPA: 3.68 / 4.00 (First-Class Honors Standing)',
  'ITC-CSCC 2026 Research Paper Accepted',
  'HCCDA Tech Essentials — Huawei Cloud',
  'End-to-end Web, Mobile & ML Systems',
]

export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-36">
      <SectionLabel className="md:col-span-3">About & Education</SectionLabel>

      <div className="flex flex-col gap-16 md:col-span-9">
        <div className="flex flex-col gap-6">
          <p className="text-3xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
            Information Technology graduate bridging{' '}
            <span className="text-muted-foreground">
              full-stack engineering, mobile development, and applied deep learning.
            </span>
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Through rigorous academic coursework and extensive production projects, I have gained hands-on
            experience in end-to-end development — from architecting normalized SQL/NoSQL databases to building
            intuitive front-ends with React, Next.js, and React Native. On the backend, I develop high-performance
            services with Express.js and Django, backed by automated containerized CI/CD pipelines on AWS, Docker, and GCP.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          <InfoList title="Key Disciplines" items={disciplines} />

          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <GraduationCap className="size-4" />
              Education
            </h3>
            <div className="flex flex-col gap-1.5 leading-relaxed">
              <p className="font-semibold text-foreground">
                King Mongkut&apos;s Institute of Technology Ladkrabang
              </p>
              <p className="text-sm text-muted-foreground">
                Bachelor of Science in Information Technology (2022 — 2026)
              </p>
              <p className="font-mono text-xs font-semibold text-foreground">
                GPA: 3.68
              </p>
            </div>

            <h3 className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <Languages className="size-4" />
              Languages
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Thai (Native) · English (Fair)
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <Award className="size-4" />
              Awards & Honors
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm leading-relaxed">
              <li className="text-foreground">
                <strong>ITC-CSCC 2026 Paper:</strong> Optimized Deep Learning and Mobile Application for Urban Waste Segregation
              </li>
              <li className="text-foreground">
                <strong>HCCDA Tech Essentials:</strong> Huawei Cloud Certification
              </li>
            </ul>

            <h3 className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <MapPin className="size-4" />
              Based in
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Bangkok, Thailand.
              <br />
              Open to on-site, hybrid, and remote opportunities.
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
      <ul className="flex flex-col gap-2 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item} className="text-foreground">{item}</li>
        ))}
      </ul>
    </div>
  )
}
