// src/app/credits/page.tsx
"use client"

import { useState } from "react"
import Link         from "next/link"
import Image        from "next/image"
import { Film, Music, Users, ArrowRight, Award } from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn }        from "@/lib/utils"

const FILM_TV = [
  { title: "Dirty Dancing",                         year: "1987",      role: "Co-Writer — \"(I've Had) The Time of My Life\"",  note: "Academy Award — Best Original Song · Golden Globe — Best Original Song · #1 Billboard Hot 100", badge: "Film" },
  { title: "Cop Rock",                              year: "1990",      role: "Songs",                                            note: "TV Series · Steven Bochco Production · ABC",                                                      badge: "TV" },
  { title: "Highlander II: The Quickening",         year: "1991",      role: "Producer · Songwriter",                           note: "Feature film · \"It's a Perfect World\" · Lyrics by Norman Gimbel",                              badge: "Film" },
  { title: "Afterburn",                             year: "1992",      role: "Songwriter",                                       note: "TV Movie — \"Johnny Come Back\", \"Nothing Is Worse (Than A Broken Heart)\", \"Roll The Dice\"",   badge: "TV Movie" },
  { title: "Beverly Hills, 90210",                  year: "1992",      role: "Songwriter",                                       note: "TV Series",                                                                                       badge: "TV" },
  { title: "Bringing Up Jack",                      year: "1995",      role: "Composer",                                         note: "TV Series",                                                                                       badge: "TV" },
  { title: "On Seventh Avenue",                     year: "1996",      role: "Composer",                                         note: "TV Movie",                                                                                        badge: "TV Movie" },
  { title: "North Shore Fish",                      year: "1997",      role: "Composer",                                         note: "TV Movie",                                                                                        badge: "TV Movie" },
  { title: "White Lies",                            year: "1997",      role: "Composer",                                         note: "Feature film",                                                                                    badge: "Film" },
  { title: "Chicago Sons",                          year: "1997",      role: "Composer",                                         note: "TV Series",                                                                                       badge: "TV" },
  { title: "The Unknown Cyclist",                   year: "1998",      role: "Composer · Songwriter",                            note: "\"Crossing Over\", \"I'll Remember You\", \"Falling Down on You\", \"Behind the Mask\"",          badge: "Film" },
  { title: "So Weird",                              year: "1999–2001", role: "Composer",                                         note: "TV Series (Disney Channel)",                                                                      badge: "TV" },
  { title: "Popular",                               year: "1999",      role: "Composer",                                         note: "TV Series",                                                                                       badge: "TV" },
  { title: "Brutally Normal",                       year: "2000",      role: "Composer",                                         note: "TV Series",                                                                                       badge: "TV" },
  { title: "The Chronicle",                         year: "2001",      role: "Composer",                                         note: "TV Series",                                                                                       badge: "TV" },
  { title: "Zenon: The Zequel",                     year: "2001",      role: "Composer — \"The Galaxy Is Ours\"",                note: "TV Movie (Disney Channel)",                                                                       badge: "TV Movie" },
  { title: "Jesus, Mary and Joey",                  year: "2003–2004", role: "Composer",                                         note: "Film",                                                                                            badge: "Film" },
  { title: "Jake 2.0",                              year: "2003–2004", role: "Composer",                                         note: "TV Series",                                                                                       badge: "TV" },
  { title: "Alter Ego",                             year: "2005",      role: "Composer",                                         note: "Short film",                                                                                      badge: "Short" },
  { title: "Terminal",                              year: "2007",      role: "Composer",                                         note: "Short film",                                                                                      badge: "Short" },
  { title: "Street Beat: Drumming Below Sea Level", year: "2025",      role: "Creator · Producer · Director",                    note: "New Orleans drumming documentary · Available at streetbeat.video",                               badge: "Doc" },
]

const DISCOGRAPHY = [
  { title: "\"(I've Had) The Time of My Life\"",        artist: "Bill Medley & Jennifer Warnes — Dirty Dancing OST",                                                  year: "1987",    role: "Co-Writer",              badge: "Oscar® Winner" },
  { title: "\"Johnny Come Back\"",                       artist: "Afterburn (TV Movie)",                                                                                year: "1992",    role: "Songwriter",             badge: "Song" },
  { title: "\"Nothing Is Worse (Than A Broken Heart)\"", artist: "Afterburn (TV Movie)",                                                                                year: "1992",    role: "Songwriter",             badge: "Song" },
  { title: "\"Roll The Dice\"",                          artist: "Afterburn (TV Movie)",                                                                                year: "1992",    role: "Songwriter",             badge: "Song" },
  { title: "\"Crossing Over (The Edge of the Sky)\"",    artist: "The Unknown Cyclist",                                                                                 year: "1998",    role: "Songwriter",             badge: "Song" },
  { title: "\"I'll Remember You\"",                      artist: "The Unknown Cyclist",                                                                                 year: "1998",    role: "Songwriter",             badge: "Song" },
  { title: "\"Falling Down on You\"",                    artist: "The Unknown Cyclist",                                                                                 year: "1998",    role: "Songwriter",             badge: "Song" },
  { title: "\"Behind the Mask\"",                        artist: "The Unknown Cyclist",                                                                                 year: "1998",    role: "Songwriter",             badge: "Song" },
  { title: "\"The Galaxy Is Ours\"",                     artist: "Zenon: The Zequel (Disney)",                                                                          year: "2001",    role: "Composer",               badge: "Song" },
  { title: "Decisions",                                  artist: "Bobby Rush feat. Dr. John",                                                                           year: "2014",    role: "Producer · Co-Writer",   badge: "Grammy Nominated" },
  { title: "\"Another Murder in New Orleans\"",          artist: "Bobby Rush feat. Dr. John",                                                                           year: "2014",    role: "Co-Writer (w/ Carl Gustafson)", badge: "Blues Award" },
  { title: "Collaborations",                             artist: "Van Morrison · Taj Mahal · Art Neville · Ivan Neville · Cyril Neville · Shane Theriot",              year: "Various", role: "Producer · Songwriter",  badge: "Studio" },
]

const COLLABORATIONS = [
  { name: "Bill Medley & Jennifer Warnes", context: "Performed \"(I've Had) The Time of My Life\" — co-written by Donald. Academy Award & Golden Globe winner. #1 Billboard Hot 100.", era: "1987" },
  { name: "Bobby Rush",       context: "Producer on Grammy-nominated album Decisions. Co-wrote \"Another Murder in New Orleans\" featuring Dr. John.", era: "2014" },
  { name: "Dr. John",         context: "Collaborated on Bobby Rush's Grammy-nominated album Decisions.", era: "2014" },
  { name: "Van Morrison",     context: "Producer and collaborator across recording projects.", era: "Various" },
  { name: "Taj Mahal",        context: "Producer and collaborator across recording projects.", era: "Various" },
  { name: "Art Neville",      context: "Producer and collaborator, New Orleans.", era: "Various" },
  { name: "Ivan Neville",     context: "Producer and collaborator, New Orleans.", era: "Various" },
  { name: "Cyril Neville",    context: "Producer and collaborator, New Orleans.", era: "Ongoing" },
  { name: "Shane Theriot",    context: "Guitarist and collaborator, New Orleans.", era: "Ongoing" },
  { name: "James Andrews",    context: "New Orleans collaborator and session partner.", era: "Various" },
  { name: "Irvin Mayfield",   context: "New Orleans collaborator and session partner.", era: "Various" },
  { name: "Doug Belote",      context: "New Orleans drummer and host of Street Beat: Drumming Below Sea Level.", era: "2025" },
  { name: "Lee Sklar",        context: "Legendary session bassist — collaborator on recording projects.", era: "Various" },
  { name: "Stephen Bray",     context: "Songwriter and collaborator.", era: "Various" },
]

const TABS = [
  { id: "film",   label: "Film & TV",      icon: Film  },
  { id: "disc",   label: "Discography",    icon: Music },
  { id: "collab", label: "Collaborations", icon: Users },
] as const

type TabId = typeof TABS[number]["id"]

export default function CreditsClient({ posters }: { posters: Record<string, string> }) {
  const [active, setActive] = useState<TabId>("film")

  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      <section className="py-20 px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl text-center sm:text-left">
          <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">Filmography & Discography</Badge>
          <h1 className="font-display text-5xl md:text-6xl text-cream mb-5 leading-tight">
            The Work
            <br />
            <span className="text-gold-gradient italic">Speaks</span>
          </h1>
          <p className="text-mist text-sm max-w-md leading-relaxed">
            Four decades of production credits spanning an Academy Award-winning song, Grammy-nominated records,
            film scores, and landmark collaborations. All credits verified via IMDB and public record.
          </p>
        </div>
      </section>

      {/* ── Hero image + accolades strip ── */}
      <section className="py-10 px-6 border-b border-studio-border/40 bg-studio-black">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row gap-8 items-start">
          {/* Hero image — add donny-studio.jpg or similar to /public/images/ */}
          <div className="relative w-48 shrink-0 aspect-[3/4] rounded-sm border border-studio-border overflow-hidden bg-studio-dark">
            <Image
              src="/images/donny-carol.jpg"
              alt="Donald Markowitz"
              fill
              className="object-cover object-top"
              sizes="192px"
            />
          </div>
          {/* Dirty Dancing poster */}
          <div className="relative w-32 shrink-0 aspect-[2/3] rounded-sm border border-studio-border overflow-hidden bg-studio-dark hidden md:block">
            {posters["Dirty Dancing"] ? (
              <Image
                src={posters["Dirty Dancing"]}
                alt="Dirty Dancing (1987)"
                fill
                className="object-cover"
                sizes="128px"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center p-2">
                <div className="w-6 h-6 rounded-full border border-gold/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                </div>
                <p className="text-mist/35 text-[9px] leading-snug">Dirty Dancing<br />poster</p>
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col gap-3 justify-center">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">Highlights</p>
            {[
              { icon: Award, label: "Academy Award Winner — Best Original Song · \"(I've Had) The Time of My Life\" · April 11, 1988" },
              { icon: Music, label: "Grammy Nominated — Best Blues Album · Bobby Rush, Decisions · 2014" },
              { icon: Film,  label: "Street Beat: Drumming Below Sea Level — Creator · Producer · Director · 2025" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-gold/60 shrink-0" />
                <span className="text-xs text-mist tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky tabs */}
      <div className="sticky top-16 z-30 border-b border-studio-border/40 bg-studio-black/95 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex gap-0">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-4 text-[12px] font-medium tracking-wide uppercase transition-colors border-b-2",
                  active === id ? "border-gold text-gold" : "border-transparent text-mist hover:text-cream"
                )}
              >
                <Icon className="w-3.5 h-3.5" />{label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14">

        {active === "film" && (
          <div className="space-y-3">
            {FILM_TV.map(({ title, year, role, note, badge }, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-studio-border bg-studio-card rounded-sm hover:border-gold/30 transition-all group">
                {posters[title] && (
                  <div className="relative w-10 shrink-0 aspect-[2/3] rounded-sm overflow-hidden border border-studio-border/40 hidden sm:block">
                    <Image src={posters[title]} alt={title} fill className="object-cover" sizes="40px" />
                  </div>
                )}
                <span className="font-mono text-[11px] text-mist/40 pt-0.5 w-20 shrink-0">{year}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 flex-wrap mb-1">
                    <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">{title}</h3>
                    <Badge variant="secondary" className="text-[9px] shrink-0">{badge}</Badge>
                  </div>
                  <p className="text-[11px] tracking-wide uppercase text-gold/50 mb-1">{role}</p>
                  {note && (
                    title === "Street Beat: Drumming Below Sea Level" ? (
                      <p className="text-mist text-xs">
                        New Orleans drumming documentary ·{" "}
                        <a href="https://streetbeat.video" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">streetbeat.video</a>
                      </p>
                    ) : (
                      <p className="text-mist text-xs">{note}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {active === "disc" && (
          <div className="space-y-3">
            {DISCOGRAPHY.map(({ title, artist, year, role, badge }, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-studio-border bg-studio-card rounded-sm hover:border-gold/30 transition-all group">
                <span className="font-mono text-[11px] text-mist/40 pt-0.5 w-16 shrink-0">{year}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 flex-wrap mb-0.5">
                    <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">{title}</h3>
                    <Badge variant="secondary" className="text-[9px] shrink-0">{badge}</Badge>
                  </div>
                  <p className="text-mist text-sm mb-1">{artist}</p>
                  <p className="text-[11px] tracking-wide uppercase text-gold/50">{role}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {active === "collab" && (
          <div className="grid sm:grid-cols-2 gap-4">
            {COLLABORATIONS.map(({ name, context, era }) => (
              <div key={name} className="p-6 border border-studio-border bg-studio-card rounded-sm hover:border-gold/30 transition-all">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display text-xl text-cream">{name}</h3>
                  <span className="font-mono text-[10px] text-mist/40 shrink-0 pt-1">{era}</span>
                </div>
                <Separator className="mb-3" />
                <p className="text-mist text-sm leading-relaxed">{context}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-16">
        <div className="border border-studio-border/40 rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <p className="text-cream text-sm font-medium mb-1">Press & Licensing</p>
            <p className="text-mist text-xs">For press kits, licensing inquiries, or credit verification, please reach out directly.</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">Contact <ArrowRight className="w-3.5 h-3.5" /></Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
