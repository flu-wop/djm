"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react"

let globalAudio: HTMLAudioElement | null = null
let globalPlaying = false
let globalListeners: Array<() => void> = []
function notifyAll() { globalListeners.forEach(fn => fn()) }

type Props = { title: string; subtitle: string; filename: string }

export function SiteAudioPlayer({ title, subtitle, filename }: Props) {
  const [playing,  setPlaying]  = useState(false)
  const [muted,    setMuted]    = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const ticker = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!globalAudio) {
      globalAudio = new Audio(`/audio/${filename}`)
      globalAudio.preload = "metadata"
    }
    const a = globalAudio
    const onMeta  = () => setDuration(a.duration)
    const onEnded = () => { globalPlaying = false; setPlaying(false); setProgress(0); notifyAll() }
    a.addEventListener("loadedmetadata", onMeta)
    a.addEventListener("ended", onEnded)
    setPlaying(globalPlaying); setMuted(a.muted)
    const sync = () => { setPlaying(!globalAudio!.paused); setMuted(globalAudio!.muted) }
    globalListeners.push(sync)
    return () => {
      a.removeEventListener("loadedmetadata", onMeta)
      a.removeEventListener("ended", onEnded)
      globalListeners = globalListeners.filter(fn => fn !== sync)
    }
  }, [filename])

  useEffect(() => {
    if (playing) { ticker.current = setInterval(() => { if (globalAudio) setProgress(globalAudio.currentTime) }, 500) }
    else if (ticker.current) clearInterval(ticker.current)
    return () => { if (ticker.current) clearInterval(ticker.current) }
  }, [playing])

  function togglePlay() {
    if (!globalAudio) return
    if (globalAudio.paused) { globalAudio.play(); globalPlaying = true; setPlaying(true) }
    else { globalAudio.pause(); globalPlaying = false; setPlaying(false) }
    notifyAll()
  }
  function toggleMute() {
    if (!globalAudio) return
    globalAudio.muted = !globalAudio.muted; setMuted(globalAudio.muted); notifyAll()
  }
  function seek(e: React.ChangeEvent<HTMLInputElement>) {
    if (!globalAudio) return
    globalAudio.currentTime = Number(e.target.value); setProgress(Number(e.target.value))
  }
  function fmt(s: number) {
    if (!s || isNaN(s)) return "0:00"
    return `${Math.floor(s/60)}:${Math.floor(s%60).toString().padStart(2,"0")}`
  }

  return (
    <>
      <div className="border border-gold/25 rounded-sm overflow-hidden">
        <div className="bg-studio-charcoal p-8 flex flex-col items-center gap-4 border-b border-studio-border/40">
          <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center bg-studio-black/60">
            <Music className="w-7 h-7 text-gold/60" />
          </div>
          <div className="text-center">
            <p className="font-display text-lg text-cream">{title}</p>
            <p className="text-mist text-xs mt-1">{subtitle}</p>
          </div>
        </div>
        <div className="p-6 bg-studio-dark space-y-4">
          <div className="flex items-center gap-3 text-xs text-mist/50">
            <span className="w-8 text-right">{fmt(progress)}</span>
            <input type="range" min={0} max={duration||100} value={progress} onChange={seek} className="flex-1 accent-gold h-1 cursor-pointer" />
            <span className="w-8">{fmt(duration)}</span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <button onClick={toggleMute} className="text-mist hover:text-gold transition-colors">
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <button onClick={togglePlay} className="w-14 h-14 bg-gold text-studio-black rounded-full flex items-center justify-center hover:bg-gold/90 transition-colors">
              {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>
            <div className="w-5" />
          </div>
        </div>
        <div className="px-6 py-3 border-t border-studio-border/30 bg-studio-black text-center">
          <p className="text-mist/30 text-[10px]">Drop <code className="text-gold/40">time-of-my-life-demo.mp3</code> in <code className="text-gold/40">/public/audio/</code></p>
        </div>
      </div>

      {/* Sitewide mini bar — appears once playing starts */}
      <GlobalBar playing={playing} muted={muted} title={title} onTogglePlay={togglePlay} onToggleMute={toggleMute} />
    </>
  )
}

function GlobalBar({ playing, muted, title, onTogglePlay, onToggleMute }: {
  playing: boolean; muted: boolean; title: string
  onTogglePlay: () => void; onToggleMute: () => void
}) {
  const [visible, setVisible] = useState(playing)
  useEffect(() => { if (playing) setVisible(true) }, [playing])
  if (!visible) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold/20 bg-studio-black/95 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center shrink-0">
            <Music className="w-3.5 h-3.5 text-gold/60" />
          </div>
          <div className="min-w-0">
            <p className="text-cream text-xs font-medium truncate">{title}</p>
            <p className="text-mist text-[10px] truncate">Original Demo · 1987</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={onToggleMute} className="text-mist hover:text-gold transition-colors">
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button onClick={onTogglePlay} className="w-9 h-9 bg-gold text-studio-black rounded-full flex items-center justify-center hover:bg-gold/90 transition-colors">
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
        </div>
      </div>
    </div>
  )
}
