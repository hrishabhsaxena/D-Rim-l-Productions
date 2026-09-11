import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { WorkCard } from '@/components/work-card'
import { TrackPlayer } from '@/components/track-player'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Work',
  description:
    "Selected scores, suites and fusion works from D'Rimél Productions — from symphonic film scores to jazz noir and Indian classical reimaginings.",
}

const playlist = [
  { title: 'Chromatic Affair — I. Overture', genre: 'Classical × Jazz', duration: 227 },
  { title: 'Ecos de Pasión — Entrada', genre: 'Flamenco Symphonic', duration: 198 },
  { title: 'Celestial Todi — Dawn', genre: 'Indian Classical Fusion', duration: 264 },
]

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="The Work"
        description="A catalogue of scores composed for screen, stage and the concert hall — each one a conversation between traditions."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 120}>
              <WorkCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 md:py-28">
          <SectionHeading
            align="center"
            eyebrow="Listening Room"
            title="Press play on a few favourites."
            description="A short selection of excerpts. Use the waveform to scrub through each piece."
          />
          <div className="mx-auto mt-12 max-w-2xl space-y-5">
            {playlist.map((track, i) => (
              <Reveal key={track.title} delay={i * 120}>
                <TrackPlayer title={track.title} genre={track.genre} duration={track.duration} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
