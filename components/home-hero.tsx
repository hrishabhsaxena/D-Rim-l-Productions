import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Waveform } from '@/components/waveform'

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/hero-orchestra.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
      <div className="absolute inset-0 bg-grain opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3 opacity-0 [animation:float-slow_none] motion-safe:animate-[none]">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs uppercase tracking-luxe text-gold">
              Cinematic Music House
            </span>
          </div>

          <h1 className="text-balance text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Where the <span className="text-gradient-gold">orchestra</span> learns to{' '}
            <span className="italic text-gradient-gold">improvise.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            D&apos;Rimél Productions composes symphonic works that fuse Western classical
            discipline, the freedom of jazz, and the soul of world traditions — scores built
            for the screen, the stage, and the space between.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              Explore the Work
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:border-gold/60 hover:text-gold"
            >
              Commission a Score
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-4 pb-10">
        <Waveform />
        <span className="text-[0.65rem] uppercase tracking-luxe text-muted-foreground">
          Scroll to listen
        </span>
      </div>
    </section>
  )
}
