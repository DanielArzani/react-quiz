import React, { useEffect, useReducer } from 'react';

import styled from 'styled-components';

import FinalResultsPage from '../../pages/FinalResultsPage';
import GamePage from '../../pages/GamePage';
import HomePage from '../../pages/HomePage';
import Loader from '../Loader';
import { PageType } from '../../types/PageType';
import { QuizDataProvider } from '../../contexts/QuizDataContext';
import { QuizDataType } from '../../types/QuizDataType';
import reactLogo from '../../assets/react.svg';
import { StatusTypes } from '../../types/StatusTypes';
import useFetch from '../../hooks/useFetch';

import localData from '../../../public/data/questions.json';

//********************
//      STATE
//********************
export type State = {
  questions: QuizDataType;
  status: StatusTypes;
  errorObject: Error | null;
  index: number; // This is the question number
  answer: number | null; // This is the users answer
  score: number;
  currentPage: PageType;
  highScore: number; // not stored in localStorage but remembered across re-renders
  secondsRemaining: number;
};

const initialState: State = {
  questions: [] as QuizDataType,
  status: 'loading',
  errorObject: null,
  index: 0,
  answer: null,
  score: 0,
  currentPage: 'homepage',
  highScore: 0,
  secondsRemaining: 0,
};

export type Action =
  | { type: 'dataReceived'; payload: QuizDataType }
  | { type: 'dataFailed'; payload: Error }
  | { type: 'startGame' }
  | {
      type: 'newAnswer';
      payload: { chosenAnswer: number; addToScore: number };
    }
  | { type: 'nextQuestion' }
  | { type: 'changePage'; payload: PageType }
  | { type: 'restartGame' }
  | { type: 'finishGame' }
  | { type: 'countDown' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return { ...state, status: 'error', errorObject: action.payload };

    case 'startGame':
      function calculateTime() {
        const SEC_PER_QUESTION = 30;
        return state.questions.length * SEC_PER_QUESTION;
      }

      return { ...state, status: 'active', secondsRemaining: calculateTime() };

    case 'newAnswer':
      return {
        ...state,
        answer: action.payload.chosenAnswer,
        score: state.score + action.payload.addToScore,
      };

    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };

    case 'finishGame':
      const isHighScore =
        state.score > state.highScore ? state.score : state.highScore;

      return {
        ...state,
        answer: null,
        currentPage: 'resultsPage',
        status: 'finished',
        highScore: isHighScore,
        secondsRemaining: 0,
      };

    case 'countDown':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
      };

    case 'changePage':
      return { ...state, currentPage: action.payload };

    case 'restartGame':
      return {
        ...state,
        currentPage: 'homepage',
        index: 0,
        answer: null,
        status: 'ready',
        score: 0,
      };

    default:
      return state;
  }
}

/**
 * A quiz app
 */
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [rerender, setRerender] = React.useState<string>('');
  //& FOR DEVELOPMENT ONLY, USED WITH JSON-SERVER
  // const { data, error } = useFetch<QuizDataType>(
  //   'http://localhost:8000/questions'
  // );

  //& COMMENT OUT IN DEVELOPMENT
  const data = localData.questions;

  // In order to update the state which cannot be updated within the render logic (else we would get an infinite loop) useEffect hooks were required since I didn't want to move the dispatch function into the useFetch hook
  useEffect(() => {
    if (data) dispatch({ type: 'dataReceived', payload: data });
  }, [data]);

  //& UN-COMMENT IN DEVELOPMENT
  // useEffect(() => {
  //   if (error) dispatch({ type: 'dataFailed', payload: error });
  // }, [error]);

  // Data that is shared throughout the app
  const quizDataContext = {
    questions: state.questions,
    status: state.status,
    errorObject: state.errorObject,
    index: state.index,
    answer: state.answer,
    dispatch: dispatch,
    score: state.score,
    currentPage: state.currentPage,
    highScore: state.highScore,
    secondsRemaining: state.secondsRemaining,
  };

  return (
    <QuizDataProvider value={quizDataContext}>
      <Wrapper>
        <Header>
          <Img src={reactLogo} alt='React Logo' />
          <H1>The React Quiz</H1>
        </Header>

        <Main className='center'>
          {state.status === 'error' && (
            <ErrorWrapper>
              An error occurred: {state.errorObject?.message}
            </ErrorWrapper>
          )}
          {state.status === 'loading' && <Loader />}
          {state.status === 'ready' && state.currentPage === 'homepage' && (
            <HomePage />
          )}
          {state.status === 'active' && state.currentPage === 'gamepage' && (
            <GamePage />
          )}
          {state.status === 'finished' &&
            state.currentPage === 'resultsPage' && <FinalResultsPage />}
        </Main>
      </Wrapper>
    </QuizDataProvider>
  );
}

export default App;

const ErrorWrapper = styled.div`
  font-size: 1rem;
  text-align: center;
  color: red;
  border: 1px solid red;
  padding: 1rem;
  margin: 1rem;
  background-color: #fdd;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  margin-inline: auto;
  min-height: 100%;
  padding-block-start: 3rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Img = styled.img`
  height: 140px;
  width: 140px;
`;

const H1 = styled.h1`
  font-family: 'Codystar';
  font-size: 3.5rem;
  font-weight: 700;
`;

const Main = styled.main`
  --measure: 556px;

  width: 100%;
`;
