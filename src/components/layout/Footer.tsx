// src/components/layout/Footer.tsx — 2-col desktop, single col mobile

import Link  from "next/link";
import { Instagram, Twitter, Youtube, Mail, ExternalLink } from "lucide-react";
import { BuiltBySignature } from "./BuiltBySignature";

const SITE_LINKS = [
  { label: "Home",    href: "/" },
  { label: "Legacy",  href: "/legacy" },
  { label: "Credits", href: "/credits" },
  { label: "Studio",  href: "/studio" },
  { label: "Stats",   href: "/stats" },
  { label: "Merch",   href: "https://midcitysound.com/merch/brand/djm" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/donald_markowitz/", label: "Instagram" },
  { icon: Twitter,   href: "https://twitter.com/donaldmarkowitz",          label: "Twitter / X" },
  { icon: Youtube,   href: "https://youtube.com",                           label: "YouTube" },
  { icon: Mail,      href: "mailto:midcitysound1@gmail.com",                label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-studio-border/50 bg-studio-charcoal">

      {/* ── 2-col on desktop, stacked on mobile ── */}
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ── Left: Brand + bio + socials ── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
          <div>
            <p className="font-display text-2xl text-cream tracking-wide">Donald Markowitz</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-mist/60 mt-1">
              Composer · Producer · Legend
            </p>
          </div>
          <p className="text-mist text-sm leading-relaxed max-w-sm">
            From New York's golden session era to an Academy Award win and a Grammy nomination —
            Donald Markowitz is the founder of Mid City Sound Studios in New Orleans.
          </p>
          <div className="flex gap-3">
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

        {/* ── Right: Nav + Studio block ── */}
        <div className="flex flex-col items-center md:items-end gap-8">

          {/* Nav links — horizontal row */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {SITE_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} className="text-sm text-mist hover:text-cream transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* MCS studio block */}
          <Link
            href="https://midcitysound.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border border-studio-border/60 rounded-sm hover:border-gold/40 transition-all group w-full md:max-w-xs"
          >
            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center rounded-sm border border-studio-border/40 bg-studio-dark group-hover:border-gold/30 transition-colors">
              <span className="font-display text-xl text-gold/50 group-hover:text-gold transition-colors">M</span>
            </div>
            <div>
              <p className="text-cream text-xs font-medium group-hover:text-gold transition-colors">Mid City Sound Studios</p>
              <p className="text-mist/50 text-[10px] mt-0.5">midcitysound.com</p>
              <ExternalLink className="w-3 h-3 text-gold/40 mt-1 group-hover:text-gold transition-colors" />
            </div>
          </Link>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="gold-line mx-6 opacity-20" />
      <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <p className="text-mist/50 text-xs">© {new Date().getFullYear()} Donald Markowitz. All rights reserved.</p>
        <p className="text-mist/30 text-xs tracking-wide">New Orleans, Louisiana</p>
      </div>

      <BuiltBySignature />
    </footer>
  );
}
