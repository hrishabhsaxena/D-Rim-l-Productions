import type { Metadata } from 'next'
import { Mail, MapPin, Clock, Disc, Radio } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Commission a score or start a conversation with D'Rimél Productions. Tell us about your film, stage or concert project.",
}

const details = [
  { Icon: Mail, label: 'Email', value: 'hello@drimel.studio', href: 'mailto:hello@drimel.studio' },
  { Icon: MapPin, label: 'Studio', value: 'By appointment · Worldwide remote', href: null },
  { Icon: Clock, label: 'Response', value: 'Within 2 business days', href: null },
]

const socials = [
  { Icon: Disc, label: 'Instagram', href: 'https://instagram.com' },
  { Icon: Radio, label: 'YouTube', href: 'https://youtube.com' },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's compose something."
        description="Every score begins with a conversation. Tell us about your project and we'll find its sound together."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl">Studio details</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  We work with directors, producers, choreographers and brands around the world.
                  Reach out however suits you best.
                </p>
              </div>

              <ul className="space-y-6">
                {details.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card/60 text-gold">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block text-lg text-foreground transition-colors hover:text-gold"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg text-foreground">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Follow</p>
                <div className="mt-4 flex gap-3">
                  {socials.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-11 items-center justify-center rounded-full border border-border/60 bg-card/60 text-muted-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
