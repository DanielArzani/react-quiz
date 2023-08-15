import { Question } from '../types/QuizDataType';

/**
 * Calculates the maximum possible score for a given array of questions.
 *
 * @param questionsArray - An array of quiz questions.
 * @returns The maximum score that can be achieved based on the provided questions.
 */
export const getMaxPossibleScore = (questionsArray: Question[]): number => {
  return questionsArray.reduce(
    (acc: number, currQuestion: Question): number => {
      return acc + currQuestion.points;
    },
    0
  );
};
