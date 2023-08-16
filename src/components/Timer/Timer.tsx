import React, { useEffect } from 'react';

import styled from 'styled-components';

import { useQuizData } from '../../contexts/QuizDataContext';

/**
 * The timer which determines how long the user has left until the end of the game
 */
function Timer() {
  const { dispatch, secondsRemaining } = useQuizData();

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsRemaining <= 0) {
        clearInterval(interval); // clear the interval when finished
        dispatch({ type: 'finishGame' });
      } else {
        dispatch({ type: 'countDown' });
      }
    }, 1000);

    return () => clearInterval(interval); // clear the interval when the component unmounts
  }, [dispatch, secondsRemaining]); // re-run the effect when secondsRemaining changes

  // Calculate minutes and seconds from the total seconds
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <Wrapper role='timer' aria-label='Countdown Timer'>
      <span id='minutes'>{String(minutes).padStart(2, '0')}</span>:
      <span id='seconds'>{String(seconds).padStart(2, '0')}</span>
    </Wrapper>
  );
}

export default Timer;

const Wrapper = styled.div`
  background-color: var(--bg-primary-400);
  border: 2px solid var(--bg-primary-300);
  border-radius: 100px;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1.2rem;
`;
