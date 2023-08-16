import React from 'react';

import styled from 'styled-components';

import CompletionBar from '../../components/CompletionBar';
import CurrentScore from '../../components/CurrentScore';
import Footer from '../../components/Footer';
import { getMaxPossibleScore } from '../../utils/getMaxScore';
import QuestionList from '../../components/QuestionList';
import RemainingQuestions from '../../components/RemainingQuestions';
import { useQuizData } from '../../contexts/QuizDataContext';

/**
 * Layout for the game UI, including the status bar, the questions and timer
 */
function GamePage() {
  const { score, index, questions } = useQuizData();

  return (
    <Wrapper>
      <CompletionBar
        styles='player-status-bar'
        progress={index}
        minMax={[1, questions.length]}
        label='Remaining Questions'
      >
        <RemainingQuestions currentQuestion={index + 1} totalQuestions={15} />
        <CurrentScore
          score={score}
          minMax={[0, getMaxPossibleScore(questions)]}
        />
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
