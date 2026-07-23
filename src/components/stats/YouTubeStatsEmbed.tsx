"use client"
// src/components/stats/YouTubeStatsEmbed.tsx
// Embeds the official "(I've Had) The Time of My Life" music video.
// Browsers block autoplay-with-sound outright, so this starts muted and loops,
// with a tap-to-unmute control that sets volume to a quiet 15% once clicked.

import { useEffect, useRef, useState } from "react"

const VIDEO_ID = "4BQLE_RrTSU"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export function YouTubeStatsEmbed({ viewCountLabel }: { viewCountLabel: string | null }) {
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [muted, setMuted] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (window.YT?.Player) {
      initPlayer()
      return
    }
    const script = document.createElement("script")
    script.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(script)
    window.onYouTubeIframeAPIReady = initPlayer

    function initPlayer() {
      if (!containerRef.current) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: VIDEO_ID,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: () => setReady(true),
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleUnmute() {
    if (!playerRef.current) return
    playerRef.current.unMute()
    playerRef.current.setVolume(15)
    setMuted(false)
  }

  return (
    <div className="relative rounded-sm overflow-hidden border border-studio-border bg-black aspect-video">
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {ready && muted && (
        <button
          onClick={handleUnmute}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full
                     bg-black/70 border border-gold/30 text-gold text-[11px] tracking-wide
                     hover:bg-black/85 hover:border-gold/60 transition-colors"
        >
          🔇 Tap to unmute
        </button>
      )}

      {viewCountLabel && (
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-black/70 border border-gold/20">
          <span className="text-gold font-display text-sm">{viewCountLabel}</span>
          <span className="text-mist/70 text-[10px] ml-1.5">views on YouTube</span>
        </div>
      )}
    </div>
  )
}
