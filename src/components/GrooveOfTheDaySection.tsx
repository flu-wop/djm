// src/components/GrooveOfTheDaySection.tsx
// "Groove of the Day" — pulls a deterministic daily pick from the playable
// slice of the Legacy Catalog (src/lib/catalog.ts). Same track for every
// visitor on a given UTC day; rotates automatically at midnight UTC.
//
// AUDIO STATUS: catalog entries have no `filename` yet (public/audio/ is
// empty). Until real clips are dropped in and `filename` is set per track
// in src/lib/catalog.ts, this renders a styled "preview coming soon" card
// instead of a broken player. Add the file + filename and it switches to
// the real GroovePlayer automatically — no other changes needed.

"use client"

import { useState } from "react"
import { Shuffle, Music, Info } from "lucide-react"
import { GroovePlayer } from "@/components/ui/GroovePlayer"
import { Badge } from "@/components/ui/badge"
import type { CatalogItem } from "@/lib/catalog"

export function GrooveOfTheDaySection({
  initialTrack,
  playableCatalog,
}: {
  initialTrack: CatalogItem
  playableCatalog: CatalogItem[]
}) {
  const [track, setTrack] = useState<CatalogItem>(initialTrack)
  const [isShuffled, setIsShuffled] = useState(false)

  function shuffle() {
    const pool = playableCatalog.filter(t => t.id !== track.id)
    const next = pool[Math.floor(Math.random() * pool.length)] ?? track
    setTrack(next)
    setIsShuffled(true)
  }

  function resetToToday() {
    setTrack(initialTrack)
    setIsShuffled(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <div>
          <Badge variant="outline" className="mb-3 text-[10px] tracking-widest uppercase">
            {isShuffled ? "Shuffled Pick" : "Updated Daily"}
          </Badge>
          <h2 className="font-display text-4xl text-cream">Groove of the Day</h2>
        </div>
        <div className="flex items-center gap-2">
          {isShuffled && (
            <button
              onClick={resetToToday}
              className="text-[11px] tracking-wide uppercase text-mist hover:text-gold transition-colors underline underline-offset-4"
            >
              Back to today&apos;s pick
            </button>
          )}
          <button
            onClick={shuffle}
            className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-mist hover:text-gold border border-studio-border hover:border-gold/40 rounded-sm px-4 py-2.5 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5" /> Shuffle
          </button>
        </div>
      </div>

      {track.filename ? (
        <GroovePlayer
          track={{
            title: track.title.replace(/^"|"$/g, ""),
            artist: track.subtitle ?? "Donald Markowitz",
            filename: track.filename,
            date: track.year,
            note: track.badge,
          }}
        />
      ) : (
        <ComingSoonCard track={track} />
      )}
    </div>
  )
}

function ComingSoonCard({ track }: { track: CatalogItem }) {
  return (
    <div className="border border-gold/25 rounded-sm overflow-hidden" style={{ boxShadow: "0 0 60px rgba(212,175,119,0.06)" }}>
      <div className="relative bg-studio-charcoal p-12 flex flex-col items-center justify-center gap-6 border-b border-studio-border/40 min-h-[200px]">
        <div className="w-20 h-20 border border-gold/30 rounded-full flex items-center justify-center bg-studio-black/60">
          <Music className="w-8 h-8 text-gold/60" />
        </div>
        <div className="text-center">
          <p className="font-display text-2xl text-cream">{track.title.replace(/^"|"$/g, "")}</p>
          {track.subtitle && <p className="text-mist text-sm mt-1">{track.subtitle}</p>}
          {track.badge && <p className="text-mist/50 text-xs mt-2 italic">{track.badge}</p>}
        </div>
        <p className="text-[10px] tracking-widest uppercase text-gold/50">{track.year}</p>
      </div>
      <div className="px-6 py-5 bg-studio-dark flex items-center justify-center gap-2">
        <Info className="w-3.5 h-3.5 text-gold/40" />
        <p className="text-mist/60 text-xs text-center">Audio preview coming soon</p>
      </div>
    </div>
  )
}
