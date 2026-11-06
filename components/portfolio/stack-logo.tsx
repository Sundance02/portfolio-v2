import { cn } from '@/lib/utils'

/* Logos are rendered as CSS masks so they always take the current text color (pure black or white). */
export function StackLogo({ logo, className }: { logo: string; className?: string }) {
  const url = `url(/stack/${logo}.svg)`
  return (
    <span
      aria-hidden="true"
      className={cn('inline-block size-6 shrink-0 bg-current', className)}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  )
}
