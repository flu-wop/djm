// src/lib/catalog.ts
// Single source of truth for the homepage "Legacy Catalog" + "Groove of the Day".
// Pulled from the same verified credits used on /credits — do not add unverified entries.

export type CatalogCategory =
  | "Song"
  | "Film"
  | "TV"
  | "TV Movie"
  | "Short"
  | "Doc"
  | "Disney"
  | "Grammy Nominated"
  | "Oscar Winner"

export type CatalogItem = {
  id: string
  title: string
  subtitle?: string   // artist / production note
  year: string        // display string, e.g. "1999–2001" or "Various"
  decade: string       // derived bucket, e.g. "1980s" or "Ongoing"
  categories: CatalogCategory[]
  badge?: string
  playable?: boolean   // eligible for Groove of the Day shuffle
  filename?: string    // /public/audio/<filename> — leave undefined until real audio is added
  funFact?: string     // shown on Groove of the Day — verified only, no invented specifics
  link?: { label: string; url: string } // where to actually hear/watch it
}

function decadeFromYear(year: string): string {
  const match = year.match(/\d{4}/)
  if (!match) return "Ongoing"
  const y = parseInt(match[0], 10)
  return `${Math.floor(y / 10) * 10}s`
}

function item(
  title: string,
  year: string,
  categories: CatalogCategory[],
  opts: Partial<Omit<CatalogItem, "id" | "title" | "year" | "decade" | "categories">> = {}
): CatalogItem {
  return {
    id: `${title}-${year}`,
    title,
    year,
    decade: decadeFromYear(year),
    categories,
    ...opts,
  }
}

// ─────────────────────────────────────────────────────────────────────────
// Film & TV (mirrors FILM_TV in src/app/credits/CreditsClient.tsx)
// ─────────────────────────────────────────────────────────────────────────
export const FILM_TV_CATALOG: CatalogItem[] = [
  item("Dirty Dancing", "1987", ["Film", "Oscar Winner"], { subtitle: "Co-Writer — \"(I've Had) The Time of My Life\" · Academy Award & Golden Globe · #1 Billboard Hot 100", badge: "Film" }),
  item("Cop Rock", "1990", ["TV"], { subtitle: "Songs · TV Series · Steven Bochco Production · ABC", badge: "TV" }),
  item("Highlander II: The Quickening", "1991", ["Film"], { subtitle: "Producer · Songwriter — \"It's a Perfect World\"", badge: "Film" }),
  item("Afterburn", "1992", ["TV Movie"], { subtitle: "Songwriter — \"Johnny Come Back\", \"Nothing Is Worse\", \"Roll The Dice\"", badge: "TV Movie" }),
  item("Beverly Hills, 90210", "1992", ["TV"], { subtitle: "Songwriter · TV Series", badge: "TV" }),
  item("Bringing Up Jack", "1995", ["TV"], { subtitle: "Composer · TV Series", badge: "TV" }),
  item("On Seventh Avenue", "1996", ["TV Movie"], { subtitle: "Composer · TV Movie", badge: "TV Movie" }),
  item("North Shore Fish", "1997", ["TV Movie"], { subtitle: "Composer · TV Movie", badge: "TV Movie" }),
  item("White Lies", "1997", ["Film"], { subtitle: "Composer · Feature film", badge: "Film" }),
  item("Chicago Sons", "1997", ["TV"], { subtitle: "Composer · TV Series", badge: "TV" }),
  item("The Unknown Cyclist", "1998", ["Film"], { subtitle: "Composer · Songwriter — \"Crossing Over\", \"I'll Remember You\", \"Falling Down on You\", \"Behind the Mask\"", badge: "Film" }),
  item("So Weird", "1999–2001", ["TV", "Disney"], { subtitle: "Composer · TV Series (Disney Channel)", badge: "TV" }),
  item("Popular", "1999", ["TV"], { subtitle: "Composer · TV Series", badge: "TV" }),
  item("Brutally Normal", "2000", ["TV"], { subtitle: "Composer · TV Series", badge: "TV" }),
  item("The Chronicle", "2001", ["TV"], { subtitle: "Composer · TV Series", badge: "TV" }),
  item("Zenon: The Zequel", "2001", ["TV Movie", "Disney"], { subtitle: "Composer — \"The Galaxy Is Ours\" (Disney Channel)", badge: "TV Movie" }),
  item("Jesus, Mary and Joey", "2003–2004", ["Film"], { subtitle: "Composer · Film", badge: "Film" }),
  item("Jake 2.0", "2003–2004", ["TV"], { subtitle: "Composer · TV Series", badge: "TV" }),
  item("Alter Ego", "2005", ["Short"], { subtitle: "Composer · Short film", badge: "Short" }),
  item("Terminal", "2007", ["Short"], { subtitle: "Composer · Short film", badge: "Short" }),
  item("Street Beat: Drumming Below Sea Level", "2025", ["Doc"], { subtitle: "Creator · Producer · Director · New Orleans drumming documentary", badge: "Doc" }),
]

// ─────────────────────────────────────────────────────────────────────────
// Discography (mirrors DISCOGRAPHY in src/app/credits/CreditsClient.tsx)
// playable: true marks entries eligible for Groove of the Day shuffle
// ─────────────────────────────────────────────────────────────────────────
export const DISCOGRAPHY_CATALOG: CatalogItem[] = [
  item("\"(I've Had) The Time of My Life\"", "1987", ["Song", "Oscar Winner"], {
    subtitle: "Bill Medley & Jennifer Warnes — Dirty Dancing OST", badge: "Oscar® Winner", playable: true,
    funFact: "Written in about twenty minutes at Donald's home studio on 85th & Central Park West. It was written for Chaka Khan and James Ingram, and passed on by Lionel Richie, Daryl Hall, and Kim Carnes before Bill Medley finally said yes.",
    link: { label: "Watch the official music video", url: "https://www.youtube.com/watch?v=4BQLE_RrTSU" },
  }),
  item("\"Johnny Come Back\"", "1992", ["Song"], {
    subtitle: "Afterburn (TV Movie)", badge: "Song", playable: true,
    funFact: "One of three Donald Markowitz songs written for the 1992 TV movie Afterburn.",
  }),
  item("\"Nothing Is Worse (Than A Broken Heart)\"", "1992", ["Song"], {
    subtitle: "Afterburn (TV Movie)", badge: "Song", playable: true,
    funFact: "One of three Donald Markowitz songs written for the 1992 TV movie Afterburn.",
  }),
  item("\"Roll The Dice\"", "1992", ["Song"], {
    subtitle: "Afterburn (TV Movie)", badge: "Song", playable: true,
    funFact: "One of three Donald Markowitz songs written for the 1992 TV movie Afterburn.",
  }),
  item("\"Crossing Over (The Edge of the Sky)\"", "1998", ["Song"], {
    subtitle: "The Unknown Cyclist — performed by Beth Nielsen Chapman", badge: "Song", playable: true,
    funFact: "Co-written with Grammy-winning singer-songwriter Beth Nielsen Chapman, who also performed it for the film.",
    link: { label: "Full soundtrack credits (IMDb)", url: "https://www.imdb.com/title/tt0120417/soundtrack/" },
  }),
  item("\"I'll Remember You\"", "1998", ["Song"], {
    subtitle: "The Unknown Cyclist — performed by Lea Thompson", badge: "Song", playable: true,
    funFact: "Co-written with Kate Markowitz. Performed in the film by actress Lea Thompson (Back to the Future's Lorraine Baines).",
    link: { label: "Full soundtrack credits (IMDb)", url: "https://www.imdb.com/title/tt0120417/soundtrack/" },
  }),
  item("\"Falling Down on You\"", "1998", ["Song"], {
    subtitle: "The Unknown Cyclist — performed by Valerie Carter", badge: "Song", playable: true,
    funFact: "Co-written with Sydney Forest and David Vanacore, performed by Valerie Carter.",
    link: { label: "Full soundtrack credits (IMDb)", url: "https://www.imdb.com/title/tt0120417/soundtrack/" },
  }),
  item("\"Behind the Mask\"", "1998", ["Song"], {
    subtitle: "The Unknown Cyclist", badge: "Song", playable: true,
    funFact: "One of four Donald Markowitz songs written for the 1998 film The Unknown Cyclist.",
    link: { label: "Full soundtrack credits (IMDb)", url: "https://www.imdb.com/title/tt0120417/soundtrack/" },
  }),
  item("\"The Galaxy Is Ours\"", "2001", ["Song", "Disney"], {
    subtitle: "Zenon: The Zequel (Disney) — performed by Proto Zoa", badge: "Song", playable: true,
    funFact: "Performed by the fictional band Proto Zoa in the Disney Channel movie, later released on the Zenon Z3 soundtrack by Walt Disney Records.",
    link: { label: "Listen on YouTube", url: "https://www.youtube.com/watch?v=jw3AYltm-Hs" },
  }),
  item("Decisions", "2014", ["Song", "Grammy Nominated"], {
    subtitle: "Bobby Rush feat. Dr. John — Producer · Co-Writer", badge: "Grammy Nominated", playable: true,
    funFact: "Donald produced and recorded the full album — earning a 2014 Grammy nomination for Best Blues Album.",
    link: { label: "Listen on Spotify", url: "https://open.spotify.com/album/52M8x9PeUoJ1VhfRG0Fbpi" },
  }),
  item("\"Another Murder in New Orleans\"", "2014", ["Song", "Grammy Nominated"], {
    subtitle: "Bobby Rush feat. Dr. John — Co-Writer (w/ Carl Gustafson)", badge: "Blues Award", playable: true,
    funFact: "Cut in New Orleans around Mardi Gras 2012 — the only studio recording Bobby Rush and Dr. John ever made together.",
    link: { label: "Watch the official music video", url: "https://www.youtube.com/watch?v=iK1AdcX0Djg" },
  }),
  item("Collaborations", "Various", ["Song"], { subtitle: "Van Morrison · Taj Mahal · Art Neville · Ivan Neville · Cyril Neville · Shane Theriot", badge: "Studio" }),
]

export const CATALOG: CatalogItem[] = [...FILM_TV_CATALOG, ...DISCOGRAPHY_CATALOG]

export function getDecades(): string[] {
  const order = ["1980s", "1990s", "2000s", "2010s", "2020s", "Ongoing"]
  const present = new Set(CATALOG.map(i => i.decade))
  return order.filter(d => present.has(d))
}

export function getCategories(): CatalogCategory[] {
  const order: CatalogCategory[] = ["Song", "Film", "TV", "TV Movie", "Short", "Doc", "Disney", "Grammy Nominated", "Oscar Winner"]
  const present = new Set(CATALOG.flatMap(i => i.categories))
  return order.filter(c => present.has(c))
}

function parseSortYear(year: string): number {
  const match = year.match(/\d{4}/)
  return match ? parseInt(match[0], 10) : 9999 // "Various"/"Ongoing" sort last
}

export function getCatalogChronological(): CatalogItem[] {
  return [...CATALOG].sort((a, b) => parseSortYear(a.year) - parseSortYear(b.year))
}

// ─────────────────────────────────────────────────────────────────────────
// Groove of the Day — deterministic pick, same for every visitor on a given
// UTC calendar day, rotates automatically at midnight UTC.
// ─────────────────────────────────────────────────────────────────────────
export function getPlayableCatalog(): CatalogItem[] {
  return DISCOGRAPHY_CATALOG.filter(i => i.playable)
}

export function getGrooveOfTheDay(date: Date = new Date()): CatalogItem {
  const playable = getPlayableCatalog()
  const dayOfYear = Math.floor(
    (Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) -
      Date.UTC(date.getUTCFullYear(), 0, 0)) / 86400000
  )
  const seed = date.getUTCFullYear() * 1000 + dayOfYear
  return playable[seed % playable.length]
}
