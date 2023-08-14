import React, { useEffect, useReducer } from 'react';
import CompletionBar from '../../components/CompletionBar';
import RemainingQuestions from '../../components/RemainingQuestions';
import CurrentScore from '../../components/CurrentScore';
import styled from 'styled-components';
import Game from '../../components/Game';
import Footer from '../../components/Footer';
import useFetch from '../../hooks/useFetch';
import { QuizDataType } from '../../types/QuizDataType';
import { StatusTypes } from '../../types/StatusTypes';
import Loader from '../../components/Loader';

/**
 * Layout for the game UI, including the status bar, the questions and timer
 */
function GamePage() {
  return (
    <Wrapper>
      <CompletionBar
        styles='player-status-bar'
        progress={50}
        minMax={[0, 100]}
        label='Remaining Questions'
      >
        <RemainingQuestions currentQuestion={1} totalQuestions={15} />
        <CurrentScore
          calculateScoreFunction={() => 0}
          numberOfCorrectAnswers={0}
          minMax={[0, 280]}
        />
      </CompletionBar>

      <Game data={[]} />

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
