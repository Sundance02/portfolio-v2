export type StackItem = { name: string; logo: string; since: number }

export const stackGroups: { title: string; note: string; items: StackItem[] }[] = [
  {
    title: 'Languages',
    note: 'Typed by default',
    items: [
      { name: 'TypeScript', logo: 'typescript', since: 2016 },
      { name: 'JavaScript', logo: 'javascript', since: 2013 },
      { name: 'Go', logo: 'go', since: 2019 },
      { name: 'Rust', logo: 'rust', since: 2022 },
      { name: 'Python', logo: 'python', since: 2015 },
    ],
  },
  {
    title: 'Frontend',
    note: 'Fast, accessible interfaces',
    items: [
      { name: 'React', logo: 'react', since: 2016 },
      { name: 'Next.js', logo: 'nextjs', since: 2018 },
      { name: 'Tailwind CSS', logo: 'tailwind-css', since: 2020 },
      { name: 'Figma', logo: 'figma', since: 2017 },
    ],
  },
  {
    title: 'Backend & data',
    note: 'Boring, reliable storage',
    items: [
      { name: 'Node.js', logo: 'nodejs', since: 2014 },
      { name: 'Bun', logo: 'bun', since: 2023 },
      { name: 'PostgreSQL', logo: 'postgresql', since: 2015 },
      { name: 'Redis', logo: 'redis', since: 2017 },
      { name: 'GraphQL', logo: 'graphql', since: 2018 },
      { name: 'Prisma', logo: 'prisma', since: 2021 },
    ],
  },
  {
    title: 'Infrastructure',
    note: 'Everything as code',
    items: [
      { name: 'Docker', logo: 'docker', since: 2016 },
      { name: 'Kubernetes', logo: 'kubernetes', since: 2019 },
      { name: 'Terraform', logo: 'terraform', since: 2020 },
      { name: 'AWS', logo: 'aws', since: 2016 },
      { name: 'Vercel', logo: 'vercel', since: 2019 },
      { name: 'Linux', logo: 'linux', since: 2012 },
    ],
  },
  {
    title: 'Workflow',
    note: 'Tested and reviewed',
    items: [
      { name: 'Git', logo: 'git', since: 2012 },
      { name: 'GitHub', logo: 'github', since: 2012 },
      { name: 'Vitest', logo: 'vitest', since: 2022 },
    ],
  },
]

const logoByName = new Map(stackGroups.flatMap((group) => group.items.map((item) => [item.name, item.logo])))

export function getLogo(name: string) {
  return logoByName.get(name)
}
