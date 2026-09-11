import { cn } from '@/lib/utils'

const bars = [0.4, 0.7, 0.5, 0.9, 0.6, 1, 0.45, 0.8, 0.55, 0.95, 0.5, 0.75, 0.4, 0.85, 0.6]

export function Waveform({ className }: { className?: string }) {
  return (
    <div className={cn('flex h-10 items-center gap-1', className)} aria-hidden="true">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-1 origin-center rounded-full bg-gold/70 motion-safe:animate-[waveform_1.4s_ease-in-out_infinite]"
          style={{
            height: `${h * 100}%`,
            animationDelay: `${i * 0.09}s`,
          }}
        />
      ))}
    </div>
  )
}
