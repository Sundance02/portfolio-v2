import { cn } from '@/lib/utils'

const PHRASE =
  'Sahatsawat Vongboonthaneth · Full-stack Web & Mobile · KMITL · Bangkok · '

export function Microprint({ className, phrase = PHRASE }: { className?: string; phrase?: string }) {
  const text = phrase.repeat(6)
  return (
    <div aria-hidden="true" className={cn('overflow-hidden whitespace-nowrap', className)}>
      <div className="marquee flex w-max font-mono text-[10px] uppercase tracking-[0.35em]">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}
