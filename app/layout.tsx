import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "D'Rimél Productions — Cinematic Music & Symphonic Storytelling",
    template: "%s · D'Rimél Productions",
  },
  description:
    "D'Rimél Productions is a boutique music house crafting cinematic symphonic works that fuse Western classical, jazz, Indian classical and world traditions into singular sonic stories.",
  generator: 'v0.app',
  keywords: [
    "D'Rimél",
    'music production',
    'symphonic',
    'film score',
    'cinematic music',
    'fusion',
    'orchestral',
  ],
  openGraph: {
    title: "D'Rimél Productions",
    description: 'Cinematic symphonic works fusing classical, jazz and world traditions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a09',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
