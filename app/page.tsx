import { About } from '@/components/portfolio/about'
import { Contact } from '@/components/portfolio/contact'
import { Experience } from '@/components/portfolio/experience'
import { Hero } from '@/components/portfolio/hero'
import { SiteHeader } from '@/components/portfolio/site-header'
import { TechStack } from '@/components/portfolio/tech-stack'
import { Work } from '@/components/portfolio/work'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
