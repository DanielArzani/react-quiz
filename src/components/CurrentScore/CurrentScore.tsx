import React from 'react';

type CurrentScoreProps = {
  score: number;
  minMax: [number, number];
};

/**
 * The current score which of the user based on how many questions that they answered correctly
 * @param score The users current score
 * @param minMax The minimum and maximum scores the user can get. Note that min is the first position of the array and max is the second.
 *
 */
function CurrentScore({ score = 0, minMax }: CurrentScoreProps) {
  const [min, max] = minMax;
  // if the score passed in is greater than the max, set it to the max value
  if (score > max) score = max;

  return (
    <span>
      <p>
        {min === 0 ? (
          <>
            <strong>{score}</strong> / {max}
          </>
        ) : (
          <>0 / {max}</>
        )}
      </p>
    </span>
  );
}

export default CurrentScore;
