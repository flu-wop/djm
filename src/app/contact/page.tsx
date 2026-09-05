// src/app/contact/page.tsx
"use client"

import { useState } from "react"
import { Mail, CheckCircle2, MapPin } from "lucide-react"
import Image from "next/image"
import { Button }   from "@/components/ui/button"
import { Badge }    from "@/components/ui/badge"
import { Input }    from "@/components/ui/input"
import { Label }    from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const INQUIRY_TYPES = [
  "Studio Session", "Production Consultation",
  "Orchestral Arrangement", "Press / Media",
  "Licensing", "General",
]

export default function ContactPage() {
  const [form, setForm]       = useState({ name: "", email: "", inquiry: "", message: "", company: "" })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState<string | null>(null)

  function update(f: string, v: string) { setForm(p => ({ ...p, [f]: v })) }

  async function handleSubmit() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Something went wrong.")
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't send your message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-studio-black">
      <section className="py-20 px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-4xl grid md:grid-cols-[1fr_280px] gap-10 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">Get in Touch</Badge>
            <h1 className="font-display text-5xl md:text-6xl text-cream mb-4 leading-tight">
              Let&apos;s Create
              <br /><span className="text-gold-gradient italic">Something</span>
            </h1>
            <p className="text-mist text-sm max-w-md leading-relaxed">
              Production consultations, studio sessions, orchestral arrangements, press inquiries —
              reach out and we&apos;ll respond within two business days.
            </p>
          </div>
          {/* Replace src with preferred contact/studio photo */}
          <div className="relative aspect-[3/4] rounded-sm border border-studio-border overflow-hidden hidden md:block">
            <Image
              src="/images/donny-playing-bass.JPG"
              alt="Donald Markowitz playing guitar"
              fill
              className="object-cover object-top"
              sizes="280px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl grid md:grid-cols-[280px_1fr] gap-14">

          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gold/70 mb-2">Email</p>
              <a href="mailto:midcitysound1@gmail.com" className="text-cream text-sm hover:text-gold transition-colors">
                midcitysound1@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gold/70 mb-2">Studio</p>
              <div className="flex items-start gap-2 text-mist text-sm">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-gold/40 shrink-0" />
                <span>Mid City Sound Studios<br />530 S Norman C Francis Pkwy<br />New Orleans, Louisiana</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gold/70 mb-2">Studio Site</p>
              <a href="https://midcitysound.com" target="_blank" rel="noopener noreferrer" className="text-cream text-sm hover:text-gold transition-colors">
                midcitysound.com
              </a>
            </div>
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-5 text-center">
              <div className="w-14 h-14 border border-gold/40 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-display text-3xl text-cream">Message received</h2>
              <p className="text-mist text-sm max-w-xs">
                We&apos;ll be in touch at <span className="text-gold">{form.email}</span> within 1–2 business days.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Honeypot — hidden from real users via CSS, bots tend to fill every field */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={e => update("company", e.target.value)}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" value={form.name} onChange={e => update("name", e.target.value)} placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Inquiry Type</Label>
                <div className="flex flex-wrap gap-2">
                  {INQUIRY_TYPES.map(t => (
                    <button key={t} onClick={() => update("inquiry", t)}
                      className={["px-3 py-1.5 text-xs border rounded-sm transition-all",
                        form.inquiry === t ? "border-gold bg-gold/10 text-gold" : "border-studio-border text-mist hover:border-gold/40"
                      ].join(" ")}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" value={form.message} onChange={e => update("message", e.target.value)}
                  placeholder="Tell us about your project..." className="h-36" />
              </div>
              {error && <p className="text-red-400 text-xs">{error}</p>}
              <Button onClick={handleSubmit} disabled={!form.name || !form.email || !form.message || loading}>
                {loading
                  ? <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-studio-black/30 border-t-studio-black rounded-full animate-spin" />Sending…</span>
                  : <><Mail className="w-4 h-4" />Send Message</>
                }
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
