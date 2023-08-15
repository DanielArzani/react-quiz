import React from 'react';
import styled from 'styled-components';
import ResultsBanner from '../../components/ResultsBanner';
import Button from '../../components/Button';
import { useQuizData } from '../../contexts/QuizDataContext';

/**
 * The page which is displayed after the game is over with the final results as well as a way to restart the game
 */
function FinalResultsPage() {
  const { score, dispatch } = useQuizData();

  return (
    <Wrapper>
      <ResultsBanner />

      <FinalScore>
        (Highscore: <span>{score}</span> points)
      </FinalScore>

      <ButtonWrapper>
        <Button classList='btn'>Restart Quiz</Button>
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

const ButtonWrapper = styled.button`
  align-self: end;

  background-color: transparent;
  border: none;
`;
