import React from 'react';

type RemainingQuestionsProps = {
  currentQuestion: number;
  totalQuestions: number;
};

/**
 * Displays the question that the user is on and the remaining left for them to answer
 * @param currentQuestion The question that the user is currently on
 * @param totalQuestions The total number of questions
 */
function RemainingQuestions({
  currentQuestion,
  totalQuestions,
}: RemainingQuestionsProps) {
  return (
    <span>
      <p>
        Question <strong>{currentQuestion}</strong> / {totalQuestions}
      </p>
    </span>
  );
}

export default RemainingQuestions;
