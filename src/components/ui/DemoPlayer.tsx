// src/components/ui/DemoPlayer.tsx — standalone audio player for demo tracks
"use client"
import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react"

type Props = {
  title:    string
  subtitle: string
  filename: string
  note?:    string
}

export function DemoPlayer({ title, subtitle, filename, note }: Props) {
  const audioRef              = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [muted,   setMuted]   = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = new Audio(`/audio/${filename}`)
    audio.preload = "metadata"
    audioRef.current = audio

    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration))
    audio.addEventListener("ended", () => { setPlaying(false); setProgress(0) })
    audio.addEventListener("timeupdate", () => setProgress(audio.currentTime))

    return () => { audio.pause(); audio.src = "" }
  }, [filename])

  function togglePlay() {
    const a = audioRef.current
    if (!a) return
    if (a.paused) { a.play(); setPlaying(true) }
    else          { a.pause(); setPlaying(false) }
  }

  function toggleMute() {
    const a = audioRef.current
    if (!a) return
    a.muted = !a.muted
    setMuted(a.muted)
  }

  function seek(e: React.ChangeEvent<HTMLInputElement>) {
    const a = audioRef.current
    if (!a) return
    a.currentTime = Number(e.target.value)
    setProgress(Number(e.target.value))
  }

  function fmt(s: number) {
    if (!s || isNaN(s)) return "0:00"
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`
  }

  return (
    <div className="border border-gold/25 rounded-sm overflow-hidden" style={{ boxShadow: "0 0 60px rgba(212,175,119,0.06)" }}>
      {/* Cover area */}
      <div className="bg-studio-charcoal p-10 flex flex-col items-center gap-5 border-b border-studio-border/40">
        <div className="w-20 h-20 border border-gold/30 rounded-full flex items-center justify-center bg-studio-black/60">
          <Music className="w-8 h-8 text-gold/60" />
        </div>
        <div className="text-center">
          <p className="font-display text-xl text-cream">{title}</p>
          <p className="text-mist text-sm mt-1">{subtitle}</p>
          {note && <p className="text-mist/50 text-xs mt-3 italic max-w-sm leading-relaxed">{note}</p>}
        </div>
      </div>

      {/* Controls */}
      <div className="p-6 bg-studio-dark space-y-4">
        <div className="flex items-center gap-3 text-xs text-mist/50">
          <span className="w-8 text-right">{fmt(progress)}</span>
          <input
            type="range" min={0} max={duration || 100} value={progress}
            onChange={seek}
            className="flex-1 accent-gold h-1 cursor-pointer"
          />
          <span className="w-8">{fmt(duration)}</span>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button onClick={toggleMute} className="text-mist hover:text-gold transition-colors">
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <button
            onClick={togglePlay}
            className="w-14 h-14 bg-gold text-studio-black rounded-full flex items-center justify-center hover:bg-gold/90 transition-colors"
          >
            {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </button>
          <div className="w-5" />
        </div>
      </div>

      <div className="px-6 py-4 border-t border-studio-border/30 bg-studio-black text-center">
        <p className="text-mist/30 text-[10px]">
          Drop <code className="text-gold/40">time-of-my-life-demo.mp3</code> in <code className="text-gold/40">/public/audio/</code>
        </p>
      </div>
    </div>
  )
}
