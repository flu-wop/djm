// src/components/ui/GroovePlayer.tsx
// Sitewide persistent audio player — mounts once, survives navigation.
// The player bar appears at the bottom of the screen on all pages
// once the user hits Play on the /groove page.

"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react"

type Track = {
  title:    string
  artist:   string
  filename: string
  date:     string
  note?:    string
}

// Global audio singleton — persists across client-side navigation
let globalAudio: HTMLAudioElement | null = null
let globalTrack: Track | null = null
let globalListeners: Array<() => void> = []

function notifyListeners() {
  globalListeners.forEach(fn => fn())
}

export function GroovePlayer({ track }: { track: Track }) {
  const [playing, setPlaying]   = useState(false)
  const [muted,   setMuted]     = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Initialise global audio once
  useEffect(() => {
    if (!globalAudio || globalTrack?.filename !== track.filename) {
      globalAudio?.pause()
      globalAudio = new Audio(`/audio/${track.filename}`)
      globalAudio.preload = "metadata"
      globalTrack = track
    }

    const audio = globalAudio

    const onLoaded = () => setDuration(audio.duration)
    const onEnded  = () => { setPlaying(false); setProgress(0) }
    audio.addEventListener("loadedmetadata", onLoaded)
    audio.addEventListener("ended", onEnded)

    // Sync state if audio was already playing
    setPlaying(!audio.paused)
    setMuted(audio.muted)

    const listener = () => {
      setPlaying(!audio.paused)
      setMuted(audio.muted)
    }
    globalListeners.push(listener)

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded)
      audio.removeEventListener("ended", onEnded)
      globalListeners = globalListeners.filter(fn => fn !== listener)
    }
  }, [track])

  // Progress ticker
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        if (globalAudio) setProgress(globalAudio.currentTime)
      }, 500)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [playing])

  function togglePlay() {
    if (!globalAudio) return
    if (globalAudio.paused) {
      globalAudio.play()
      setPlaying(true)
    } else {
      globalAudio.pause()
      setPlaying(false)
    }
    notifyListeners()
  }

  function toggleMute() {
    if (!globalAudio) return
    globalAudio.muted = !globalAudio.muted
    setMuted(globalAudio.muted)
    notifyListeners()
  }

  function seek(e: React.ChangeEvent<HTMLInputElement>) {
    if (!globalAudio) return
    globalAudio.currentTime = Number(e.target.value)
    setProgress(Number(e.target.value))
  }

  function fmt(s: number) {
    if (!s || isNaN(s)) return "0:00"
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60).toString().padStart(2, "0")
    return `${m}:${sec}`
  }

  return (
    <>
      {/* ── Full page player card ── */}
      <div className="border border-gold/25 rounded-sm overflow-hidden" style={{ boxShadow: "0 0 60px rgba(212,175,119,0.06)" }}>
        {/* Waveform / cover art area */}
        <div className="relative bg-studio-charcoal p-12 flex flex-col items-center justify-center gap-6 border-b border-studio-border/40 min-h-[200px]">
          <div className="w-20 h-20 border border-gold/30 rounded-full flex items-center justify-center bg-studio-black/60">
            <Music className="w-8 h-8 text-gold/60" />
          </div>
          <div className="text-center">
            <p className="font-display text-2xl text-cream">{track.title}</p>
            <p className="text-mist text-sm mt-1">{track.artist}</p>
            {track.note && <p className="text-mist/50 text-xs mt-2 italic">{track.note}</p>}
          </div>
          <p className="text-[10px] tracking-widest uppercase text-gold/50">{track.date}</p>
        </div>

        {/* Controls */}
        <div className="p-6 bg-studio-dark space-y-4">
          {/* Progress bar */}
          <div className="flex items-center gap-3 text-xs text-mist/50">
            <span className="w-8 text-right">{fmt(progress)}</span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={progress}
              onChange={seek}
              className="flex-1 accent-gold h-1 cursor-pointer"
            />
            <span className="w-8">{fmt(duration)}</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6">
            <button onClick={toggleMute} className="text-mist hover:text-gold transition-colors">
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            <button
              onClick={togglePlay}
              className="w-14 h-14 bg-gold text-studio-black rounded-full flex items-center justify-center hover:bg-gold/90 transition-colors"
            >
              {playing
                ? <Pause className="w-6 h-6" />
                : <Play  className="w-6 h-6 ml-0.5" />}
            </button>

            <div className="w-5" /> {/* spacer */}
          </div>
        </div>

        {/* How to update note — visible in dev, remove if desired */}
        <div className="px-6 py-4 border-t border-studio-border/30 bg-studio-black">
          <p className="text-mist/30 text-[10px] text-center">
            To update: swap the file in <code className="text-gold/40">/public/audio/</code> and edit <code className="text-gold/40">GROOVE_TRACK</code> in <code className="text-gold/40">app/groove/page.tsx</code>
          </p>
        </div>
      </div>

      {/* ── Persistent mini-bar (shows on all pages once playing) ── */}
      <GlobalPlayerBar track={track} playing={playing} muted={muted} onTogglePlay={togglePlay} onToggleMute={toggleMute} />
    </>
  )
}

// ── Mini bar that floats at bottom of every page ──────────────────────────────
function GlobalPlayerBar({ track, playing, muted, onTogglePlay, onToggleMute }: {
  track: Track
  playing: boolean
  muted: boolean
  onTogglePlay: () => void
  onToggleMute: () => void
}) {
  const [visible, setVisible] = useState(playing)

  useEffect(() => {
    // Show bar as soon as audio starts, keep it visible
    if (playing) setVisible(true)
  }, [playing])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold/20 bg-studio-black/95 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 py-3 flex items-center gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center shrink-0">
            <Music className="w-3.5 h-3.5 text-gold/60" />
          </div>
          <div className="min-w-0">
            <p className="text-cream text-xs font-medium truncate">{track.title}</p>
            <p className="text-mist text-[10px] truncate">{track.artist}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button onClick={onToggleMute} className="text-mist hover:text-gold transition-colors">
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onTogglePlay}
            className="w-9 h-9 bg-gold text-studio-black rounded-full flex items-center justify-center hover:bg-gold/90 transition-colors"
          >
            {playing
              ? <Pause className="w-4 h-4" />
              : <Play  className="w-4 h-4 ml-0.5" />}
          </button>
        </div>
      </div>
    </div>
  )
}
