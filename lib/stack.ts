export type StackItem = { name: string; logo: string; since: number }

export const stackGroups: { title: string; note: string; items: StackItem[] }[] = [
  {
    title: 'Languages',
    note: 'Core programming foundations',
    items: [
      { name: 'JavaScript', logo: 'javascript', since: 2022 },
      { name: 'TypeScript', logo: 'typescript', since: 2023 },
      { name: 'Python', logo: 'python', since: 2022 },
    ],
  },
  {
    title: 'Frontend & Mobile',
    note: 'Responsive & native interfaces',
    items: [
      { name: 'HTML', logo: 'html', since: 2022 },
      { name: 'CSS', logo: 'css', since: 2022 },
      { name: 'React', logo: 'react', since: 2023 },
      { name: 'Next.js', logo: 'nextjs', since: 2023 },
      { name: 'React Native', logo: 'react', since: 2024 },
      { name: 'Tailwind CSS', logo: 'tailwind-css', since: 2023 },
      { name: 'Figma', logo: 'figma', since: 2023 },
    ],
  },
  {
    title: 'Backend & APIs',
    note: 'Scalable services & architectures',
    items: [
      { name: 'Node.js', logo: 'nodejs', since: 2023 },
      { name: 'Express.js', logo: 'nodejs', since: 2023 },
      { name: 'Django', logo: 'django', since: 2023 },
      { name: 'PostgreSQL', logo: 'postgresql', since: 2023 },
      { name: 'MongoDB', logo: 'mongodb', since: 2024 },
      { name: 'MySQL', logo: 'mysql', since: 2022 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    note: 'Deployment & containerization',
    items: [
      { name: 'Docker', logo: 'docker', since: 2024 },
      { name: 'AWS', logo: 'aws', since: 2024 },
      { name: 'Linux', logo: 'linux', since: 2023 },
      { name: 'Vercel', logo: 'vercel', since: 2023 },
      { name: 'Git & GitHub', logo: 'github', since: 2022 },
      { name: 'Postman', logo: 'postman', since: 2023 },
    ],
  },
  {
    title: 'Enterprise & ERP',
    note: 'Business workflow solutions',
    items: [
      { name: 'Odoo ERP', logo: 'odoo', since: 2024 },
    ],
  },
]

const logoByName = new Map(stackGroups.flatMap((group) => group.items.map((item) => [item.name, item.logo])))

export function getLogo(name: string) {
  const normalized = name.toLowerCase()
  if (normalized === 'html') return 'html'
  if (normalized === 'css') return 'css'
  if (normalized.includes('react native') || normalized.includes('react')) return 'react'
  if (normalized.includes('next')) return 'nextjs'
  if (normalized.includes('tailwind')) return 'tailwind-css'
  if (normalized.includes('python')) return 'python'
  if (normalized.includes('django')) return 'django'
  if (normalized.includes('postgres')) return 'postgresql'
  if (normalized.includes('mongo')) return 'mongodb'
  if (normalized.includes('mysql')) return 'mysql'
  if (normalized.includes('docker')) return 'docker'
  if (normalized.includes('aws')) return 'aws'
  if (normalized.includes('git')) return 'github'
  if (normalized.includes('node') || normalized.includes('express')) return 'nodejs'
  if (normalized.includes('odoo')) return 'odoo'
  if (normalized.includes('postman')) return 'postman'
  return logoByName.get(name)
}
