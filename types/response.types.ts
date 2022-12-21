export interface saucerItem {
  id: number
  name: string
  country: Country
  region: string
  ingredients: string[]
  recipe: string
  otherNames: string[]
  cookingTime: {
    minTime: number
    maxTime: number
  }
  history: string,
  punctuation: number,
  nutritionalInformation: {
    calories: number
    fats: number
    carbohydrates: number
    protein: number
    sodium: number
    fiber: number
  },
  necessaryUtensils: string[]
}

type Country = "Argentina" | "Bolivia" | "Brasil" | "Chile" | "Colombia" | "España" | "México" | "Perú" | "Uruguay" | "Venezuela" 