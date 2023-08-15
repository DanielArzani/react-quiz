import React from 'react';
import CompletionBar from '../../components/CompletionBar';
import RemainingQuestions from '../../components/RemainingQuestions';
import CurrentScore from '../../components/CurrentScore';
import styled from 'styled-components';
import Game from '../../components/QuestionList';
import Footer from '../../components/Footer';
import { useQuizData } from '../../contexts/QuizDataContext';
import QuestionList from '../../components/QuestionList';

/**
 * Will take in the current score and the number of points that the user has gotten and adds them together and returns the sum
 * @param currentScore The current score of the user
 * @param newPoints The points the user has recently scored
 */
function calculateScore(currentScore: number, newPoints: number): number {
  let sum = 0;
  if (isNaN(currentScore) || isNaN(newPoints)) {
    return sum;
  } else {
    const sum = currentScore + newPoints;
    return sum;
  }
}

/**
 * Layout for the game UI, including the status bar, the questions and timer
 */
function GamePage() {
  const { score, index } = useQuizData();

  return (
    <Wrapper>
      <CompletionBar
        styles='player-status-bar'
        progress={score}
        minMax={[0, 280]}
        label='Remaining Questions'
      >
        <RemainingQuestions currentQuestion={index + 1} totalQuestions={15} />
        <CurrentScore score={score} minMax={[0, 280]} />
      </CompletionBar>

      <QuestionList />

      <Footer />
    </Wrapper>
  );
}

export default GamePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
