// src/app/studio/page.tsx
// Bridge page linking to Mid City Sound Studios.

import type { Metadata } from "next"
import Link              from "next/link"
import Image             from "next/image"
import { ExternalLink, ArrowRight, Mic2, Music, Headphones, Calendar } from "lucide-react"
import { Button }  from "@/components/ui/button"
import { Badge }   from "@/components/ui/badge"

export const metadata: Metadata = {
  title:       "Studio — Mid City Sound",
  description: "Donald Markowitz founded Mid City Sound Studios in New Orleans. Book studio time, mixing, mastering, and more.",
}

const SERVICES = [
  { icon: Mic2,       title: "Studio Recording",    body: "World-class tracking room in the heart of Mid City, New Orleans." },
  { icon: Music,      title: "Mixing & Mastering",  body: "Hollywood-grade mixing from an Academy Award-winning producer." },
  { icon: Headphones, title: "Artist Development",  body: "A creative partnership with one of music's most experienced minds." },
]

export default function StudioPage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      {/* ── Hero ── */}
      <section className="py-24 px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="text-[10px] tracking-widest uppercase">
              Mid City Sound Studios · New Orleans
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl text-cream leading-tight">
              The studio
              <br />
              <span className="text-gold-gradient italic">Donny built</span>
            </h1>
            <p className="text-mist text-sm leading-relaxed max-w-sm">
              Mid City Sound Studios is Donald Markowitz's New Orleans home — a room designed
              from the ground up to carry five decades of craft into every session.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="https://midcitysound.com/studio" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4" />
                  Book a Session
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://midcitysound.com" target="_blank" rel="noopener noreferrer">
                  Visit midcitysound.com
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* MCS logo panel */}
          <div className="border border-studio-border rounded-sm bg-studio-dark p-10 flex items-center justify-center">
            <div className="relative w-full max-w-[260px] h-[85px]">
              <Image
                src="/images/mcs2-logo.png"
                alt="Mid City Sound Studios"
                fill
                className="object-contain"
                sizes="260px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-4xl text-cream text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-7 border border-studio-border bg-studio-card rounded-sm">
                <Icon className="w-5 h-5 text-gold/60 mb-5" />
                <h3 className="font-display text-xl text-cream mb-2">{title}</h3>
                <p className="text-mist text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="https://midcitysound.com" target="_blank" rel="noopener noreferrer">
                Explore Mid City Sound
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
