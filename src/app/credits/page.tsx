// src/app/credits/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// CREDITS PAGE — Complete filmography, discography, and major collaborations.
// Tab-style sections: Film & TV | Discography | Collaborations
// Swap placeholder credits with real ones as they're confirmed.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { useState } from "react"
import Link         from "next/link"
import { Film, Music, Users, ArrowRight, Award } from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn }        from "@/lib/utils"

/* ─── Data ────────────────────────────────────────────────────────────────── */
const FILM_TV = [
  { title: "Feature Film [Title TBD]",     year: "2003", role: "Composer",         note: "Oscar® Nominated — Best Original Song",   badge: "Film" },
  { title: "Feature Film [Title TBD]",     year: "1997", role: "Composer",         note: "Oscar® Nominated — Best Original Score",  badge: "Film" },
  { title: "Dirty Dancing",                year: "1987", role: "Session Arranger", note: "Academy Award — Best Original Song",      badge: "Film" },
  { title: "Feature Film [Title TBD]",     year: "1993", role: "Composer",         note: "Oscar® Nominated",                        badge: "Film" },
  { title: "TV Series [Title TBD]",        year: "2005", role: "Score Composer",   note: "Network television",                      badge: "TV"   },
  { title: "TV Series [Title TBD]",        year: "2008", role: "Theme Composer",   note: "Network television",                      badge: "TV"   },
  { title: "Documentary [Title TBD]",      year: "2011", role: "Composer",         note: "Festival selected",                       badge: "Doc"  },
  { title: "Short Film [Title TBD]",       year: "1994", role: "Composer",         note: "Sundance submission",                     badge: "Film" },
]

const DISCOGRAPHY = [
  { title: "\"Who Let the Dogs Out\"",    artist: "Baha Men",              year: "2000", role: "Producer / Arranger",         badge: "Grammy" },
  { title: "\"Time of My Life\"",         artist: "Dirty Dancing OST",     year: "1987", role: "Session Arranger",            badge: "Gold"   },
  { title: "Do It Again",                 artist: "Curren$y & Wiz Khalifa",year: "2024", role: "Producer · Mid City Sound",   badge: "Studio" },
  { title: "Album [Title TBD]",           artist: "Artist [TBD]",          year: "1990", role: "Arranger / Conductor",        badge: "R&B"    },
  { title: "Album [Title TBD]",           artist: "Artist [TBD]",          year: "1995", role: "Co-Producer",                 badge: "Pop"    },
  { title: "Album [Title TBD]",           artist: "Artist [TBD]",          year: "1999", role: "Arranger",                    badge: "Jazz"   },
  { title: "Orchestral Arrangements",     artist: "Various Artists",        year: "1988–2005", role: "Arranger / Conductor",  badge: "Classical" },
  { title: "Original Compositions",       artist: "Donald Markowitz",       year: "Ongoing",   role: "Composer",              badge: "Solo"   },
]

const COLLABORATIONS = [
  { name: "Baha Men",              context: "Production & arrangement on Grammy-winning \"Who Let the Dogs Out\"",        era: "2000" },
  { name: "Curren$y",              context: "Tracked live at Mid City Sound Studios, New Orleans",                         era: "2024" },
  { name: "Wiz Khalifa",           context: "Tracked live at Mid City Sound Studios, New Orleans",                         era: "2024" },
  { name: "Hollywood Studio System", context: "Three Oscar-nominated film scores across a 10-year period",                era: "1993–2003" },
  { name: "NYC Session Community", context: "Six years as one of New York's premier session arrangers and conductors",    era: "1986–1992" },
  { name: "New Orleans Artists",   context: "Ongoing mentorship and production at Mid City Sound Studios",                 era: "2015–Present" },
  /* ← Add more collaborators here as you confirm the list */
]

/* ─── Tab config ── */
const TABS = [
  { id: "film",    label: "Film & TV",       icon: Film  },
  { id: "disc",    label: "Discography",     icon: Music },
  { id: "collab",  label: "Collaborations",  icon: Users },
] as const

type TabId = typeof TABS[number]["id"]

/* ─────────────────────────────────────────────────────────────────────────── */
export default function CreditsPage() {
  const [active, setActive] = useState<TabId>("film")

  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      {/* ── Page header ── */}
      <section className="py-20 px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl">
          <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
            Filmography & Discography
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl text-cream mb-5 leading-tight">
            The work
            <br />
            <span className="text-gold-gradient italic">speaks</span>
          </h1>
          <p className="text-mist text-sm max-w-md leading-relaxed">
            Five decades of production credits spanning film scores, platinum records, Grammy-winning
            sessions, and landmark collaborations. A curated selection is presented here.
          </p>
        </div>
      </section>

      {/* ── Oscar callout strip ── */}
      <div className="border-b border-studio-border/40 bg-studio-black">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="flex flex-wrap items-center gap-6">
            {[
              { icon: Award, label: "3× Academy Award Nominated" },
              { icon: Music, label: "Grammy Record — Baha Men" },
              { icon: Film,  label: "Dirty Dancing · 1987 · Gold Soundtrack" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-gold/60" />
                <span className="text-xs text-mist tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div className="sticky top-16 z-30 border-b border-studio-border/40 bg-studio-black/95 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex gap-0">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-4 text-[12px] font-medium tracking-wide uppercase transition-colors border-b-2",
                  active === id
                    ? "border-gold text-gold"
                    : "border-transparent text-mist hover:text-cream"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="mx-auto max-w-5xl px-6 py-14">

        {/* Film & TV */}
        {active === "film" && (
          <div className="space-y-3">
            <p className="text-mist text-xs mb-6">
              Placeholder titles marked [Title TBD] — swap with real film names once confirmed.
            </p>
            {FILM_TV.map(({ title, year, role, note, badge }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 border border-studio-border bg-studio-card rounded-sm hover:border-gold/30 transition-all group"
              >
                <span className="font-mono text-[11px] text-mist/40 pt-0.5 w-10 shrink-0">{year}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 flex-wrap mb-1">
                    <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">
                      {title}
                    </h3>
                    <Badge variant="secondary" className="text-[9px] shrink-0">{badge}</Badge>
                  </div>
                  <p className="text-[11px] tracking-wide uppercase text-gold/50 mb-1">{role}</p>
                  {note && <p className="text-mist text-xs">{note}</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Discography */}
        {active === "disc" && (
          <div className="space-y-3">
            {DISCOGRAPHY.map(({ title, artist, year, role, badge }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 border border-studio-border bg-studio-card rounded-sm hover:border-gold/30 transition-all group"
              >
                <span className="font-mono text-[11px] text-mist/40 pt-0.5 w-16 shrink-0">{year}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 flex-wrap mb-0.5">
                    <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">
                      {title}
                    </h3>
                    <Badge variant={badge === "Grammy" ? "default" : "secondary"} className="text-[9px] shrink-0">
                      {badge}
                    </Badge>
                  </div>
                  <p className="text-mist text-sm mb-1">{artist}</p>
                  <p className="text-[11px] tracking-wide uppercase text-gold/50">{role}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Collaborations */}
        {active === "collab" && (
          <div className="grid sm:grid-cols-2 gap-4">
            {COLLABORATIONS.map(({ name, context, era }) => (
              <div
                key={name}
                className="p-6 border border-studio-border bg-studio-card rounded-sm hover:border-gold/30 transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display text-xl text-cream">{name}</h3>
                  <span className="font-mono text-[10px] text-mist/40 shrink-0 pt-1">{era}</span>
                </div>
                <Separator className="mb-3" />
                <p className="text-mist text-sm leading-relaxed">{context}</p>
              </div>
            ))}

            {/* Add-more prompt */}
            <div className="p-6 border border-dashed border-studio-border/50 rounded-sm flex flex-col items-center justify-center text-center gap-2">
              <p className="text-mist/40 text-xs">
                More collaborators to be added.
                <br />Contact to update credits.
              </p>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact">
                  <ArrowRight className="w-3.5 h-3.5" />
                  Get in touch
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* ── Press note ── */}
      <div className="mx-auto max-w-5xl px-6 pb-16">
        <div className="border border-studio-border/40 rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <p className="text-cream text-sm font-medium mb-1">Press & Licensing</p>
            <p className="text-mist text-xs">For press kits, licensing inquiries, or credit verification, please reach out directly.</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">
              Contact
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
