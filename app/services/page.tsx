import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Composition, production, recording, mixing and sound for picture — the full range of services offered by D'Rimél Productions.",
}

const process = [
  { step: 'Spotting', text: 'We listen to the brief, the footage, the intention — and map where music should live.' },
  { step: 'Sketch', text: 'Themes and motifs are drafted at the piano, then shaped into a first sonic direction.' },
  { step: 'Score', text: 'The work is orchestrated and arranged, blending written parts with live improvisation.' },
  { step: 'Session', text: 'Players are recorded in the studio, captured warm and close for cinematic depth.' },
  { step: 'Mix', text: 'Every element is placed in space and polished into the final master.' },
]

const gallery = [
  { src: '/studio-recording.png', alt: 'Recording session in the studio' },
  { src: '/studio-composition.png', alt: 'Composition desk with score and piano' },
  { src: '/studio-instruments.png', alt: 'Instruments arranged in the live room' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="From the first theme to the final master."
        description="A boutique, end-to-end music house — we compose, arrange, record and mix, so a single vision carries all the way through."
      />

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 120}>
              <div className="group h-full rounded-2xl border border-border/60 bg-card/50 p-8 transition-colors duration-500 hover:border-gold/40 sm:p-10">
                <span className="font-serif text-3xl text-gradient-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-2xl">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm">
                      <Check className="size-4 shrink-0 text-gold" />
                      <span className="text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="A patient, five-step craft."
            description="Every commission follows the same considered path — from the first spotting conversation to the final mastered file."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 90} className="bg-background/60 p-7">
                <span className="font-mono text-xs text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-lg">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio gallery */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="The Studio"
          title="Where it all takes shape."
          description="A room built for warmth and focus — analogue heart, modern spine."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 120}
              className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60">
                <Image
                  src={img.src || '/placeholder.svg'}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
          <Reveal>
            <h2 className="text-balance text-4xl leading-tight sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground">
              Tell us about the story you&apos;re telling and we&apos;ll shape the sound around
              it.
            </p>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              Start a Conversation
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
