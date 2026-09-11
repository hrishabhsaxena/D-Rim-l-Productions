import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { artists } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About',
  description:
    "The story, philosophy and people behind D'Rimél Productions — a boutique music house fusing classical, jazz and world traditions into cinematic scores.",
}

const timeline = [
  {
    year: '2015',
    title: 'A single studio room',
    text: 'D’Rimél begins as one composer, a piano, and a stubborn belief that traditions should talk to one another.',
  },
  {
    year: '2018',
    title: 'First score to picture',
    text: 'The studio scores its first feature film, learning to write for emotion and the edit at once.',
  },
  {
    year: '2021',
    title: 'The fusion ensemble',
    text: 'A rotating collective of classical, jazz and world musicians joins the house — the sound widens.',
  },
  {
    year: 'Today',
    title: 'A cinematic music house',
    text: 'Commissions span film, stage and concert works, each treated as its own small piece of cinema.',
  },
]

const values = [
  {
    title: 'Emotion first',
    text: 'Technique serves feeling. If a passage does not move us in the room, it does not leave the room.',
  },
  {
    title: 'Traditions as equals',
    text: 'A raag, a fugue and a blues line are treated with the same respect — no tradition is decoration.',
  },
  {
    title: 'The cinematic ear',
    text: 'Every piece is mixed for space and depth, as if it were always meant to underscore a story.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A house built between traditions."
        description="D'Rimél Productions is a boutique music house where the concert hall, the jazz club and the classical courtyard share the same score."
      />

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60">
              <Image
                src="/founder-portrait.png"
                alt="The founder of D'Rimél Productions"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The Founder"
              title="Hrishabh Saxena."
              eyebrow="Music Director • Producer • Multi-Instrumentalist"
              description="At the heart of D’Rimél Production is Hrishabh Saxena, a music director, producer, educator, and multi-instrumentalist driven by a passion for transforming ideas into powerful musical experiences."
            />
            <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                With over 15 years of experience in music, Hrishabh has developed a versatile musical vocabulary spanning Western Classical, Indian Classical, Jazz, Rock, Fusion, Bollywood, Flamenco, Latin music, and orchestral composition. His primary instrument is the piano, complemented by his expertise in instruments including flute, harmonica, mandolin, violin, harmonium, melodica, cajón, and more.
              </p>
              <p>
                As the founder of D’Rimél Production, his vision is to build a creative space where composition, orchestration, sound design, production, and storytelling come together. From cinematic scores and symphonic compositions to songs, jingles, theatre music, and contemporary productions, every project is approached with a balance of musicality, emotion, and professional production.
              </p>
              <p>
                Through D’Rimél Production, Hrishabh continues to work toward creating distinctive musical identities and meaningful sound experiences for artists, filmmakers, brands, theatres, and audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading align="center" eyebrow="What We Believe" title="Three quiet rules." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="h-full rounded-2xl border border-border/60 bg-background/40 p-8">
                  <span className="font-serif text-4xl text-gradient-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-xl">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="The Path" title="A decade of listening." align="center" />
        <div className="mt-14 space-y-10">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 100}>
              <div className="flex gap-6 sm:gap-10">
                <div className="flex flex-col items-center">
                  <span className="font-serif text-xl text-gold">{item.year}</span>
                  {i < timeline.length - 1 && (
                    <span className="mt-3 h-full w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Artists */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading
            eyebrow="The Collective"
            title="The voices in the room."
            description="A rotating ensemble of musicians who bring their own traditions to every session."
          />
          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {artists.map((artist, i) => (
              <Reveal key={artist.name} delay={(i % 4) * 100}>
                <div className="group overflow-hidden rounded-2xl border border-border/60 bg-background/40">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={artist.image || '/placeholder.svg'}
                      alt={artist.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg">{artist.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">
                      {artist.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
