import React from 'react';
import styled from 'styled-components';
import ResultsBanner from '../../components/ResultsBanner';
import Button from '../../components/Button';
import { useQuizData } from '../../contexts/QuizDataContext';

/**
 * The page which is displayed after the game is over with the final results as well as a way to restart the game
 */
function FinalResultsPage() {
  const { score, dispatch, highScore } = useQuizData();

  return (
    <Wrapper>
      <ResultsBanner />

      <FinalScore>
        (Highscore: <span>{highScore}</span> points)
      </FinalScore>

      <ButtonWrapper>
        <Button
          onClick={() => dispatch({ type: 'restartGame' })}
          classList='btn'
        >
          Restart Quiz
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default FinalResultsPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const FinalScore = styled.p``;

const ButtonWrapper = styled.div`
  align-self: end;
`;
