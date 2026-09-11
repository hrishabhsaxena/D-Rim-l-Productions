import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { TrackPlayer } from '@/components/track-player'
import { WorkCard } from '@/components/work-card'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/site-data'

interface Params {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Work' }
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function WorkDetailPage({ params }: Params) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-14 pt-40">
        <Image
          src={project.image || '/placeholder.svg'}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-grain opacity-50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Link
              href="/work"
              className="group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All Work
            </Link>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold">
              <span>{project.genre}</span>
              <span className="h-px w-5 bg-gold/50" />
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="mt-4 max-w-4xl text-balance text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
              {project.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-14 md:grid-cols-[1.6fr_1fr] md:gap-20">
          <Reveal>
            <p className="text-2xl font-serif italic leading-snug text-foreground/90">
              {project.blurb}
            </p>
            <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
              <p>{project.description}</p>
              <p>
                Built layer by layer in the studio, the piece moves between written passage and
                improvised response — the ensemble given room to breathe while the score holds
                its emotional line. It is arranged for a hybrid of live players and detailed
                sequenced textures, mixed for depth and space.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
              <h2 className="text-xs uppercase tracking-luxe text-gold">Details</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-b border-border/40 pb-3">
                  <dt className="text-muted-foreground">Genre</dt>
                  <dd className="text-right">{project.genre}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-border/40 pb-3">
                  <dt className="text-muted-foreground">Year</dt>
                  <dd>{project.year}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-border/40 pb-3">
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="text-right">Composition · Production · Mix</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Studio</dt>
                  <dd>D&apos;Rimél</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <TrackPlayer
            title={`${project.title} — Excerpt`}
            genre={project.genre}
            duration={231}
          />
        </Reveal>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl">More Work</h2>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-gold"
            >
              View All
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <WorkCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
