import Link from 'next/link'
import { Disc, Radio, Mail } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'

const nav = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { href: 'https://instagram.com', label: 'Instagram', Icon: Disc },
  { href: 'https://youtube.com', label: 'YouTube', Icon: Radio },
  { href: 'mailto:hello@drimel.studio', label: 'Email', Icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-card/40">
      <div className="hairline" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <BrandLogo href={null} />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              A boutique music house composing cinematic symphonic works where classical
              discipline meets the pulse of jazz and the soul of world traditions.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-luxe text-gold">Explore</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-luxe text-gold">Connect</h4>
            <ul className="mt-5 space-y-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="size-4 text-gold/70" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} D&apos;Rimél Productions. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Composed in the dark, released into light</p>
        </div>
      </div>
    </footer>
  )
}
