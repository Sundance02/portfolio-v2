import { FileText } from 'lucide-react'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-background mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-full border border-current font-mono text-xs">
            SV
          </span>
          <span className="hidden sm:inline">Sahatsawat Vongboonthaneth</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm">
            {links.map((link) => (
              <li key={link.href} className={link.label === 'Contact' ? '' : 'hidden md:block'}>
                <a
                  href={link.href}
                  className="underline-offset-4 transition-opacity hover:underline hover:opacity-80"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/CV_Sahatsawat-Vongboonthaneth.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-current px-3 py-1 font-mono text-xs transition-opacity hover:opacity-80"
              >
                <FileText className="size-3" />
                <span>CV</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
