// src/app/catalog/page.tsx
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GrooveOfTheDaySection } from "@/components/GrooveOfTheDaySection"
import { LegacyCatalogSection } from "@/components/LegacyCatalogSection"
import {
  getGrooveOfTheDay, getPlayableCatalog,
  getCatalogChronological, getDecades, getCategories,
} from "@/lib/catalog"

export const metadata: Metadata = {
  title: "Catalog | Donald Markowitz",
  description: "Groove of the Day and the full Legacy Catalog — every credited song, score, and film from Donald Markowitz, browsable by decade and category.",
}

// Groove of the Day rotates once per UTC day — hourly revalidation keeps it
// current without making the whole page fully dynamic.
export const revalidate = 3600

export default function CatalogPage() {
  const grooveOfTheDay = getGrooveOfTheDay()
  const playableCatalog = getPlayableCatalog()
  const fullCatalog = getCatalogChronological()
  const decades = getDecades()
  const categories = getCategories()

  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      {/* ── Header ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase mx-auto block w-fit">
            The Catalog
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl text-cream mb-4 leading-tight">
            Groove of the Day
            <br />
            <span className="text-gold-gradient italic">& the Legacy Catalog</span>
          </h1>
          <Separator className="w-10 bg-gold/40 mb-5 mx-auto" />
          <p className="text-mist text-sm max-w-xl leading-relaxed mx-auto">
            A new pick from the catalog every day, and the full body of work underneath —
            every credited song, score, and film, decade by decade.
          </p>
        </div>
      </section>

      {/* ── Groove of the Day + Legacy Catalog ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl space-y-16">
          <GrooveOfTheDaySection initialTrack={grooveOfTheDay} playableCatalog={playableCatalog} />
          <LegacyCatalogSection catalog={fullCatalog} decades={decades} categories={categories} />
        </div>
      </section>
    </div>
  )
}
