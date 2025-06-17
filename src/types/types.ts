import type { LucideIcon } from "lucide-react"

export type HighlightsCard = {
  id: number
  image: string
  title: string
  price: string
  description: string
  order: string
  icon: LucideIcon
}

export type TestimonialsCard = {
  id: number
  image: string
  name: string
  message: string
}
