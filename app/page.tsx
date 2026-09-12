import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HomeHero } from '@/components/home-hero'
import { GenreMarquee } from '@/components/genre-marquee'
import { SectionHeading } from '@/components/section-heading'
import { WorkCard } from '@/components/work-card'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/site-data'

const stats = [
  { value: '120+', label: 'Works Composed' },
  { value: '18', label: 'Films & Series Scored' },
  { value: '6', label: 'Traditions Fused' },
  { value: '10 yrs', label: 'In the Studio' },
]
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <BackgroundMusic />
      </body>
    </html>
  );
}

export default function HomePage() {
  const featured = projects.slice(0, 3)

  return (
    <>
      <HomeHero />

      <GenreMarquee />

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60">
              <Image
                src="/about-cinematic.png"
                alt="A composer at work in a candlelit studio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-xl border border-gold/30 bg-card/90 px-6 py-4 backdrop-blur-sm sm:-right-6">
              <p className="font-serif text-3xl text-gradient-gold">D&apos;</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Rimél</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="The Philosophy"
              title="One score, many mother tongues."
              description="We believe a melody should be able to travel — to carry the counterpoint of a Bach fugue, the swing of a smoke-filled club, and the ache of a dawn raag, all inside a single breath."
            />
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                D&apos;Rimél Productions began with a simple obsession: what happens when
                traditions that grew up apart are finally allowed to speak to one another? Our
                studio is where a violin can answer a sitar, and a jazz pianist can trade fours
                with a full string section.
              </p>
              <p className="leading-relaxed">
                Every commission is treated as a piece of cinema — scored for emotion first,
                built with the patience of the concert hall, and finished with the intimacy of a
                late-night session.
              </p>
            </div>
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold"
            >
              Our Story
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Scores that live beyond the screen."
            />
            <Reveal delay={100}>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-gold"
              >
                View All Work
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 120}>
                <WorkCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="text-center">
              <p className="font-serif text-4xl text-gradient-gold sm:text-5xl">{stat.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/60">
        <Image
          src="/studio-production.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-grain opacity-50" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 md:py-36">
          <Reveal>
            <span className="text-xs uppercase tracking-luxe text-gold">Let&apos;s Compose</span>
            <h2 className="mt-6 text-balance text-4xl leading-tight sm:text-5xl md:text-6xl">
              Bring us the story. We&apos;ll find its sound.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Whether it&apos;s a feature film, a stage production, or a single unforgettable
              theme — every great score starts with a conversation.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              Start a Project
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
