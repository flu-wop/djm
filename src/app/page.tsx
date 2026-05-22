// src/app/legacy/page.tsx — Full career timeline with real photos
// Chapter I  (NYC):        donny-on-stairs.JPG, young-donny.jpg, oscar-image.JPG
// Chapter II (Hollywood):  oscar-image.JPG, james-taylor.jpg, allen-toussaint.jpg
// Chapter III (NOLA):      cyril-neville.jpeg, irma-thomas.jpeg, fqf.jpeg

import type { Metadata } from "next"
import Link              from "next/link"
import Image             from "next/image"
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
    photos: [
      { file: "donny-on-stairs.JPG",  alt: "Young Donald Markowitz",          caption: "Early Years",          position: "object-center" },
      { file: "young-donny.jpg",       alt: "Donald Markowitz, New York",      caption: "New York Beginnings",  position: "object-top" },
      { file: "oscar-image.JPG",       alt: "Academy Awards ceremony",         caption: "Academy Award, 1988",  position: "object-center" },
    ],
  },
  {
    chapter: "Chapter II",
    id:      "hollywood",
    era:     "1988 – 2010",
    city:    "Los Angeles, California",
    icon:    Film,
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
    photos: [
      { file: "oscar-image.JPG",             alt: "Academy Awards",                    caption: "Oscar Night, 1988",       position: "object-center" },
      { file: "james-taylor.jpg",            alt: "Donald Markowitz with James Taylor", caption: "With James Taylor",       position: "object-top" },
      { file: "allen-toussaint.jpg",         alt: "Donald with Allen Toussaint",        caption: "With Allen Toussaint",    position: "object-top" },
    ],
  },
  {
    chapter: "Chapter III",
    id:      "new-orleans",
    era:     "2011 – Present",
    city:    "New Orleans, Louisiana",
    icon:    Award,
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
    photos: [
      { file: "cyril-neville.jpeg",  alt: "Donald with Cyril Neville at Mid City Sound", caption: "With Cyril Neville",    position: "object-top" },
      { file: "irma-thomas.jpeg",    alt: "Donald with Irma Thomas",                      caption: "With Irma Thomas",     position: "object-top" },
      { file: "fqf.jpeg",            alt: "Performing at French Quarter Festival",         caption: "French Quarter Fest",  position: "object-[center_30%]" },
    ],
  },
]

export default function LegacyPage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      <section className="relative py-28 px-6 overflow-hidden border-b border-studio-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-studio-black via-studio-charcoal to-studio-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_70%_40%,rgba(212,175,119,0.05),transparent)]" />
        <div className="relative mx-auto max-w-5xl">
          <Badge variant="outline" className="mb-6 text-[10px] tracking-widest uppercase">Biography & Legacy</Badge>
          <h1 className="font-display text-6xl md:text-7xl text-cream leading-tight mb-6 text-center sm:text-left">
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

      {TIMELINE.map(({ chapter, id, era, city, icon: Icon, heading, intro, events, photos }, chapterIdx) => (
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
                <div className="space-y-6 text-center sm:text-left">
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

                {/* Real photos column */}
                <div className="space-y-3">
                  {photos.map(({ file, alt, caption, position }) => (
                    <div key={file} className="relative aspect-[4/3] border border-studio-border rounded-sm overflow-hidden group">
                      <Image
                        src={`/images/${file}`}
                        alt={alt}
                        fill
                        className={`object-cover ${position} transition-transform duration-700 group-hover:scale-105`}
                        sizes="360px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-studio-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-[10px] tracking-wide text-cream/70">{caption}</p>
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
          <p className="text-gold text-sm mt-8 tracking-widest uppercase">Donald Markowitz</p>
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
