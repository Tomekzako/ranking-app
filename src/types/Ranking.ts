import type { Answer } from './Answer'

export type Ranking = {
  id: number
  question: string
  subtitle: string
  answers: Answer[]
  allowedAnswers: number
}
