// src/app/credits/page.tsx — server component, fetches TMDB posters then renders client UI
import type { Metadata } from "next"
import { fetchPosters } from "@/lib/tmdb"
import CreditsClient   from "./CreditsClient"

export const metadata: Metadata = {
  title: "Credits | Donald Markowitz",
  description: "Four decades of film, TV, and music credits — from Dirty Dancing to Street Beat.",
}

const TITLES = [
  "Dirty Dancing",
  "Cop Rock",
  "Highlander II: The Quickening",
  "Afterburn",
  "Beverly Hills, 90210",
  "Bringing Up Jack",
  "On Seventh Avenue",
  "North Shore Fish",
  "White Lies",
  "Chicago Sons",
  "The Unknown Cyclist",
  "So Weird",
  "Popular",
  "Brutally Normal",
  "The Chronicle",
  "Zenon: The Zequel",
  "Jesus, Mary and Joey",
  "Jake 2.0",
  "Alter Ego",
  "Terminal",
  "Street Beat: Drumming Below Sea Level",
]

export default async function CreditsPage() {
  const posters = await fetchPosters(TITLES)
  return <CreditsClient posters={posters} />
}
