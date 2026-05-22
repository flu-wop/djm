// src/app/page.tsx — Donald Markowitz
// Hero: donny-live.jpg
// Collaborators: editorial "In the Room" grid
// Legacy: timeline with archival + Oscar moment

import type { Metadata } from "next"
import Link              from "next/link"
import Image             from "next/image"
import { ArrowRight, Award, Music, Film, ChevronDown } from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Donald Markowitz | Producer · Songwriter · Academy Award Winner",
  description:
    "Donald Markowitz — Grammy-nominated, Academy Award-winning producer and songwriter. " +
    "Five decades of music from New Orleans to Hollywood.",
  openGraph: {
    images: [{ url: "/images/donny-live.jpg", width: 1280, height: 853 }],
  },
}

const COLLABORATORS = [
  {
    name: "Taj Mahal & Van Morrison",
    file: "taj-mahal-van-morrison.jpg",
    caption: "In the studio",
    span: "col-span-2 row-span-2",
  },
  {
    name: "Irma Thomas",
    file: "irma-thomas.jpeg",
    caption: "The Soul Queen of New Orleans",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Cyril Neville",
    file: "cyril-neville.jpeg",
    caption: "At Mid City Sound",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Dr. John & Bobby Rush",
    file: "dr-john-bobby-rush.jpg",
    caption: "Studio session",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Allen Toussaint",
    file: "allen-toussaint.jpg",
    caption: "NOLA royalty",
    span: "col-span-1 row-span-1",
  },
  {
    name: "James Taylor",
    file: "james-taylor.jpg",
    caption: "Backstage",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Art Neville",
    file: "art-neville.jpg",
    caption: "A founding member of The Meters",
    span: "col-span-1 row-span-1",
  },
]

const TIMELINE = [
  {
    era: "Early Years",
    label: "The Beginning",
    desc: "Growing up immersed in music, Donny found his voice as a songwriter and performer before making his way to the industry.",
    img: "donny-on-stairs.JPG",
    alt: "Young Donald Markowitz",
  },
  {
    era: "The Craft",
    label: "Guitar & Bass",
    desc: "A multi-instrumentalist at heart — from the earliest sessions to stages across the country.",
    img: "young-donny-guitar.JPG",
    alt: "Donald Markowitz playing guitar",
  },
  {
    era: "Hollywood",
    label: "Academy Award",
    desc: "Donald Markowitz's work earned him an Academy Award — one of the music industry's highest honors.",
    img: "oscar-image.JPG",
    alt: "Donald Markowitz at the Academy Awards",
    featured: true,
  },
  {
    era: "New Orleans",
    label: "French Quarter Fest",
    desc: "Returning to the city that feeds the soul — performing live on the French Quarter Festival stage.",
    img: "fqf.jpeg",
    alt: "Donald Markowitz performing at French Quarter Festival",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 1. HERO                                                        */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">

        <Image
          src="/images/donny-live.jpg"
          alt="Donald Markowitz performing live"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-studio-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_90%,rgba(212,175,119,0.10),transparent)]" />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")` }}
        />

        {/* Letterbox */}
        <div className="absolute top-0 inset-x-0 h-5 bg-studio-black z-10" />
        <div className="absolute bottom-0 inset-x-0 h-5 bg-studio-black z-10" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-2xl">

            <div
              className="flex items-center gap-3 mb-5 opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <div className="w-8 h-px bg-gold/60 hidden sm:block" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-gold/80 font-sans">
                Producer · Songwriter · Academy Award Winner
              </span>
            </div>

            <h1
              className="font-display mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              <span className="block text-[clamp(52px,8vw,100px)] text-cream leading-[0.9]">
                Donald
              </span>
              <span className="block text-[clamp(52px,8vw,100px)] text-gold-gradient italic leading-[0.9]">
                Markowitz
              </span>
            </h1>

            <p
              className="text-mist text-base md:text-lg max-w-md leading-relaxed mb-8 font-light opacity-0 animate-fade-up"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              Five decades of music. From the stages of New York to the studios of New Orleans —
              a career built on craft, collaboration, and the pursuit of the perfect sound.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-up items-center sm:items-start"
              style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-gold text-studio-black text-[13px] font-semibold tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors"
              >
                About Donald
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/groove"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 border border-cream/30 text-cream text-[13px] font-medium tracking-wide uppercase rounded-sm hover:border-gold/60 hover:text-gold transition-colors"
              >
                <Music className="w-4 h-4" />
                Listen
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 text-mist/30 flex flex-col items-center gap-1.5">
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 2. IN THE ROOM — Editorial collaborators grid                  */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-studio-black border-t border-studio-border/40">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
                In the Room
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
                The Company<br />
                <span className="text-gold-gradient italic">He Keeps</span>
              </h2>
            </div>
            <p className="text-mist text-sm max-w-xs leading-relaxed sm:text-right">
              A career measured in the rooms you earn your way into — and the legends
              who keep inviting you back.
            </p>
          </div>

          {/* Asymmetric editorial grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px] md:auto-rows-[240px]">

            {/* Feature: Taj Mahal + Van Morrison — large */}
            <div className="relative col-span-2 row-span-2 group overflow-hidden rounded-sm">
              <Image
                src="/images/taj-mahal-van-morrison.jpg"
                alt="Donald Markowitz with Taj Mahal and Van Morrison"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-1">In the Studio</p>
                <p className="text-cream font-display text-xl leading-tight">
                  Taj Mahal<br />& Van Morrison
                </p>
              </div>
            </div>

            {/* Irma Thomas */}
            <div className="relative group overflow-hidden rounded-sm">
              <Image
                src="/images/irma-thomas.jpeg"
                alt="Donald Markowitz with Irma Thomas"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-3">
                <p className="text-gold text-[9px] tracking-widest uppercase mb-0.5">Soul Queen of NOLA</p>
                <p className="text-cream text-sm font-medium">Irma Thomas</p>
              </div>
            </div>

            {/* Cyril Neville */}
            <div className="relative group overflow-hidden rounded-sm">
              <Image
                src="/images/cyril-neville.jpeg"
                alt="Donald Markowitz with Cyril Neville"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-3">
                <p className="text-gold text-[9px] tracking-widest uppercase mb-0.5">The Neville Brothers</p>
                <p className="text-cream text-sm font-medium">Cyril Neville</p>
              </div>
            </div>

            {/* Dr. John + Bobby Rush */}
            <div className="relative group overflow-hidden rounded-sm">
              <Image
                src="/images/dr-john-bobby-rush.jpg"
                alt="Donald Markowitz with Dr. John and Bobby Rush"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-3">
                <p className="text-gold text-[9px] tracking-widest uppercase mb-0.5">Studio Session</p>
                <p className="text-cream text-sm font-medium">Dr. John & Bobby Rush</p>
              </div>
            </div>

            {/* Allen Toussaint */}
            <div className="relative group overflow-hidden rounded-sm">
              <Image
                src="/images/allen-toussaint.jpg"
                alt="Donald Markowitz with Allen Toussaint"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-3">
                <p className="text-gold text-[9px] tracking-widest uppercase mb-0.5">NOLA Royalty</p>
                <p className="text-cream text-sm font-medium">Allen Toussaint</p>
              </div>
            </div>

            {/* James Taylor */}
            <div className="relative group overflow-hidden rounded-sm">
              <Image
                src="/images/james-taylor.jpg"
                alt="Donald Markowitz with James Taylor"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-3">
                <p className="text-gold text-[9px] tracking-widest uppercase mb-0.5">Backstage</p>
                <p className="text-cream text-sm font-medium">James Taylor</p>
              </div>
            </div>

            {/* Art Neville — spans 2 on desktop for balance */}
            <div className="relative col-span-2 group overflow-hidden rounded-sm">
              <Image
                src="/images/art-neville.jpg"
                alt="Donald Markowitz with Art Neville"
                fill
                className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-gold text-[9px] tracking-widest uppercase mb-0.5">Founding Member, The Meters</p>
                <p className="text-cream font-display text-lg">Art Neville</p>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-mist hover:text-gold transition-colors text-sm tracking-wide"
            >
              Full biography
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 3. LEGACY TIMELINE                                             */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-studio-charcoal border-t border-studio-border/40">
        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center sm:text-left">
            <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
              The Journey
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Five Decades,<br />
              <span className="text-gold-gradient italic">One Sound</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map(({ era, label, desc, img, alt, featured }) => (
              <div
                key={era}
                className={`relative group overflow-hidden rounded-sm border ${featured ? "border-gold/40" : "border-studio-border"} bg-studio-card`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={`/images/${img}`}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {featured && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="flex items-center gap-1.5 bg-gold/90 px-2.5 py-1 rounded-sm">
                        <Award className="w-3 h-3 text-studio-black" />
                        <span className="text-[9px] font-bold tracking-widest uppercase text-studio-black">Academy Award</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-black/80 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-[9px] tracking-[0.25em] uppercase text-gold/70 mb-1.5">{era}</p>
                  <h3 className="font-display text-lg text-cream mb-2">{label}</h3>
                  <Separator className="w-8 bg-gold/30 mb-3" />
                  <p className="text-mist text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:justify-start">
            <Link
              href="/legacy"
              className="inline-flex items-center gap-2 h-10 px-6 border border-studio-border text-mist text-[12px] tracking-widest uppercase rounded-sm hover:border-gold/60 hover:text-gold transition-colors"
            >
              Full Legacy
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 4. STREETBEAT CROSSLINK                                        */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 bg-studio-black border-t border-studio-border/40">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

            <div className="relative w-full md:w-64 shrink-0 aspect-[2/3] md:h-80 overflow-hidden rounded-sm">
              <Image
                src="/images/movie-poster.png"
                alt="Street Beat: Drumming Below Sea Level"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
                <Film className="w-3 h-3 mr-1.5" />
                Executive Producer
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl text-cream mb-4 leading-tight">
                Street Beat:<br />
                <span className="text-gold-gradient italic">Drumming Below Sea Level</span>
              </h2>
              <Separator className="w-12 bg-gold/40 mb-5 mx-auto md:mx-0" />
              <p className="text-mist text-sm leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
                Donald Markowitz served as Executive Producer on this 54-minute documentary
                about the unique percussion tradition of New Orleans — produced by Mid City Sound
                Studios, Fire on the Bayou, and Doreja Productions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button asChild>
                  <Link href="https://streetbeat.video" target="_blank" rel="noopener noreferrer">
                    Watch the Film
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/credits">Film Credits</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
