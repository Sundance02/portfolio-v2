export function CodeSnippet({ filename, code }: { filename: string; code: string }) {
  const lines = code.split('\n')

  return (
    <figure className="overflow-hidden rounded-2xl bg-foreground text-background">
      <figcaption className="flex items-center justify-between gap-4 border-b border-background/15 px-5 py-3 font-mono text-xs">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="size-2.5 rounded-full border border-background/40" />
            <span className="size-2.5 rounded-full border border-background/40" />
            <span className="size-2.5 rounded-full border border-background/40" />
          </span>
          <span className="ml-2">{filename}</span>
        </span>
        <span className="uppercase tracking-widest text-background/50">Excerpt</span>
      </figcaption>
      <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
        <code className="grid">
          {lines.map((line, i) => (
            <span key={i} className="grid grid-cols-[2.5rem_1fr]">
              <span aria-hidden="true" className="select-none text-background/30">
                {i + 1}
              </span>
              <span className="whitespace-pre">{line || ' '}</span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  )
}
