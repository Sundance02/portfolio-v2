'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

type DrawFn = (ctx: CanvasRenderingContext2D, width: number, height: number) => void

const TAU = Math.PI * 2

function useCanvasPattern(draw: DrawFn) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const render = () => {
      const { width, height } = canvas.getBoundingClientRect()
      if (!width || !height) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = getComputedStyle(canvas).color
      draw(ctx, width, height)
    }

    render()
    const observer = new ResizeObserver(render)
    observer.observe(canvas)
    return () => observer.disconnect()
  }, [draw])

  return ref
}

const ROSETTE_RINGS = [
  { radius: 0.84, amplitude: 0.075, lobes: 28, lines: 22, mod: 4 },
  { radius: 0.6, amplitude: 0.09, lobes: 18, lines: 18, mod: 3 },
  { radius: 0.37, amplitude: 0.075, lobes: 12, lines: 14, mod: 2 },
  { radius: 0.16, amplitude: 0.05, lobes: 8, lines: 10, mod: 1 },
]

const drawRosette: DrawFn = (ctx, width, height) => {
  const cx = width / 2
  const cy = height / 2
  const scale = Math.min(width, height) / 2
  const steps = 900

  ctx.lineWidth = 0.5
  ctx.globalAlpha = 0.6

  for (const ring of ROSETTE_RINGS) {
    for (let i = 0; i < ring.lines; i++) {
      const phase = (i / ring.lines) * TAU
      ctx.beginPath()
      for (let s = 0; s <= steps; s++) {
        const t = (s / steps) * TAU
        const envelope = 0.7 + 0.3 * Math.cos(ring.mod * t + phase * 0.5)
        const r =
          ring.radius + ring.amplitude * Math.sin(ring.lobes * t + phase) * envelope
        const x = cx + Math.cos(t) * r * scale
        const y = cy + Math.sin(t) * r * scale
        if (s === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
    }
  }

  ctx.globalAlpha = 0.9
  for (const r of [0.97, 0.99]) {
    ctx.beginPath()
    ctx.arc(cx, cy, r * scale, 0, TAU)
    ctx.stroke()
  }
}

const drawBand: DrawFn = (ctx, width, height) => {
  const lines = 16
  const mid = height / 2
  const amplitude = height * 0.36
  const cycles = Math.max(6, Math.round(width / 70))

  ctx.lineWidth = 0.6
  ctx.globalAlpha = 0.8

  for (let i = 0; i < lines; i++) {
    const phase = (i / lines) * TAU
    ctx.beginPath()
    for (let x = 0; x <= width; x += 2) {
      const u = x / width
      const envelope = 0.55 + 0.45 * Math.cos(u * TAU * 2 + phase / 2)
      const y = mid + Math.sin(u * TAU * cycles + phase) * amplitude * envelope
      if (x === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
}

export function GuillocheRosette({ className }: { className?: string }) {
  const ref = useCanvasPattern(drawRosette)
  return <canvas ref={ref} aria-hidden="true" className={cn('block', className)} />
}

export function GuillocheBand({ className }: { className?: string }) {
  const ref = useCanvasPattern(drawBand)
  return <canvas ref={ref} aria-hidden="true" className={cn('block h-20 w-full', className)} />
}
