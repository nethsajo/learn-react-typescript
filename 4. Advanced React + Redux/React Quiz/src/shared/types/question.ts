export type Questions = {
  category: string;
  questions: Question[];
};

export type Question = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};
