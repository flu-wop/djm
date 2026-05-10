// src/app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE — donaldmarkowitz.com
//
// Sections:
//   1. Hero          — full-bleed photo + name + defining tagline
//   2. Opening statement — one powerful paragraph, sparse
//   3. Career in numbers — four defining stats
//   4. Chapter previews — three era cards linking to /legacy
//   5. Selected works  — six landmark credit cards
//   6. Pull quote      — Donny in his own words
//   7. Mid City Sound crosslink — seamless bridge to MCS
//   8. Final CTA       — contact / connect
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import Link              from "next/link"
import Image             from "next/image"
import {
  ArrowRight, Film, Music, Award,
  ExternalLink, ChevronDown,
} from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Donald Markowitz | Composer & Producer",
  description:
    "The official site of Donald Markowitz — Academy Award-winning co-writer of (I've Had) The Time of My Life, " +
    "Grammy-nominated producer, and founder of Mid City Sound Studios, New Orleans.",
}

/* ─── Stats ── */
const STATS = [
  { value: "Oscar®", label: "Academy Award\nWinner" },
  { value: "Grammy",  label: "Nominated\nProducer" },
  { value: "40+",    label: "Years in\nthe Industry" },
  { value: "2011",   label: "New Orleans\nSince" },
]

/* ─── Chapter cards — linking to /legacy anchors ── */
const CHAPTERS = [
  {
    era:   "New York City",
    city:  "Bass player · Theatre · Songwriter",
    title: "New York Beginnings",
    body:  "Born and raised in New York City, Donald began as a bass player performing at the Apollo Theatre, Radio City Music Hall, the Cotton Club, and Roseland Ballroom — before co-writing the Academy Award-winning song that would define a generation.",
    href:  "/legacy#new-york",
    icon:  Music,
  },
  {
    era:   "1987 – 2010",
    city:  "Hollywood, Los Angeles",
    title: "The Oscar & Hollywood",
    body:  "Co-writing \"(I've Had) The Time of My Life\" earned Donald the Academy Award and Golden Globe for Best Original Song. He then spent two decades in Los Angeles writing songs and scores for film and television.",
    href:  "/legacy#hollywood",
    icon:  Film,
  },
  {
    era:   "2011 – Present",
    city:  "New Orleans, Louisiana",
    title: "New Orleans & Mid City Sound",
    body:  "In 2011, Donald moved to New Orleans and founded Mid City Sound Studios. He has since produced Grammy-nominated records, collaborated with Van Morrison, Taj Mahal, Dr. John, Art Neville, and created the documentary Street Beat: Drumming Below Sea Level.",
    href:  "/legacy#new-orleans",
    icon:  Award,
  },
]

/* ─── Six landmark credits ── */
const LANDMARK_CREDITS = [
  {
    title:    "\"(I've Had) The Time of My Life\"",
    artist:   "Dirty Dancing — Bill Medley & Jennifer Warnes",
    year:     "1987",
    role:     "Co-Writer",
    badge:    "Academy Award",
  },
  {
    title:    "\"(I've Had) The Time of My Life\"",
    artist:   "Dirty Dancing Soundtrack",
    year:     "1988",
    role:     "Golden Globe — Best Original Song",
    badge:    "Golden Globe",
  },
  {
    title:    "Decisions",
    artist:   "Bobby Rush feat. Dr. John",
    year:     "2014",
    role:     "Producer · Co-writer",
    badge:    "Grammy Nominated",
  },
  {
    title:    "Street Beat",
    artist:   "Drumming Below Sea Level",
    year:     "2025",
    role:     "Creator · Producer · Director",
    badge:    "Documentary",
  },
  {
    title:    "Film & Television Scores",
    artist:   "Hollywood Productions",
    year:     "1988–2010",
    role:     "Composer · Songwriter",
    badge:    "Film & TV",
  },
  {
    title:    "Collaborations",
    artist:   "Van Morrison · Taj Mahal · Dr. John · Art Neville",
    year:     "Ongoing",
    role:     "Producer · Songwriter",
    badge:    "Studio Work",
  },
]

/* ─────────────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 1. HERO                                                            */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">

        {/* ── Background photo placeholder
            Swap with: <Image src="/images/donny-hero.jpg" fill className="object-cover object-top" priority alt="..." />
            Then add gradient overlay below it.
            For now: rich cinematic gradient with warm tones. ── */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0d0c0b] to-[#1a1510]" />

        {/* Warm gold ambient glow — simulates warm studio lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_60%_40%,rgba(212,175,119,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_80%_30%,rgba(180,140,80,0.05),transparent)]" />

        {/* Noise grain */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
          }}
        />

        {/*
          ── PHOTO PLACEHOLDER BOX ──
          When you have Donny's portrait, replace this entire div with:
            <Image
              src="/images/donny-hero.jpg"
              fill
              className="object-cover object-[center_20%]"
              priority
              alt="Donald Markowitz at the console"
            />
          Then set the gradient overlay to: bg-gradient-to-t from-black via-black/60 to-transparent
        */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center opacity-10">
          <div className="text-center text-mist/30 space-y-3">
            <div className="w-48 h-48 border border-studio-border rounded-full mx-auto flex items-center justify-center">
              <span className="font-display text-6xl text-gold/20">DM</span>
            </div>
            <p className="text-xs tracking-widest uppercase">Replace with Donny&apos;s photo</p>
          </div>
        </div>

        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/40 to-transparent" />

        {/* ── Hero text — anchored bottom-left ── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 md:pb-28">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up delay-200"
              style={{ animationFillMode: "forwards" }}
            >
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-gold/80">
                Composer · Producer · New Orleans
              </span>
            </div>

            {/* Name — the statement */}
            <h1
              className="font-display text-6xl sm:text-7xl md:text-8xl text-cream leading-[0.95] mb-6 opacity-0 animate-fade-up delay-300"
              style={{ animationFillMode: "forwards" }}
            >
              Donald
              <br />
              <span className="text-gold-gradient italic">Markowitz</span>
            </h1>

            {/* Tagline */}
            <p
              className="font-display text-xl md:text-2xl text-cream/70 italic font-light leading-relaxed mb-10 opacity-0 animate-fade-up delay-400"
              style={{ animationFillMode: "forwards" }}
            >
              Academy Award winner. Grammy-nominated producer.
              <br className="hidden sm:block" />
              Forty years of music that moves people.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-up delay-600"
              style={{ animationFillMode: "forwards" }}
            >
              <Button size="lg" asChild>
                <Link href="/legacy">
                  The Full Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/credits">View Credits</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-mist/30 animate-bounce">
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 2. OPENING STATEMENT                                              */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-studio-charcoal border-y border-studio-border/40">
        <div className="mx-auto max-w-3xl text-center">
          <Separator className="w-8 bg-gold/40 mx-auto mb-10" />
          <p className="font-display text-2xl md:text-3xl text-cream/90 italic font-light leading-relaxed">
            &ldquo;He doesn&apos;t just produce records — he composes moments that
            people carry with them for the rest of their lives.&rdquo;
          </p>
          <p className="text-mist text-sm mt-6 tracking-wide">
            — Industry peer (placeholder — swap with real attribution)
          </p>
          <Separator className="w-8 bg-gold/40 mx-auto mt-10" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 3. CAREER IN NUMBERS                                              */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-studio-border rounded-sm overflow-hidden">
            {STATS.map(({ value, label }, i) => (
              <div
                key={value}
                className={[
                  "p-8 text-center",
                  i < STATS.length - 1 ? "border-r border-studio-border" : "",
                  "border-b border-studio-border md:border-b-0",
                  i >= 2 ? "border-b-0" : "",
                ].join(" ")}
              >
                <p className="font-display text-4xl md:text-5xl text-gold-gradient mb-3">{value}</p>
                <p className="text-mist text-xs leading-snug uppercase tracking-widest whitespace-pre-line">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 4. CAREER CHAPTERS                                                */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-studio-charcoal border-y border-studio-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
              A Life in Music
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Three chapters.
              <br />
              <span className="italic text-gold-gradient">One extraordinary career.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {CHAPTERS.map(({ era, city, title, body, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="group block p-7 border border-studio-border bg-studio-card rounded-sm hover:border-gold/50 transition-all card-lift"
              >
                {/* Era badge */}
                <div className="flex items-center gap-2 mb-5">
                  <Icon className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors" />
                  <span className="text-[10px] tracking-[0.15em] uppercase text-mist/70">{era}</span>
                </div>

                <p className="text-[10px] tracking-widest uppercase text-gold/50 mb-2">{city}</p>
                <h3 className="font-display text-2xl text-cream mb-3 group-hover:text-gold transition-colors">
                  {title}
                </h3>
                <p className="text-mist text-sm leading-relaxed mb-5">{body}</p>

                <div className="flex items-center gap-1.5 text-[11px] text-gold/50 group-hover:text-gold transition-colors">
                  <span>Read more</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/legacy">
                Full Biography & Timeline
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 5. SELECTED WORKS                                                 */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <Badge variant="outline" className="mb-3 text-[10px] tracking-widest uppercase">
                Selected Works
              </Badge>
              <h2 className="font-display text-4xl text-cream">Landmark credits</h2>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/credits" className="text-mist hover:text-gold">
                Full discography <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LANDMARK_CREDITS.map(({ title, artist, year, role, badge }) => (
              <div
                key={`${title}-${year}`}
                className="group p-5 border border-studio-border bg-studio-card rounded-sm hover:border-gold/30 transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <Badge variant="secondary" className="text-[9px] tracking-wide shrink-0">
                    {badge}
                  </Badge>
                  <span className="font-mono text-[10px] text-mist/50">{year}</span>
                </div>
                <h3 className="font-display text-lg text-cream mb-0.5 leading-snug">{title}</h3>
                <p className="text-mist text-xs mb-3">{artist}</p>
                <p className="text-[11px] tracking-wide text-gold/60 uppercase">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 6. PULL QUOTE — Donny in his own words                           */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 relative overflow-hidden border-y border-studio-border/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(212,175,119,0.04),transparent)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Decorative open-quote */}
          <p className="font-display text-[120px] leading-none text-gold/10 select-none -mb-8">&ldquo;</p>
          <blockquote className="font-display text-3xl md:text-4xl text-cream/90 italic font-light leading-relaxed">
            Every session is a conversation between where music has been
            and where it needs to go. My job is to hold that space open.
          </blockquote>
          <p className="text-gold text-sm mt-8 tracking-widest uppercase">Donald Markowitz</p>
          <Separator className="w-10 bg-gold/30 mx-auto mt-8" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 7. MID CITY SOUND CROSSLINK                                       */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-studio-charcoal border-b border-studio-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="border border-studio-border/60 rounded-sm overflow-hidden">
            <div className="grid md:grid-cols-2">

              {/* Text side */}
              <div className="p-10 space-y-5">
                <Badge variant="outline" className="text-[10px] tracking-widest uppercase">
                  Mid City Sound Studios
                </Badge>
                <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight">
                  The studio where
                  <br />
                  <span className="text-gold-gradient italic">legacy meets now</span>
                </h2>
                <p className="text-mist text-sm leading-relaxed">
                  Founded by Donald in New Orleans' Mid City neighborhood, Mid City Sound Studios
                  is a world-class recording space built on decades of award-winning expertise.
                  Book a session, explore current projects, and step into the room.
                </p>
                <div className="flex gap-3 pt-2">
                  <Button asChild>
                    <Link href="https://midcitysound.com" target="_blank" rel="noopener noreferrer">
                      Visit Mid City Sound
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/studio">Studio Info</Link>
                  </Button>
                </div>
              </div>

              {/* Logo side */}
              <div className="bg-studio-dark border-l border-studio-border/40 flex items-center justify-center p-10">
                <div className="relative w-full max-w-[280px] h-[90px]">
                  <Image
                    src="/images/logo-secondary.jpg"
                    alt="Mid City Sound Studios"
                    fill
                    className="object-contain"
                    sizes="280px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 8. FINAL CTA                                                      */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-5">
            Work with
            <br />
            <span className="text-gold-gradient italic">a legend</span>
          </h2>
          <p className="text-mist text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Studio sessions, production consultations, orchestral arrangements —
            reach out and let&apos;s discuss your project.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
