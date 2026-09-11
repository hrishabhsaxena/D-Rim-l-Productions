const genres = [
  'Western Classical',
  'Jazz',
  'Indian Classical',
  'Flamenco',
  'Symphonic Score',
  'World Fusion',
  'Chamber',
  'Cinematic',
]

export function GenreMarquee() {
  const items = [...genres, ...genres]
  return (
    <div className="relative flex overflow-hidden border-y border-border/60 py-6">
      <div className="flex shrink-0 items-center gap-10 pr-10 motion-safe:animate-[marquee_38s_linear_infinite]">
        {items.map((g, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-serif text-2xl italic text-muted-foreground/70 sm:text-3xl">
              {g}
            </span>
            <span className="size-1.5 rounded-full bg-gold/60" />
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"
      />
    </div>
  )
}
