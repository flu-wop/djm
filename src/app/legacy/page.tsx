// src/app/legacy/page.tsx — Full career timeline

import type { Metadata } from "next"
import Link              from "next/link"
import { Award, Music, Film, MapPin, ArrowRight, Star } from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title:       "Legacy & Biography",
  description: "The complete career of Donald Markowitz — Academy Award-winning co-writer of (I've Had) The Time of My Life, Grammy-nominated producer, and founder of Mid City Sound Studios in New Orleans.",
}

const TIMELINE = [
  {
    chapter: "Chapter I",
    id:      "new-york",
    era:     "New York City",
    city:    "New York City",
    icon:    Music,
    color:   "text-blue-400/60",
    heading: "Born in New York",
    intro:   "Donald Markowitz was born and raised in New York City — and the city shaped everything that followed.",
    events: [
      {
        year:  "Early Career",
        title: "Bass Player — New York's Legendary Stages",
        body:  "Donald began his career as a bass player, performing with Speedo and the Cadillacs and many other well-known artists of the era. He played the Apollo Theatre, Radio City Music Hall, the Cotton Club, and Roseland Ballroom.",
      },
      {
        year:  "Theatre",
        title: "Arms Akimbo & Sam Shepard",
        body:  "His band Arms Akimbo performed and wrote the music for Sam Shepard's \"The Tooth of Crime\" at the La Mama Theatre in New York. He also composed for the WPA Theatre, the Old Globe in San Diego, and The Falcon Theatre in Los Angeles.",
      },
      {
        year:  "1987",
        title: "Academy Award — \"(I've Had) The Time of My Life\"",
        body:  "Donald co-writes \"(I've Had) The Time of My Life\" with Franke Previte and John DeNicola for the film Dirty Dancing. The song wins the Academy Award for Best Original Song and the Golden Globe Award — performed by Bill Medley and Jennifer Warnes, it reaches #1 on the Billboard Hot 100 and sells over 32 million copies worldwide.",
      },
    ],
  },
  {
    chapter: "Chapter II",
    id:      "hollywood",
    era:     "1988 – 2010",
    city:    "Los Angeles, California",
    icon:    Film,
    color:   "text-amber-400/60",
    heading: "Hollywood & Beyond",
    intro:   "After winning the Oscar, Donald relocated to Los Angeles and spent the next two decades writing songs and scores for film and television.",
    events: [
      {
        year:  "1988–2010",
        title: "Film & Television",
        body:  "Donald spent over twenty years in Hollywood writing songs and scores for film and television — scoring films for producers such as Arthur Cohn, spending five years as a songwriter for the Disney company, and three years working for producer Steven Bochco.",
      },
      {
        year:  "Collaborations",
        title: "Van Morrison, Taj Mahal & More",
        body:  "Over his career, Donald produced, written, and recorded with Van Morrison, Taj Mahal, Bill Medley, and many others — building a reputation as a songwriter and producer who could work fluidly across genres.",
      },
    ],
  },
  {
    chapter: "Chapter III",
    id:      "new-orleans",
    era:     "2011 – Present",
    city:    "New Orleans, Louisiana",
    icon:    Award,
    color:   "text-gold/60",
    heading: "New Orleans & Mid City Sound",
    intro:   "In 2011, Donald and his family moved to the Broadmoor neighborhood of New Orleans. It was never a retirement — it was an elevation.",
    events: [
      {
        year:  "2011",
        title: "Arrival in New Orleans",
        body:  "Donald and his family relocated to the Broadmoor area of New Orleans. The city's unparalleled musical DNA — the second lines, the brass band tradition, the deep funk heritage — drew him immediately into its creative community.",
      },
      {
        year:  "2014",
        title: "Grammy Nomination — Bobby Rush, Decisions",
        body:  "Donald produces Bobby Rush's album Decisions, featuring a duet with Dr. John on the Markowitz co-written song \"Another Murder in New Orleans.\" The album earns a 2014 Grammy Award nomination for Best Blues Album.",
      },
      {
        year:  "Ongoing",
        title: "Mid City Sound Studios & Street Beat",
        body:  "Donald founded Mid City Sound Studios — a world-class recording space in Mid City, New Orleans. He has collaborated with Dr. John, Art Neville, Cyril Neville, Ivan Neville, Bobby Rush, James Andrews, Irvin Mayfield, Shane Theriot, Doug Belote, and many more. He is also the creator of Street Beat: Drumming Below Sea Level, a documentary now available at streetbeat.video.",
      },
    ],
  },
]

const GALLERY_CAPTIONS = [
  ["New York session room", "On stage at the Apollo", "Studio console, NYC"],
  ["Oscar night — Academy Awards, 1988", "LA recording session", "Film & television work"],
  ["New Orleans arrival, 2011", "Bobby Rush sessions", "Mid City Sound Studios"],
]

export default function LegacyPage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      <section className="relative py-28 px-6 overflow-hidden border-b border-studio-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-studio-black via-studio-charcoal to-studio-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_70%_40%,rgba(212,175,119,0.05),transparent)]" />
        <div className="relative mx-auto max-w-5xl">
          <Badge variant="outline" className="mb-6 text-[10px] tracking-widest uppercase">Biography & Legacy</Badge>
          <h1 className="font-display text-6xl md:text-7xl text-cream leading-tight mb-6">
            From Queens
            <br />
            <span className="text-gold-gradient italic">to New Orleans</span>
          </h1>
          <Separator className="w-14 bg-gold/40 mb-8" />
          <p className="text-mist text-base md:text-lg leading-relaxed max-w-xl font-light">
            From New York's stages and studios to an Academy Award, a Grammy nomination, and
            some of New Orleans' most important recordings — the career of Donald Markowitz is,
            above all else, a study in what it means to be devoted to craft.
          </p>
        </div>
      </section>

      {TIMELINE.map(({ chapter, id, era, city, icon: Icon, heading, intro, events }, chapterIdx) => (
        <div key={id} id={id}>
          <section className={[
            "py-20 px-6 border-b border-studio-border/40",
            chapterIdx % 2 === 1 ? "bg-studio-charcoal" : "bg-studio-black",
          ].join(" ")}>
            <div className="mx-auto max-w-5xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-gold/60" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 font-medium">{chapter}</span>
                </div>
                <div className="flex-1 h-px bg-studio-border" />
                <span className="text-[10px] tracking-widest uppercase text-mist/50 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> {city}
                </span>
              </div>

              <div className="grid md:grid-cols-[1fr_360px] gap-14 items-start">
                <div className="space-y-6">
                  <div>
                    <p className="text-gold/60 text-sm tracking-widest uppercase mb-2">{era}</p>
                    <h2 className="font-display text-4xl md:text-5xl text-cream">{heading}</h2>
                  </div>
                  <p className="font-display text-xl text-cream/70 italic font-light leading-relaxed">{intro}</p>

                  <div className="space-y-0 mt-8 relative">
                    <div className="absolute left-5 top-6 bottom-6 w-px bg-studio-border" />
                    {events.map(({ year, title, body }) => (
                      <div key={year} className="relative flex gap-8 pb-10 last:pb-0">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-10 h-10 rounded-full border border-gold/40 bg-studio-dark flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-gold/60" />
                          </div>
                        </div>
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

                <div className="space-y-3">
                  {GALLERY_CAPTIONS[chapterIdx].map((caption, i) => (
                    <div key={i} className="relative aspect-[4/3] bg-studio-dark border border-studio-border rounded-sm overflow-hidden group">
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

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(212,175,119,0.04),transparent)]" />
        <div className="relative mx-auto max-w-2xl text-center space-y-6">
          <div className="flex items-center gap-4 justify-center mb-8">
            {[Star, Star, Star].map((S, i) => <S key={i} className="w-3 h-3 text-gold/40 fill-gold/20" />)}
          </div>
          <p className="font-display text-3xl md:text-4xl text-cream/90 italic font-light leading-relaxed">
            &ldquo;The music has always known where it wanted to go.
            My job has simply been to follow it — and to help others do the same.&rdquo;
          </p>
          <p className="text-mist text-sm tracking-wide">— Placeholder. Replace with a real quote from Donald.</p>
          <Separator className="w-8 bg-gold/30 mx-auto" />
          <div className="flex gap-3 justify-center pt-4">
            <Button asChild>
              <Link href="/credits">View Full Credits <ArrowRight className="w-4 h-4" /></Link>
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
