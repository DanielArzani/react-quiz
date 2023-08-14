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

//********************
//      STATE
//********************
type State = {
  questions: QuizDataType;
  status: StatusTypes;
  errorObject: Error | null;
};

const initialState: State = {
  questions: [] as QuizDataType,
  status: 'loading',
  errorObject: null,
};

export type Action =
  | { type: 'dataReceived'; payload: QuizDataType }
  | { type: 'dataFailed'; payload: Error };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return { ...state, status: 'error', errorObject: action.payload };

    default:
      return state;
  }
}

/**
 * Holds everything related to the game play and scoring of the quiz app, also fetches the data for questions
 */
function GamePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, error } = useFetch<QuizDataType>(
    'http://localhost:8000/questions'
  );

  // In order to update the state which cannot be updated within the render logic (else we would get an infinite loop) useEffect hooks were required since I didn't want to move the dispatch function into the useFetch hook
  useEffect(() => {
    if (data) dispatch({ type: 'dataReceived', payload: data });
  }, [data]);

  useEffect(() => {
    if (error) dispatch({ type: 'dataFailed', payload: error });
  }, [error]);

  if (state.status === 'error') {
    return (
      <ErrorWrapper>
        An error occurred: {state.errorObject?.message}
      </ErrorWrapper>
    );
  }

  if (state.questions.length === 0) {
    return <Loader />;
  }

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

      <Game data={state.questions} />

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

const ErrorWrapper = styled.div`
  font-size: 1rem;
  text-align: center;
  color: red;
  border: 1px solid red;
  padding: 1rem;
  margin: 1rem;
  background-color: #fdd;
`;
