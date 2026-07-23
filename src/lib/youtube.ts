// src/lib/youtube.ts
// Fetches real, live view counts from the YouTube Data API v3 at build/request time.
// Env var: YOUTUBE_API_KEY — free API key from console.cloud.google.com (YouTube Data API v3 enabled)
//
// Usage:
//   const views = await fetchViewCount("4BQLE_RrTSU")
//   // returns 12345678 or null if unavailable

const API_BASE = "https://www.googleapis.com/youtube/v3/videos"

export async function fetchViewCount(videoId: string): Promise<number | null> {
  const key = process.env.YOUTUBE_API_KEY
  if (!key) return null

  try {
    const res = await fetch(
      `${API_BASE}?part=statistics&id=${videoId}&key=${key}`,
      { next: { revalidate: 86400 } } // real-time isn't needed here; refresh once a day
    )
    if (!res.ok) return null

    const data = await res.json()
    const count = data?.items?.[0]?.statistics?.viewCount
    return count ? Number(count) : null
  } catch {
    return null
  }
}

/** Formats a raw view count into a compact display string, e.g. 12345678 -> "12.3M" */
export function formatViewCount(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`
  if (n >= 1_000_000)     return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)         return `${(n / 1_000).toFixed(1)}K`
  return n.toLocaleString()
}
