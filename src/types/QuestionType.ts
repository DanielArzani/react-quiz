export type Question = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type QuestionType = {
  questions: Question[];
};
