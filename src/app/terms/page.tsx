import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Donald Markowitz site terms of service.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-studio-black py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl text-cream mb-2">Terms of Service</h1>
        <p className="text-mist/60 text-sm mb-10">Last updated: September 2026</p>
        <div className="bg-studio-charcoal border border-studio-border rounded-sm p-8 sm:p-12">
          <p className="text-mist leading-relaxed mb-6">
            This site is provided for informational purposes about Donald Markowitz's work, catalog, and studio. All content — music, images, and credits — is the property of Donald Markowitz / Mid City Sound and may not be reproduced without permission.
          </p>
          <p className="text-mist leading-relaxed mb-6">
            Links to third-party merch or streaming platforms are subject to those platforms' own terms.
          </p>
          <h2 className="font-display text-2xl text-gold mt-10 mb-3">Contact Us</h2>
          <p className="text-mist leading-relaxed mb-6">
            Email <a href="mailto:studio@midcitysound.com" className="text-gold hover:underline">studio@midcitysound.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
