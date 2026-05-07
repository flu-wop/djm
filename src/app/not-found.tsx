// src/app/not-found.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-sm">
        <p className="font-display text-8xl text-gold/20">404</p>
        <h1 className="font-display text-3xl text-cream">Page not found</h1>
        <p className="text-mist text-sm">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="flex gap-3 justify-center">
          <Button asChild><Link href="/">Home</Link></Button>
          <Button variant="outline" asChild><Link href="/legacy">Legacy</Link></Button>
        </div>
      </div>
    </div>
  )
}
