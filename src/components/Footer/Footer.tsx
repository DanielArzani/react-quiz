import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

import Button from '../Button';
import { useQuizData } from '../../contexts/QuizDataContext';
import Timer from '../Timer';

/**
 * The foot of the quiz game, holds the timer and the next button
 */
function Footer() {
  const { answer, dispatch, index, questions } = useQuizData();
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  const hasAnswered = answer != null;
  const maxNumOfQuestions = questions.length - 1;

  // Have the next button be focused on when the user chooses an answer
  useEffect(() => {
    if (hasAnswered) {
      if (nextButtonRef.current) {
        nextButtonRef.current.focus();
      }
    }
  }, [answer]);

  return (
    <Wrapper>
      <Timer />

      {hasAnswered && index < maxNumOfQuestions && (
        <Button
          ref={nextButtonRef}
          onClick={() => dispatch({ type: 'nextQuestion' })}
          classList='btn'
        >
          Next
        </Button>
      )}

      {index >= maxNumOfQuestions && (
        <Button
          ref={nextButtonRef}
          onClick={() => dispatch({ type: 'finishGame' })}
          classList='btn'
        >
          Finish
        </Button>
      )}
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
