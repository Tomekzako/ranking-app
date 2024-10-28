import type { Answer } from './answer';

export type Ranking = {
  id: number;
  question: string;
  subtitle: string;
  answers: Answer[];
  allowedAnswers: number;
};
