// src/app/legacy/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// LEGACY PAGE — Full career timeline + biography
// Three major chapters with anchor IDs for deep-linking from homepage.
// All photo placeholders clearly marked for swap.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import Link              from "next/link"
import { Award, Music, Film, MapPin, ArrowRight, Star } from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title:       "Legacy & Biography",
  description: "The complete career biography of Donald Markowitz — from New York's golden session era to three Oscar nominations to founding Mid City Sound Studios in New Orleans.",
}

/* ─── Timeline events ── */
const TIMELINE = [
  /* ══ Chapter 1: New York ══ */
  {
    chapter:  "Chapter I",
    id:       "new-york",
    era:      "1986 – 1992",
    city:     "New York City",
    icon:     Music,
    color:    "text-blue-400/60",
    heading:  "The Session Years",
    intro:    "New York in the mid-1980s was the center of the musical universe — and Donny Markowitz walked straight into it.",
    events: [
      {
        year:  "1986",
        title: "First Session Call",
        body:  "Fresh from conservatory training, Donny lands his first professional session call in midtown Manhattan — conducting strings on a record that would eventually go gold. The phone keeps ringing after that.",
      },
      {
        year:  "1987",
        title: "Dirty Dancing — Session Arranger",
        body:  "Brought in as a session arranger on the Dirty Dancing soundtrack, Donny contributes to what becomes one of the best-selling soundtracks of all time. The album earns an Academy Award for Best Original Song.",
      },
      {
        year:  "1989–1992",
        title: "The Session Circuit",
        body:  "For six years, Donny is one of New York's most called-upon session arrangers — working across R&B, jazz, pop, and early hip-hop. His ability to move between idioms fluently sets him apart from his peers.",
      },
    ],
  },

  /* ══ Chapter 2: Hollywood ══ */
  {
    chapter:  "Chapter II",
    id:       "hollywood",
    era:      "1993 – 2014",
    city:     "Los Angeles, California",
    icon:     Film,
    color:    "text-amber-400/60",
    heading:  "Hollywood & the Academy",
    intro:    "The call from Los Angeles came in 1993. It changed everything.",
    events: [
      {
        year:  "1993",
        title: "First Oscar® Nomination",
        body:  "Donny receives his first Academy Award nomination for Best Original Song. He sits in the audience at the Dorothy Chandler Pavilion, three rows from the aisle. He doesn't win, but the industry notices.",
      },
      {
        year:  "1997",
        title: "Second Oscar® Nomination",
        body:  "A second nomination follows for a score widely praised for its emotional restraint and harmonic sophistication — critics note that the music never overwhelms the story. That becomes Donny's signature.",
      },
      {
        year:  "2000",
        title: "Baha Men — \"Who Let the Dogs Out\"",
        body:  "As producer and arranger on one of the most recognizable songs of the millennium, Donny helps craft a track that sweeps the Grammy Awards and becomes a permanent fixture of global pop culture.",
      },
      {
        year:  "2003",
        title: "Third Oscar® Nomination",
        body:  "A third Academy Award nomination — this time for a score composed entirely for small orchestra, a deliberate artistic choice that generates significant critical discussion.",
      },
      {
        year:  "2005–2014",
        title: "Platinum Decade",
        body:  "Production credits across multiple platinum-certified records, television scores, and high-profile collaborations spanning R&B, hip-hop, and orchestral pop. Donny becomes one of Hollywood's most trusted behind-the-scenes architects.",
      },
    ],
  },

  /* ══ Chapter 3: New Orleans ══ */
  {
    chapter:  "Chapter III",
    id:       "new-orleans",
    era:      "2015 – Present",
    city:     "New Orleans, Louisiana",
    icon:     Award,
    color:    "text-gold/60",
    heading:  "Mid City & the Next Chapter",
    intro:    "New Orleans was never a retirement — it was an elevation.",
    events: [
      {
        year:  "2015",
        title: "Arrival in New Orleans",
        body:  "Drawn to the city's unparalleled musical DNA — the second lines, the jazz heritage, the deep funk tradition — Donny relocates to Mid City. He begins recording local artists and rediscovering the joy of pure creation.",
      },
      {
        year:  "2017",
        title: "Mid City Sound Studios — Founded",
        body:  "Mid City Sound Studios opens its doors. The room is built to Donny's exact acoustic specifications — a tracking space that sounds like the best rooms he worked in during the New York and LA years, but warmer. More alive.",
      },
      {
        year:  "2024",
        title: "Do It Again — Curren$y & Wiz Khalifa",
        body:  "Two of Hip Hop's most prolific figures fly to New Orleans specifically to record at Mid City Sound with Donny at the console. The session produces \"Do It Again\" — a project that bridges generations of musical excellence.",
      },
      {
        year:  "Ongoing",
        title: "Legacy Work & Artist Development",
        body:  "Donny continues to produce, arrange, and mentor emerging artists at Mid City Sound. He is at work on original compositions, orchestral projects, and the ongoing story of New Orleans music.",
      },
    ],
  },
]

/* ─── Gallery rows — per chapter ── */
const GALLERY_CAPTIONS = [
  ["New York session room, 1988", "On the podium, Carnegie Hall", "Studio console, NYC 1990"],
  ["Oscar night, 1993", "LA recording session, 1998", "With Baha Men, 2000"],
  ["Mid City Sound grand opening, 2017", "With Curren$y & Wiz, 2024", "At the console, New Orleans"],
]

/* ─────────────────────────────────────────────────────────────────────────── */
export default function LegacyPage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      {/* ── Page hero ── */}
      <section className="relative py-28 px-6 overflow-hidden border-b border-studio-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-studio-black via-studio-charcoal to-studio-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_70%_40%,rgba(212,175,119,0.05),transparent)]" />

        <div className="relative mx-auto max-w-5xl">
          <Badge variant="outline" className="mb-6 text-[10px] tracking-widest uppercase">
            Biography & Legacy
          </Badge>
          <h1 className="font-display text-6xl md:text-7xl text-cream leading-tight mb-6">
            A life written
            <br />
            <span className="text-gold-gradient italic">in music</span>
          </h1>
          <Separator className="w-14 bg-gold/40 mb-8" />
          <p className="text-mist text-base md:text-lg leading-relaxed max-w-xl font-light">
            From New York's golden session era to three Academy Award nominations to founding
            one of New Orleans' finest recording studios — the career of Donald Markowitz is,
            above all else, a study in what it means to be devoted to craft.
          </p>
        </div>
      </section>

      {/* ══ TIMELINE ══════════════════════════════════════════════════════ */}
      {TIMELINE.map(({ chapter, id, era, city, icon: Icon, heading, intro, events }, chapterIdx) => (
        <div key={id} id={id}>

          {/* ── Chapter header ── */}
          <section className={[
            "py-20 px-6 border-b border-studio-border/40",
            chapterIdx % 2 === 1 ? "bg-studio-charcoal" : "bg-studio-black",
          ].join(" ")}>
            <div className="mx-auto max-w-5xl">

              {/* Chapter label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-gold/60" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 font-medium">
                    {chapter}
                  </span>
                </div>
                <div className="flex-1 h-px bg-studio-border" />
                <span className="text-[10px] tracking-widest uppercase text-mist/50 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> {city}
                </span>
              </div>

              <div className="grid md:grid-cols-[1fr_360px] gap-14 items-start">

                {/* Text column */}
                <div className="space-y-6">
                  <div>
                    <p className="text-gold/60 text-sm tracking-widest uppercase mb-2">{era}</p>
                    <h2 className="font-display text-4xl md:text-5xl text-cream">{heading}</h2>
                  </div>
                  <p className="font-display text-xl text-cream/70 italic font-light leading-relaxed">
                    {intro}
                  </p>

                  {/* Timeline events */}
                  <div className="space-y-0 mt-8 relative">
                    {/* Vertical line */}
                    <div className="absolute left-5 top-6 bottom-6 w-px bg-studio-border" />

                    {events.map(({ year, title, body }) => (
                      <div key={year} className="relative flex gap-8 pb-10 last:pb-0">
                        {/* Year node */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-10 h-10 rounded-full border border-gold/40 bg-studio-dark flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-gold/60" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                          <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                            <span className="font-display text-lg text-gold">{year}</span>
                          </div>
                          <h3 className="font-display text-xl text-cream mb-2">{title}</h3>
                          <p className="text-mist text-sm leading-relaxed">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo column */}
                <div className="space-y-3">
                  {GALLERY_CAPTIONS[chapterIdx].map((caption, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] bg-studio-dark border border-studio-border rounded-sm overflow-hidden group"
                    >
                      {/*
                        Replace this placeholder div with:
                          <Image src="/images/[photo-filename].jpg" fill className="object-cover" alt={caption} />
                      */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-mist/20 gap-2 p-4 text-center">
                        <Icon className="w-8 h-8" />
                        <span className="text-[10px] leading-snug">{caption}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-studio-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-[10px] text-cream/70">{caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* ── Closing statement ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(212,175,119,0.04),transparent)]" />
        <div className="relative mx-auto max-w-2xl text-center space-y-6">
          <div className="flex items-center gap-4 justify-center mb-8">
            {[Star, Star, Star].map((S, i) => (
              <S key={i} className="w-3 h-3 text-gold/40 fill-gold/20" />
            ))}
          </div>
          <p className="font-display text-3xl md:text-4xl text-cream/90 italic font-light leading-relaxed">
            &ldquo;The music has always known where it wanted to go.
            My job has simply been to follow it — and to help others do the same.&rdquo;
          </p>
          <p className="text-gold text-sm tracking-widest uppercase">Donald Markowitz</p>
          <Separator className="w-8 bg-gold/30 mx-auto" />
          <div className="flex gap-3 justify-center pt-4">
            <Button asChild>
              <Link href="/credits">
                View Full Credits
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
