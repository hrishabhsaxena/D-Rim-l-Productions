import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border/60 pt-40 pb-16 sm:pb-20',
        className,
      )}
    >
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-24 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          {eyebrow && (
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <span className="text-xs uppercase tracking-luxe text-gold">{eyebrow}</span>
            </div>
          )}
          <h1 className="max-w-3xl text-balance text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
