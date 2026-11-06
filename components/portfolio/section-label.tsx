import { cn } from '@/lib/utils'

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn('flex items-center gap-3 font-mono text-xs uppercase tracking-widest', className)}>
      <span aria-hidden="true" className="size-2 rounded-full bg-current" />
      {children}
    </h2>
  )
}
