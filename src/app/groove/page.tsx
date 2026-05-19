// src/app/groove/page.tsx — Groove of the Day
// HOW TO UPDATE THE SONG:
//   1. Drop the new audio file into /public/audio/
//   2. Update GROOVE_TRACK below — change title, artist, filename, and date
//   That's it. No other code changes needed.

import type { Metadata } from "next"
import { GroovePlayer } from "@/components/ui/GroovePlayer"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Groove of the Day",
  description: "Donald Markowitz shares a daily groove from the studio.",
}

// ─── UPDATE THIS OBJECT TO CHANGE THE SONG ───────────────────────────────────
export const GROOVE_TRACK = {
  title:    "Groove of the Day",          // Song title
  artist:   "Donald Markowitz",           // Artist / credit line
  filename: "groove.mp3",                 // File in /public/audio/
  date:     "May 2026",                   // Display date
  note:     "From the Mid City Sound Studios vault.", // Optional liner note
}
// ─────────────────────────────────────────────────────────────────────────────

export default function GroovePage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">
      <section className="py-20 px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-4xl">
          <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">Mid City Sound</Badge>
          <h1 className="font-display text-5xl md:text-6xl text-cream mb-4 leading-tight">
            Groove of
            <br />
            <span className="text-gold-gradient italic">the Day</span>
          </h1>
          <p className="text-mist text-sm max-w-md leading-relaxed">
            A rotating selection from the Mid City Sound Studios vault — hand-picked by Donald Markowitz.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-2xl">
          <GroovePlayer track={GROOVE_TRACK} />
        </div>
      </section>
    </div>
  )
}
