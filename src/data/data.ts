import { Bike } from "lucide-react"
import type { HighlightsCard, TestimonialsCard } from "../types/types"
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Bruchetta,
  GreekSalad,
  LemonDessert,
  PastaPrimavera,
} from "../assets"

export const highligts: HighlightsCard[] = [
  {
    id: 1,
    image: GreekSalad,
    title: "Greek Salad",
    price: "$10.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 2,
    image: Bruchetta,
    title: "Bruschetta",
    price: "$12.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil and topped with tomatoes.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 3,
    image: LemonDessert,
    title: "Lemon Dessert",
    price: "$13.50",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 4,
    image: PastaPrimavera,
    title: "Pasta Primavera",
    price: "$14.25",
    description:
      "A vibrant medley of fresh seasonal vegetables tossed with al dente pasta and a light olive oil sauce, capturing the essence of Italian springtime.",
    order: "order a delivery",
    icon: Bike,
  },
]

export const testimonials: TestimonialsCard[] = [
  {
    id: 1,
    image: Avatar1,
    name: "David Malan",
    message:
      "'Little Lemon's flavors are an exquisite delight. Culinary perfection in a cozy ambiance—undeniably wonderful!'",
  },
  {
    id: 2,
    image: Avatar2,
    name: "Ahsan Ali",
    message:
      "'At Little Lemon, indulge in a delightful journey of flavors and warmth. Exceptional taste, inviting atmosphere—truly memorable.'",
  },
  {
    id: 3,
    image: Avatar3,
    name: "Daniel Harris",
    message:
      "'Little Lemon's stand-out dishes and cozy ambiance promise a delightful experience. Memorable dining awaits with joyous flavors.'",
  },
  {
    id: 4,
    image: Avatar4,
    name: "Brian Arthur",
    message:
      "'Savor Little Lemon's gastronomic delights—a culinary gem with impeccable service and a warm, inviting atmosphere.'",
  },
]
