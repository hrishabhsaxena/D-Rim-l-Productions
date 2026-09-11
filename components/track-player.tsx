'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TrackPlayerProps {
  title: string
  genre: string
  duration?: number
  className?: string
}

const BAR_COUNT = 56

const barHeights = Array.from({ length: BAR_COUNT }, (_, i) => {
  const base = Math.sin(i * 0.55) * 0.5 + 0.5
  const jitter = ((i * 37) % 13) / 13
  return Math.max(0.18, Math.min(1, base * 0.7 + jitter * 0.4))
})

function fmt(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function TrackPlayer({ title, genre, duration = 214, className }: TrackPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const raf = useRef<number | null>(null)
  const last = useRef<number>(0)

  useEffect(() => {
    if (!playing) {
      if (raf.current) cancelAnimationFrame(raf.current)
      return
    }
    last.current = performance.now()
    const tick = (now: number) => {
      const dt = (now - last.current) / 1000
      last.current = now
      setProgress((p) => {
        const next = p + dt / duration
        if (next >= 1) {
          setPlaying(false)
          return 0
        }
        return next
      })
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [playing, duration])

  const activeBar = Math.floor(progress * BAR_COUNT)

  const seek = (i: number) => {
    setProgress(i / BAR_COUNT)
  }

  return (
    <div
      className={cn(
        'rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm sm:p-8',
        className,
      )}
    >
      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? `Pause ${title}` : `Play ${title}`}
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground transition-all duration-300 hover:brightness-110"
        >
          {playing ? (
            <Pause className="size-5" />
          ) : (
            <Play className="size-5 translate-x-0.5" />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate font-serif text-lg leading-tight">{title}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{genre}</p>
            </div>
            <span className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
              {fmt(progress * duration)} / {fmt(duration)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex h-16 items-center gap-[3px]" role="presentation">
        {barHeights.map((h, i) => {
          const played = i <= activeBar
          return (
            <button
              key={i}
              type="button"
              aria-label={`Seek to ${Math.round((i / BAR_COUNT) * 100)}%`}
              onClick={() => seek(i)}
              className="group relative flex h-full flex-1 items-center"
            >
              <span
                className={cn(
                  'w-full rounded-full transition-all duration-300',
                  played ? 'bg-gold' : 'bg-muted-foreground/25 group-hover:bg-muted-foreground/45',
                  playing && played && i === activeBar && 'bg-gold-soft',
                )}
                style={{ height: `${h * 100}%` }}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
