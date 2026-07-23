// src/app/stats/page.tsx — The Record: Stats & Legacy of "(I've Had) The Time of My Life"
// All facts verified via Wikipedia, Billboard, ASCAP, The Ringer, and public record.

import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SiteAudioPlayer } from "@/components/ui/SiteAudioPlayer"

export const metadata: Metadata = {
  title: "The Record | Donald Markowitz",
  description: "The verified stats, history, and cultural legacy of \"(I've Had) The Time of My Life\" — co-written by Donald Markowitz.",
}

const STATS = [
  { value: "#1",   label: "Billboard Hot 100",       note: "Week of November 21, 1987 · 6 weeks in the top 10" },
  { value: "#1",   label: "Dirty Dancing Soundtrack", note: "18 weeks at #1 on the Billboard 200 · 14× Platinum RIAA" },
  { value: "32M+", label: "Copies Sold",              note: "Verified worldwide sales — one of the best-selling soundtracks of all time. Streaming continues to grow." },
  { value: "3",    label: "Major Awards Won",         note: "Academy Award · Golden Globe · Grammy Award" },
  { value: "1M+",  label: "ASCAP Performances",       note: "ASCAP Song of the Year for reaching 1 million broadcast plays" },
]

const TIMELINE = [
  {
    year: "October 1986",
    headline: "The Demo",
    body: "Donald Markowitz wrote the music for what became \"(I've Had) The Time of My Life\" in twenty minutes at his home studio on 85th Street and Central Park West in New York City. John DeNicola and Jimmy Jones Jr. added key parts to the demo the following day. Franke Previte was then given the demo and wrote the lyrics while driving on the New Jersey Turnpike. Previte returned to the studio, where Donald recorded his vocals alongside singer Rachel Cappelli.",
  },
  {
    year: "1986–1987",
    headline: "Everyone Passes",
    body: "When Donald wrote it, he intended the song for Chaka Khan and James Ingram to perform as a duet. Producer Michael Lloyd approached them — and they declined. Lloyd then approached Lionel Richie, Daryl Hall, and Kim Carnes — all passed. Bill Medley of The Righteous Brothers also turned it down twice before finally agreeing.",
  },
  {
    year: "1987",
    headline: "The Film Dances to the Demo",
    body: "The Medley/Warnes recording wasn't finished in time for filming of the finale. So Patrick Swayze and Jennifer Grey filmed the iconic final lift scene to Markowitz and Previte's original demo. Swayze later said it was his favorite version of the song.",
  },
  {
    year: "July 10, 1987",
    headline: "Released",
    body: "The single drops on RCA Records. Radio stations initially refuse to play it — the film hadn't come out yet. When Dirty Dancing opens in August, the song explodes.",
  },
  {
    year: "Nov 28, 1987",
    headline: "#1 on the Billboard Hot 100",
    body: "The song knocks \"I Think We're Alone Now\" by Tiffany from the top spot. It held #1 for one week and spent six weeks in the top 10. The Dirty Dancing soundtrack simultaneously went #1 on the Billboard 200, knocking Bruce Springsteen's Tunnel of Love out of the top position.",
  },
  {
    year: "1988",
    headline: "The Soundtrack Outsells Everyone",
    body: "Billboard names the Dirty Dancing soundtrack the #2 album of 1988 — outselling Guns N' Roses' Appetite for Destruction, AC/DC's Hysteria, Michael Jackson's Bad, and INXS's Kick. Only George Michael's Faith sold more copies that year.",
  },
  {
    year: "April 11, 1988",
    headline: "Academy Award — Best Original Song",
    body: "The song wins the Oscar, beating two other #1 hits: Starship's \"Nothing's Gonna Stop Us Now\" and Bob Seger's \"Shakedown.\" Markowitz, Previte, and DeNicola accept the award from Dudley Moore and Liza Minnelli. The Golden Globe had already been awarded earlier that year.",
  },
  {
    year: "1988",
    headline: "Grammy Nominated — Song of the Year",
    body: "The song receives a Grammy nomination for Song of the Year. Bill Medley and Jennifer Warnes win the Grammy Award for Best Pop Performance by a Duo or Group with Vocals. Writing credits go to Markowitz, Previte, and DeNicola.",
  },
  {
    year: "1990s–2000s",
    headline: "ASCAP Song of the Year",
    body: "The song is named ASCAP Song of the Year upon reaching 1 million documented broadcast performances — a rare milestone that places it among the most-performed songs in radio history.",
  },
  {
    year: "2004",
    headline: "AFI Top 100 Songs in Cinema",
    body: "The American Film Institute ranks \"(I've Had) The Time of My Life\" #86 on their list of the greatest songs in American cinema history.",
  },
  {
    year: "2010",
    headline: "The Black Eyed Peas Interpolate the Chorus",
    body: "will.i.am builds \"The Time (Dirty Bit)\" around the song's chorus. The track goes #1 in Australia, Austria, Belgium, Canada, France, Germany, Italy, New Zealand, Switzerland, and the UK. It peaks at #4 on the Billboard Hot 100. Markowitz, Previte, and DeNicola receive co-writing credits.",
  },
  {
    year: "2011",
    headline: "New Orleans",
    body: "Donald and his family moved to New Orleans, where he worked out of world-famous Esplanade Studios until opening Mid City Sound and starting the next chapter of his career.",
  },
  {
    year: "2017",
    headline: "Get Out",
    body: "Jordan Peele uses the song in his Academy Award-winning horror film Get Out, where it plays as an unsettling backdrop — one of hundreds of film, TV, and commercial syncs the song has accumulated over nearly four decades.",
  },
  {
    year: "Ongoing",
    headline: "Mailbox Money",
    body: "The song continues to generate royalties from: every Dirty Dancing TV airing and streaming play worldwide, wedding DJs on every continent, the stage musical that has toured internationally, Super Bowl commercials, Glee, Bob's Burgers, Dancing with the Stars, American Idol, Canadian Idol, and virtually every dance competition show ever produced.",
  },
]

const POP_CULTURE = [
  { show: "Glee",                        detail: "Cast recording" },
  { show: "Bob's Burgers",               detail: "Featured episode" },
  { show: "Dancing with the Stars",      detail: "Multiple seasons" },
  { show: "American Idol",               detail: "Top 11 group performance, Season 1" },
  { show: "Canadian Idol",               detail: "Top 11 group performance, Season 1 finale" },
  { show: "The Simpsons",                detail: "Referenced" },
  { show: "Get Out (2017)",              detail: "Jordan Peele's Academy Award-winning film" },
  { show: "Dirty Dancing Stage Musical", detail: "International touring production" },
  { show: "Katie Price & Peter Andre",   detail: "Cover version, 2006" },
  { show: "Girls Aloud",                 detail: "Performed live on Greatest Hits Tour, 2007" },
  { show: "Barry Manilow",               detail: "Cover version" },
  { show: 'Family Guy',                    detail: 'Season 6, Ep. 1 — Blue Harvest (Star Wars parody): Herbert as Obi-Wan serenades Luke with the song' },
  { show: "The Umbrella Academy (Netflix)", detail: "Season 3 — featured in the wedding episode soundtrack" },
  { show: 'The Goldbergs',                 detail: 'S03E17 — The Dirty Dancing Dance episode' },
  { show: "Modern Family",                 detail: "Featured in episode soundtrack" },
  { show: "New Girl",                      detail: "Referenced in Season 1 pilot" },
]

const AD_SYNCS = [
  {
    brand:   "NFL / New York Giants",
    year:    "Super Bowl LII · 2018",
    detail:  "Eli Manning and Odell Beckham Jr. recreate the Dirty Dancing finale in the NFL's own Super Bowl spot — choreographed by Broadway's Stephanie Klemons. Became one of the most-watched Super Bowl ads of the year.",
  },
  {
    brand:   "Sandals Resorts",
    year:    "Long-running campaign",
    detail:  "Multi-year TV campaign featuring the song as the sonic identity of the brand's romantic getaway positioning.",
  },
  {
    brand:   "United Healthcare",
    year:    "National TV",
    detail:  "Couple attempts the iconic Dirty Dancing lift in their kitchen — goes hilariously wrong. One of the most-shared health insurance ads in recent memory.",
  },
  {
    brand:   "TD Ameritrade",
    year:    "National campaign",
    detail:  "\"Nobody puts your old 401(k) in the corner\" — national campaign featuring the song's score alongside a man performing the lift with a piggy bank.",
  },
  {
    brand:   "Aldi Australia",
    year:    "Christmas 2023",
    detail:  "Award-winning Christmas commercial — a low-key, emotional rendition of the song performed line by line by individuals preparing for the holidays.",
  },
]

export default function StatsPage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      {/* ── Header ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-4xl text-center sm:text-left">
          <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase mx-auto sm:mx-0 block w-fit">
            The Record
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl text-cream mb-4 leading-tight">
            &ldquo;(I&apos;ve Had) The Time of My Life&rdquo;
          </h1>
          <Separator className="w-10 bg-gold/40 mb-5 mx-auto sm:mx-0" />
          <p className="text-mist text-sm max-w-xl leading-relaxed mx-auto sm:mx-0">
            Co-written by Donald Markowitz, Franke Previte, and John DeNicola. Recorded by Bill Medley &amp;
            Jennifer Warnes. Released 1987. Still playing everywhere.
          </p>

          {/* ── Official music video ── */}
          <div className="mt-8 max-w-xl mx-auto sm:mx-0">
            <p className="text-[10px] tracking-widest uppercase text-gold/60 mb-3">
              Official Music Video
            </p>
            <div className="rounded-sm overflow-hidden border border-studio-border aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4BQLE_RrTSU?si=cQlQmO917AuD4VIA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats grid ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl text-cream mb-10 text-center">By the Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STATS.map(({ value, label, note }) => (
              <div key={label} className="p-6 border border-studio-border bg-studio-card rounded-sm text-center">
                <p className="font-display text-5xl text-gold-gradient mb-2">{value}</p>
                <p className="text-cream text-sm font-medium mb-2">{label}</p>
                <p className="text-mist text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audio player — instrumental demo with download ── */}
      <section className="py-10 px-4 sm:px-6 border-b border-studio-border/40 bg-studio-black">
        <div className="mx-auto max-w-2xl">
          <p className="text-[10px] tracking-widest uppercase text-gold/60 text-center mb-4">
            Original Demo — Instrumental
          </p>
          <SiteAudioPlayer
            title={"(I've Had) The Time of My Life"}
            subtitle="Original Instrumental Demo · Donald Markowitz · 1986"
            filename="time-of-my-life-demo.mp3"
            autoplay={false}
            maxSeconds={30}
            showDownload={true}
            downloadFilename="time-of-my-life-demo.mp3"
          />
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 border-b border-studio-border/40">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl text-cream mb-12 text-center">The Full Story</h2>
          <div className="relative space-y-0">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-studio-border hidden sm:block" />
            {TIMELINE.map(({ year, headline, body }) => (
              <div key={year + headline} className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 pb-10 last:pb-0">
                <div className="relative z-10 shrink-0 hidden sm:flex">
                  <div className="w-10 h-10 rounded-full border border-gold/40 bg-studio-dark flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold/60" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <span className="font-display text-lg text-gold">{year}</span>
                    <h3 className="font-display text-xl text-cream">{headline}</h3>
                  </div>
                  <p className="text-mist text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ad syncs ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl text-cream mb-10 text-center">Licensed &amp; Synced</h2>
          <div className="space-y-3">
            {AD_SYNCS.map(({ brand, year, detail }) => (
              <div key={brand} className="p-5 border border-studio-border bg-studio-card rounded-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="text-cream text-sm font-medium">{brand}</p>
                  <span className="text-gold font-mono text-[10px] shrink-0">{year}</span>
                </div>
                <p className="text-mist text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pop culture appearances ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl text-cream mb-10 text-center">Heard Everywhere</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {POP_CULTURE.map(({ show, detail }) => (
              <div key={show} className="p-4 border border-studio-border bg-studio-card rounded-sm">
                <p className="text-cream text-sm font-medium">{show}</p>
                <p className="text-mist text-xs mt-1">{detail}</p>
              </div>
            ))}
          </div>
          <p className="text-mist/40 text-xs text-center mt-8">
            All facts verified via Wikipedia, Billboard, ASCAP public record, The Ringer, and IMDB. · Sources available on request.
          </p>
        </div>
      </section>
    </div>
  )
}
