import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function WorkCard({ project, className }: { project: Project; className?: string }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        'group relative block overflow-hidden rounded-xl border border-border/60 bg-card',
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/5" />

        <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/50 backdrop-blur-sm transition-all duration-500 group-hover:border-gold/60 group-hover:bg-gold group-hover:text-primary-foreground">
          <ArrowUpRight className="size-4" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-gold">
          <span>{project.genre}</span>
          <span className="h-px w-4 bg-gold/50" />
          <span className="text-muted-foreground">{project.year}</span>
        </div>
        <h3 className="mt-2 text-2xl">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.blurb}</p>
      </div>
    </Link>
  )
}
