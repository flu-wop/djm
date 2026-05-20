// src/components/layout/Footer.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Footer for donaldmarkowitz.com
// Cross-links to Mid City Sound Studios.
// Intentionally sparse — name, era, links, MCS cross-link.
// ─────────────────────────────────────────────────────────────────────────────

import Link  from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Youtube, Mail, ExternalLink } from "lucide-react";

const SITE_LINKS = [
  { label: "Home",    href: "/" },
  { label: "Legacy",  href: "/legacy" },
  { label: "Credits", href: "/credits" },
  { label: "Studio",  href: "/studio" },
  { label: "Groove",  href: "/groove" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/donald_markowitz/", label: "Instagram" },
  { icon: Twitter,   href: "https://twitter.com/donaldmarkowitz",   label: "Twitter / X" },
  { icon: Youtube,   href: "https://youtube.com",   label: "YouTube" },
  { icon: Mail,      href: "mailto:midcitysound1@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-studio-border/50 bg-studio-charcoal">

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        {/* Brand column */}
        <div className="space-y-5 md:col-span-1 flex flex-col items-center">
          <div>
            <p className="font-display text-2xl text-cream tracking-wide">Donald Markowitz</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-mist/60 mt-1">
              Composer · Producer · New Orleans
            </p>
          </div>
          <p className="text-mist text-sm leading-relaxed max-w-xs">
            From New York's golden session era to an Academy Award win and a Grammy nomination — Donald Markowitz is the founder of Mid City Sound Studios in New Orleans.
          </p>
          {/* Socials */}
          <div className="flex gap-3 pt-1">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 border border-studio-border rounded-sm flex items-center justify-center text-mist hover:text-gold hover:border-gold transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="space-y-4">
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold/70">Navigate</p>
          <ul className="space-y-2.5 flex flex-col items-center md:items-center">
            {SITE_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-mist hover:text-cream transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MCS cross-link */}
        <div className="space-y-4">
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold/70">Studio</p>
          <Link
            href="https://midcitysound.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-studio-border/60 rounded-sm hover:border-gold/40 transition-all group text-center"
          >
            {/* MCS logo in footer */}
            <div className="flex justify-center mb-3">
              <div className="relative w-[220px] h-[72px] opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src="/images/mcs2-logo.png"
                  alt="Mid City Sound Studios"
                  fill
                  className="object-contain object-center"
                  sizes="220px"
                />
              </div>
            </div>
            <p className="text-mist text-xs leading-relaxed group-hover:text-cream transition-colors">
              Book studio time, explore current projects, and experience the sound of Mid City.
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-gold/60 text-[11px] group-hover:text-gold transition-colors">
              <span>midcitysound.com</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </Link>
        </div>
      </div>

      {/* ── Gold divider ── */}
      <div className="gold-line mx-6 opacity-20" />

      {/* ── Bottom bar ── */}
      <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-mist/50 text-xs">
          © {new Date().getFullYear()} Donald Markowitz. All rights reserved.
        </p>
        <p className="text-mist/30 text-xs tracking-wide">
          New Orleans, Louisiana
        </p>
      </div>
    </footer>
  );
}
