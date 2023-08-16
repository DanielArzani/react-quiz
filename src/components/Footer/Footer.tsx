import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { useQuizData } from '../../contexts/QuizDataContext';

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
      <Timer role='timer' aria-label='Countdown Timer'>
        <span id='minutes'>05</span>:<span id='seconds'>00</span>
      </Timer>

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

const Timer = styled.div`
  background-color: var(--bg-primary-400);
  border: 2px solid var(--bg-primary-300);
  border-radius: 100px;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1.2rem;
`;
