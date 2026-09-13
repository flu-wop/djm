import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Donald Markowitz site privacy policy.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-studio-black py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl text-cream mb-2">Privacy Policy</h1>
        <p className="text-mist/60 text-sm mb-10">Last updated: September 2026</p>
        <div className="bg-studio-charcoal border border-studio-border rounded-sm p-8 sm:p-12">
          <p className="text-mist leading-relaxed mb-6">
            This site collects the name, email, and message you submit through our contact form. We use this only to respond to your inquiry — we don't sell or share it with third parties.
          </p>
          <p className="text-mist leading-relaxed mb-6">
            If you're directed to a merch or ticketing link from this site, that transaction is handled by the linked provider under its own privacy policy.
          </p>
          <p className="text-mist leading-relaxed mb-6">
            We may use basic website analytics to understand site traffic; these may set cookies in your browser.
          </p>
          <h2 className="font-display text-2xl text-gold mt-10 mb-3">Contact Us</h2>
          <p className="text-mist leading-relaxed mb-6">
            Questions? Email <a href="mailto:studio@midcitysound.com" className="text-gold hover:underline">studio@midcitysound.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
