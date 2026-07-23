// src/components/layout/Navbar.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Donny Markowitz legacy site navigation.
// Extremely minimal — name as wordmark, restrained nav links, no CTA button.
// The site itself is the statement; the nav just orients.
// ─────────────────────────────────────────────────────────────────────────────

"use client";

import Link            from "next/link";
import { usePathname } from "next/navigation";
import { useState }    from "react";
import { Menu, X }     from "lucide-react";

const NAV_LINKS = [
  { label: "Home",    href: "/" },
  { label: "Legacy",  href: "/legacy" },
  { label: "Credits", href: "/credits" },
  { label: "Studio",  href: "/studio" },
  { label: "Stats",   href: "/stats" },
  { label: "Merch",   href: "https://midcitysound.com/merch/brand/djm" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const pathname        = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-studio-border/40 bg-studio-black/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">

        {/* ── Wordmark ── */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex flex-col leading-none"
        >
          <span className="font-display text-[15px] tracking-[0.12em] text-cream/90 group-hover:text-gold transition-colors">
            Donald Markowitz
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-mist/60 mt-0.5">
            Composer · Producer · Legend
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "relative text-[12px] font-sans font-medium tracking-[0.08em] uppercase transition-colors",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-gold",
                  "after:transition-all after:duration-300",
                  isActive
                    ? "text-gold after:w-full"
                    : "text-mist hover:text-cream after:w-0 hover:after:w-full",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden p-2 text-mist hover:text-cream transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {open && (
        <div className="md:hidden border-t border-studio-border/40 bg-studio-black">
          {/* Name header */}
          <div className="px-6 py-5 border-b border-studio-border/30">
            <p className="font-display text-xl text-cream">Donald Markowitz</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-mist/60 mt-1">Composer · Producer · Legend</p>
          </div>
          <nav className="flex flex-col px-6 pb-5 pt-2 gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={[
                    "py-3 text-sm font-medium border-b border-studio-border/30 tracking-wide transition-colors",
                    isActive ? "text-gold" : "text-mist hover:text-cream",
                  ].join(" ")}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
