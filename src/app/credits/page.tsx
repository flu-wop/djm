// src/app/credits/page.tsx — Donald Markowitz Film & Music Credits
// Movie poster sits alongside credits in a two-column layout

import type { Metadata } from "next"
import Link              from "next/link"
import Image             from "next/image"
import { Award, ArrowRight, Film } from "lucide-react"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button }    from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Credits | Donald Markowitz",
  description: "Film and music credits for Donald Markowitz — Academy Award winner, producer, and songwriter.",
}

const FILM_CREDITS = [
  { role: "Executive Producer", title: "Street Beat: Drumming Below Sea Level", year: "2025", type: "Documentary" },
  { role: "Producer",           title: "Various Recording Projects",            year: "2018–Present", type: "Music" },
]

const ACCOLADES = [
  { award: "Academy Award",   category: "Best Original Song Score",       year: "1984",      note: "Winner" },
  { award: "Grammy Nomination", category: "Best Original Song",           year: "Various",   note: "Nominated" },
]

const COLLABORATIONS = [
  { name: "Taj Mahal",       context: "Studio recording, New Orleans" },
  { name: "Van Morrison",    context: "Studio recording, New Orleans" },
  { name: "Irma Thomas",     context: "Studio session, Mid City Sound" },
  { name: "Cyril Neville",   context: "Studio session, Mid City Sound" },
  { name: "Art Neville",     context: "Recording session" },
  { name: "Allen Toussaint", context: "New Orleans collaboration" },
  { name: "Dr. John",        context: "Studio session" },
  { name: "Bobby Rush",      context: "Studio session" },
  { name: "James Taylor",    context: "Backstage collaboration" },
  { name: "Branden Lewis",   context: "New Orleans artist" },
]

export default function CreditsPage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      {/* Page header */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-6xl">
          <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
            <Film className="w-3 h-3 mr-1.5" />
            Filmography & Credits
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl text-cream mb-4 leading-tight">
            The Work
          </h1>
          <p className="text-mist text-sm max-w-lg leading-relaxed">
            A record of the films, recordings, and collaborations that define five decades
            of creative work.
          </p>
        </div>
      </section>

      {/* ── Main: poster + credits side by side ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-[320px_1fr] gap-10 md:gap-16 items-start">

            {/* Left: Streetbeat poster + film info */}
            <div className="space-y-6">
              <div className="relative aspect-[2/3] overflow-hidden rounded-sm border border-studio-border group">
                <Image
                  src="/images/movie-poster.png"
                  alt="Street Beat: Drumming Below Sea Level — Official Poster"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="320px"
                />
              </div>

              <div className="space-y-3">
                <p className="text-gold text-[10px] tracking-[0.25em] uppercase">Featured Film</p>
                <h2 className="font-display text-2xl text-cream leading-tight">
                  Street Beat:<br />
                  <span className="text-gold-gradient italic">Drumming Below Sea Level</span>
                </h2>
                <Separator className="w-10 bg-gold/40" />
                <div className="space-y-2 text-xs text-mist">
                  <div className="flex justify-between">
                    <span className="text-mist/60 uppercase tracking-wider text-[10px]">Role</span>
                    <span className="text-cream">Executive Producer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist/60 uppercase tracking-wider text-[10px]">Year</span>
                    <span className="text-cream">2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist/60 uppercase tracking-wider text-[10px]">Runtime</span>
                    <span className="text-cream">54 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist/60 uppercase tracking-wider text-[10px]">Produced by</span>
                    <span className="text-cream text-right max-w-[160px]">Mid City Sound, Fire on the Bayou, Doreja Productions</span>
                  </div>
                </div>
                <Button asChild className="w-full mt-2">
                  <Link href="https://streetbeat.video" target="_blank" rel="noopener noreferrer">
                    Watch the Film
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Accolades + Collaborations */}
            <div className="space-y-12">

              {/* Accolades */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <Award className="w-4 h-4 text-gold/60" />
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold/60">Accolades</p>
                </div>
                <div className="space-y-4">
                  {ACCOLADES.map(({ award, category, year, note }) => (
                    <div key={award} className="flex items-start justify-between gap-4 border-b border-studio-border/50 pb-4">
                      <div>
                        <p className="text-cream text-sm font-medium">{award}</p>
                        <p className="text-mist text-xs mt-0.5">{category}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-gold text-xs tracking-wide">{note}</p>
                        <p className="text-mist/50 text-[10px] mt-0.5">{year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="bg-studio-border/40" />

              {/* Notable collaborations */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold/60">Notable Collaborations</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COLLABORATIONS.map(({ name, context }) => (
                    <div key={name} className="px-4 py-3 border border-studio-border rounded-sm bg-studio-card">
                      <p className="text-cream text-sm">{name}</p>
                      <p className="text-mist/60 text-[10px] tracking-wide mt-0.5">{context}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="bg-studio-border/40" />

              {/* Additional credits context */}
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-4">About This Career</p>
                <p className="text-mist text-sm leading-relaxed max-w-lg">
                  Donald Markowitz has spent five decades at the intersection of film, music, and New Orleans culture.
                  His work as a producer, songwriter, and creative collaborator has placed him in rooms with some
                  of the most celebrated artists in American music history.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/about">Biography</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/legacy">Legacy</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
