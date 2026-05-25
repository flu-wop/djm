// src/lib/tmdb.ts
// Fetches poster art from TMDB at build/request time.
// Env var: TMDB_TOKEN — your API Read Access Token (Bearer)
//
// Usage:
//   const posters = await fetchPosters(FILM_TV)
//   // returns { "Dirty Dancing": "https://image.tmdb.org/t/p/w342/..." }

const BASE = "https://api.themoviedb.org/3"
const IMG  = "https://image.tmdb.org/t/p/w342"

// Manually verified TMDB IDs for titles that are hard to search
// Format: "Title (year or slug)": { id, type }
const KNOWN_IDS: Record<string, { id: number; type: "movie" | "tv" }> = {
  "Dirty Dancing":                         { id: 88,     type: "movie" },
  "Cop Rock":                              { id: 4573,   type: "tv"    },
  "Highlander II: The Quickening":         { id: 10821,  type: "movie" },
  "Afterburn":                             { id: 104579, type: "movie" },
  "Beverly Hills, 90210":                  { id: 1413,   type: "tv"    },
  "Bringing Up Jack":                      { id: 0,      type: "tv"    }, // not on TMDB
  "On Seventh Avenue":                     { id: 0,      type: "movie" }, // not on TMDB
  "North Shore Fish":                      { id: 0,      type: "movie" }, // not on TMDB
  "White Lies":                            { id: 0,      type: "movie" }, // verify
  "Chicago Sons":                          { id: 0,      type: "tv"    }, // not on TMDB
  "The Unknown Cyclist":                   { id: 130595, type: "movie" },
  "So Weird":                              { id: 4750,   type: "tv"    },
  "Popular":                               { id: 2337,   type: "tv"    },
  "Brutally Normal":                       { id: 0,      type: "tv"    }, // not on TMDB
  "The Chronicle":                         { id: 4630,   type: "tv"    },
  "Zenon: The Zequel":                     { id: 28273,  type: "movie" },
  "Jesus, Mary and Joey":                  { id: 0,      type: "movie" }, // verify
  "Jake 2.0":                              { id: 4757,   type: "tv"    },
  "Alter Ego":                             { id: 0,      type: "movie" }, // too common
  "Terminal":                              { id: 0,      type: "movie" }, // too common
  "Street Beat: Drumming Below Sea Level": { id: 0,      type: "movie" }, // not on TMDB yet
}

async function fetchPoster(title: string): Promise<string | null> {
  const token = process.env.TMDB_TOKEN
  if (!token) return null

  const known = KNOWN_IDS[title]
  if (!known || known.id === 0) return null

  const url = `${BASE}/${known.type}/${known.id}?language=en-US`
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}`, accept: "application/json" },
      next: { revalidate: 86400 }, // cache 24h
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.poster_path ? `${IMG}${data.poster_path}` : null
  } catch {
    return null
  }
}

export async function fetchPosters(
  titles: string[]
): Promise<Record<string, string>> {
  const entries = await Promise.all(
    titles.map(async t => [t, await fetchPoster(t)] as [string, string | null])
  )
  return Object.fromEntries(entries.filter(([, v]) => v !== null)) as Record<string, string>
}
