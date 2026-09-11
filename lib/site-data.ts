export interface Project {
  slug: string
  title: string
  genre: string
  year: string
  image: string
  blurb: string
  description: string
}

export const projects: Project[] = [
  {
    slug: 'chromatic-affair',
    title: 'Chromatic Affair',
    genre: 'Classical × Jazz',
    year: '2025',
    image: '/work-chromatic-affair.png',
    blurb: 'A dialogue between the fugue and the blue note.',
    description:
      'A four-movement suite where Western counterpoint courts improvised jazz harmony. Strings and a lone piano trade phrases with a horn section until the two languages dissolve into one.',
  },
  {
    slug: 'midnight-swing',
    title: 'Midnight Swing',
    genre: 'Jazz Noir',
    year: '2024',
    image: '/work-midnight-swing.png',
    blurb: 'Smoke, brass, and the long walk home.',
    description:
      'Recorded live to tape in a single candlelit night, Midnight Swing is a love letter to the after-hours club — brushed drums, a whispering upright bass, and a trumpet that never quite says goodbye.',
  },
  {
    slug: 'triumph-sunrise',
    title: 'Triumph at Sunrise',
    genre: 'Symphonic Score',
    year: '2024',
    image: '/work-triumph-sunrise.png',
    blurb: 'A score for beginnings that were fought for.',
    description:
      'Commissioned as the emotional spine of a feature film, this symphonic work builds from a single cello line into a full-orchestra sunrise — a study in earning your resolution.',
  },
  {
    slug: 'ecos-de-pasion',
    title: 'Ecos de Pasión',
    genre: 'Flamenco Symphonic',
    year: '2023',
    image: '/work-ecos-pasion.png',
    blurb: 'Where the guitar bleeds into the orchestra.',
    description:
      'Flamenco palmas and a fiery nylon-string guitar meet a sweeping string section. Ecos de Pasión is heat and restraint — the tension between a solo voice and the crowd that answers it.',
  },
  {
    slug: 'celestial-todi',
    title: 'Celestial Todi',
    genre: 'Indian Classical Fusion',
    year: '2023',
    image: '/work-celestial-todi.png',
    blurb: 'Raag Miyan ki Todi, reimagined for the stars.',
    description:
      'A meditation on the dawn raag, Celestial Todi weaves sitar and tabla through a bed of ambient strings — ancient melodic grammar suspended in a modern, cinematic space.',
  },
  {
    slug: 'rogi',
    title: 'Rogi',
    genre: 'Theatrical Production',
    year: '2022',
    image: '/work-rogi.png',
    blurb: 'A stage score about illness, memory and grace.',
    description:
      'Original music and sound design for the stage production Rogi. Sparse piano motifs and processed vocal textures underscore a story about the fragile line between the body and the self.',
  },
]

export interface Service {
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'Original Composition',
    description:
      'Bespoke symphonic and chamber works written to a brief — for film, stage, brand, or the sheer love of a theme.',
    points: ['Film & series scores', 'Concert works', 'Theme & motif development'],
  },
  {
    title: 'Production & Arrangement',
    description:
      'From a hummed melody to a fully realised arrangement — orchestration, sequencing, and genre-crossing arrangement.',
    points: ['Orchestration', 'Genre fusion arrangement', 'MIDI & live hybrid production'],
  },
  {
    title: 'Recording & Mixing',
    description:
      'Warm, detailed recordings captured and mixed with a cinematic ear — every instrument given its own pool of light.',
    points: ['Live session recording', 'Mixing & mastering', 'Vocal production'],
  },
  {
    title: 'Sound for Picture',
    description:
      'Scoring to picture, spotting sessions, and immersive sound design that lets the story breathe.',
    points: ['Scoring to picture', 'Sound design', 'Spotting & delivery'],
  },
]

export interface Artist {
  name: string
  role: string
  image: string
}

export const artists: Artist[] = [
  { name: 'Aria Sengupta', role: 'Vocalist & Lyricist', image: '/artist-1.png' },
  { name: 'Mateo Rivas', role: 'Guitarist & Composer', image: '/artist-2.png' },
  { name: 'Lena Ferreira', role: 'Violinist & Arranger', image: '/artist-3.png' },
  { name: 'Kabir Anand', role: 'Percussionist', image: '/artist-4.png' },
]
