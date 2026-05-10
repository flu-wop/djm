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
  { title: "Dirty Dancing",                    year: "1987", role: "Co-Writer — \"(I've Had) The Time of My Life\"", note: "Academy Award — Best Original Song · Golden Globe — Best Original Song", badge: "Film" },
  { title: "Highlander II: The Quickening",    year: "1991", role: "Composer",      note: "Feature film",              badge: "Film" },
  { title: "Street Beat: Drumming Below Sea Level", year: "2025", role: "Creator · Producer · Director", note: "New Orleans drumming documentary — streetbeat.video", badge: "Doc" },
  { title: "Film & Television [Additional titles TBD]", year: "1988–2010", role: "Composer · Songwriter", note: "Two decades of Hollywood film and television work", badge: "Film/TV" },
]

const DISCOGRAPHY = [
  { title: "\"(I've Had) The Time of My Life\"", artist: "Bill Medley & Jennifer Warnes — Dirty Dancing OST", year: "1987", role: "Co-Writer",              badge: "Oscar® Winner" },
  { title: "Decisions",                            artist: "Bobby Rush feat. Dr. John",                          year: "2014", role: "Producer · Co-Writer",  badge: "Grammy Nominated" },
  { title: "\"Another Murder in New Orleans\"",  artist: "Bobby Rush feat. Dr. John",                          year: "2014", role: "Co-Writer",              badge: "Single" },
  { title: "Dr. John Final Recordings",            artist: "Dr. John",                                           year: "Ongoing", role: "Producer",           badge: "Session" },
  { title: "Collaborations",                       artist: "Van Morrison, Taj Mahal, Art Neville, Ivan Neville", year: "Various", role: "Producer · Songwriter", badge: "Studio" },
  { title: "James Taylor, Shawn Colvin, Nicolette Larson", artist: "Various",                                   year: "Various", role: "Songwriter · Sessions", badge: "Session" },
  { title: "Original Compositions",               artist: "Donald Markowitz",                                   year: "Ongoing", role: "Composer",             badge: "Solo"   },
]

const COLLABORATIONS = [
  { name: "Bill Medley & Jennifer Warnes", context: "Performed \"(I've Had) The Time of My Life\" — co-written by Donald. Academy Award & Golden Globe winner.", era: "1987" },
  { name: "Bobby Rush",            context: "Producer on Grammy-nominated album Decisions. Co-wrote \"Another Murder in New Orleans\" featuring Dr. John.", era: "2014" },
  { name: "Dr. John",              context: "Collaborated on Bobby Rush's Decisions and produced some of Dr. John's final recordings.",                       era: "2014–2019" },
  { name: "Van Morrison",          context: "Producer and collaborator across recording projects.",                                                              era: "Various" },
  { name: "Taj Mahal",             context: "Producer and collaborator across recording projects.",                                                              era: "Various" },
  { name: "Art Neville",           context: "Producer and collaborator, New Orleans.",                                                                           era: "Various" },
  { name: "Ivan Neville",          context: "Producer and collaborator, New Orleans.",                                                                           era: "Various" },
  { name: "Bill Medley",           context: "Worked together on Dirty Dancing soundtrack. The song reached #1 on the Billboard Hot 100.",                      era: "1987" },
  { name: "James Taylor",          context: "Sang on Donald's records during the Hollywood years.",                                                             era: "Various" },
  { name: "Shawn Colvin",          context: "Sang on Donald's records during the Hollywood years.",                                                             era: "Various" },
  { name: "Doug Belote",           context: "New Orleans drummer and host of Street Beat: Drumming Below Sea Level documentary.",                               era: "2025" },
  { name: "Irvin Mayfield",        context: "New Orleans collaborator and session partner.",                                                                     era: "Various" },
  /* ← Add further credits as confirmed */
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
            Five decades of production credits spanning an Academy Award-winning song, Grammy-nominated records,
            film scores, and landmark collaborations. A curated selection is presented here.
          </p>
        </div>
      </section>

      {/* ── Oscar callout strip ── */}
      <div className="border-b border-studio-border/40 bg-studio-black">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="flex flex-wrap items-center gap-6">
            {[
              { icon: Award, label: "Academy Award Winner — Best Original Song" },
              { icon: Music, label: "Grammy Nominated — Best Blues Album (Bobby Rush)" },
              { icon: Film,  label: "Dirty Dancing · 1987 · '(I've Had) The Time of My Life'" },
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
