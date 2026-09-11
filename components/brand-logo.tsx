import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
  showWordmark?: boolean
  href?: string | null
}

export function BrandLogo({ className, showWordmark = true, href = '/' }: BrandLogoProps) {
  const content = (
    <span className={cn('flex items-center gap-3', className)}>
      <Image
        src="/drimel-logo.png"
        alt="D'Rimél Productions"
        width={120}
        height={120}
        className="h-11 w-auto object-contain"
        priority
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-lg tracking-[0.18em] text-foreground">D&apos;RIMÉL</span>
          <span className="mt-1 text-[0.6rem] tracking-luxe text-muted-foreground uppercase">
            Productions
          </span>
        </span>
      )}
    </span>
  )

  if (href) {
    return (
      <Link href={href} aria-label="D'Rimél Productions home" className="inline-flex">
        {content}
      </Link>
    )
  }

  return content
}
