/**
 * Converts a score to a percentage based on the maximum possible score.
 *
 * @param obtainedScore - The score that was obtained.
 * @param maxScore - The maximum possible score.
 * @returns The percentage of the score.
 */
export const convertScoreToPercentage = (
  obtainedScore: number,
  maxScore: number
): number => {
  // Safeguard against division by zero
  if (maxScore === 0) {
    throw new Error('The maximum score cannot be zero.');
  }

  // Calculate the percentage
  const percentage: number = (obtainedScore / maxScore) * 100;

  // Return the rounded value
  return Math.round(percentage);
};
