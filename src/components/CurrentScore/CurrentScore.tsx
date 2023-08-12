import React from 'react';

type CurrentScoreProps = {
  numberOfCorrectAnswers: number;
  calculateScoreFunction: () => number;
  minMax: [number, number];
};

/**
 * The current score which of the user based on how many questions that they answered correctly
 * @param numberOfCorrectAnswers The number of correct answers which the user currently has
 * @param calculateScoreFunction A function that will calculate the score
 * @param minMax The minimum and maximum scores the user can get. Note that min is the first position of the array and max is the second.
 *
 */
function CurrentScore({
  numberOfCorrectAnswers,
  calculateScoreFunction,
  minMax,
}: CurrentScoreProps) {
  const [min, max] = minMax;

  return (
    <span>
      <p>
        {min === 0 ? (
          <>
            <strong>{numberOfCorrectAnswers}</strong> / {max}
          </>
        ) : (
          <>0 / {max}</>
        )}
      </p>
    </span>
  );
}

export default CurrentScore;
