import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Contact } from '@/components/portfolio/contact'
import { SiteHeader } from '@/components/portfolio/site-header'
import { NextProject } from '@/components/project/next-project'
import { ProjectDetails } from '@/components/project/project-details'
import { ProjectHero } from '@/components/project/project-hero'
import { getNextProject, getProject, projects } from '@/lib/projects'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Case study · Elena Varga`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === project.slug)

  return (
    <>
      <SiteHeader />
      <main>
        <ProjectHero project={project} index={index} />
        <ProjectDetails project={project} />
        <NextProject project={getNextProject(project.slug)} />
        <Contact />
      </main>
    </>
  )
}
