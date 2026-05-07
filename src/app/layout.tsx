// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default:  "Donald Markowitz | Composer & Producer",
    template: "%s | Donald Markowitz",
  },
  description:
    "The official site of Donald Markowitz — Grammy-associated composer, producer, and arranger. " +
    "Three-time Oscar nominated, five decades of timeless music, founder of Mid City Sound Studios, New Orleans.",
  keywords: [
    "Donald Markowitz", "composer", "producer", "film score",
    "Oscar nominated", "New Orleans", "Mid City Sound", "Baha Men",
    "mixing", "arrangement", "Hollywood", "jazz",
  ],
  metadataBase: new URL("https://donaldmarkowitz.com"),
  icons: { icon: "/favicon.jpg", apple: "/favicon.jpg" },
  openGraph: {
    type:        "website",
    url:         "https://donaldmarkowitz.com",
    siteName:    "Donald Markowitz",
    title:       "Donald Markowitz | Composer & Producer",
    description: "Five decades of timeless music. Three Oscar nominations. New Orleans.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Donald Markowitz | Composer & Producer",
    description: "Five decades of timeless music. Three Oscar nominations. New Orleans.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-studio-black text-cream antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
