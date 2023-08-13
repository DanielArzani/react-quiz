import React from 'react';
import CompletionBar from '../../components/CompletionBar';
import RemainingQuestions from '../../components/RemainingQuestions';
import CurrentScore from '../../components/CurrentScore';
import styled from 'styled-components';
import Game from '../../components/Game';
import Footer from '../../components/Footer';
import useFetch from '../../hooks/useFetch';
import { QuestionType } from '../../types/QuestionType';

/**
 * Holds everything related to the game play and scoring of the quiz app, also fetches the data for questions
 */
function GamePage() {
  const { data, loading, error } = useFetch<QuestionType>(
    '/public/data/questions.json'
  );

  if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>;
  if (error)
    return <ErrorWrapper>An error occurred: {error.message}</ErrorWrapper>;

  const gameData = data?.questions;

  if (!gameData) return <LoadingWrapper>Loading...</LoadingWrapper>;

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

      <Game questions={gameData} />

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

const LoadingWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: #333;
`;

const ErrorWrapper = styled.div`
  font-size: 1rem;
  text-align: center;
  color: red;
  border: 1px solid red;
  padding: 1rem;
  margin: 1rem;
  background-color: #fdd;
`;
