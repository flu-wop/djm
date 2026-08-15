// src/components/LegacyCatalogSection.tsx
// Browsable chronological catalog of every credited work — filter by decade
// and category (Disney, Film, TV, Song, etc). Data lives in src/lib/catalog.ts,
// mirrored from the verified credits on /credits — do not add unverified entries there.

"use client"

import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { CatalogItem, CatalogCategory } from "@/lib/catalog"

export function LegacyCatalogSection({
  catalog,
  decades,
  categories,
}: {
  catalog: CatalogItem[]
  decades: string[]
  categories: CatalogCategory[]
}) {
  const [decade, setDecade] = useState<string>("All")
  const [category, setCategory] = useState<string>("All")

  const filtered = useMemo(() => {
    return catalog.filter(i => {
      const decadeMatch = decade === "All" || i.decade === decade
      const categoryMatch = category === "All" || i.categories.includes(category as CatalogCategory)
      return decadeMatch && categoryMatch
    })
  }, [catalog, decade, category])

  return (
    <div>
      <div className="mb-6">
        <Badge variant="outline" className="mb-3 text-[10px] tracking-widest uppercase">Browse the Catalog</Badge>
        <h2 className="font-display text-4xl text-cream mb-2">Legacy Catalog</h2>
        <p className="text-mist text-sm max-w-lg leading-relaxed">
          Every credited song, score, and film — decade by decade, category by category.
        </p>
      </div>

      {/* Decade filter */}
      <div className="flex flex-wrap gap-2 mb-3">
        {["All", ...decades].map(d => (
          <FilterChip key={d} label={d} active={decade === d} onClick={() => setDecade(d)} />
        ))}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["All", ...categories].map(c => (
          <FilterChip key={c} label={c} active={category === c} onClick={() => setCategory(c)} variant="category" />
        ))}
      </div>

      {/* Results */}
      <div className="border border-studio-border rounded-sm overflow-hidden">
        <div className="max-h-[520px] overflow-y-auto divide-y divide-studio-border">
          {filtered.length === 0 && (
            <p className="text-mist/50 text-sm text-center py-10">No credits match that filter combination.</p>
          )}
          {filtered.map(i => (
            <div key={i.id} className="flex items-start gap-4 p-4 bg-studio-card hover:bg-studio-dark transition-colors">
              <span className="font-mono text-[11px] text-mist/40 pt-0.5 w-16 shrink-0">{i.year}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 flex-wrap mb-1">
                  <h3 className="font-display text-base text-cream leading-snug">{i.title}</h3>
                  {i.categories.map(c => (
                    <Badge key={c} variant="secondary" className="text-[9px] shrink-0">{c}</Badge>
                  ))}
                </div>
                {i.subtitle && <p className="text-mist text-xs">{i.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 bg-studio-black border-t border-studio-border/40">
          <p className="text-mist/40 text-[10px] text-center tracking-wide uppercase">
            {filtered.length} of {catalog.length} credits
          </p>
        </div>
      </div>
    </div>
  )
}

function FilterChip({
  label,
  active,
  onClick,
  variant = "decade",
}: {
  label: string
  active: boolean
  onClick: () => void
  variant?: "decade" | "category"
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-[11px] tracking-wide uppercase px-3.5 py-1.5 rounded-sm border transition-colors",
        active
          ? "border-gold bg-gold/10 text-gold"
          : "border-studio-border text-mist hover:border-gold/40 hover:text-cream",
        variant === "category" ? "font-mono" : ""
      )}
    >
      {label}
    </button>
  )
}
