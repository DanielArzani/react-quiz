import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';

import reactLogo from '../../assets/react.svg';

import HomePage from '../../pages/HomePage';
import GamePage from '../../pages/GamePage';
import Loader from '../Loader';

import { PageType } from '../../types/PageType';
import { QuizDataType } from '../../types/QuizDataType';
import { StatusTypes } from '../../types/StatusTypes';

import { QuizDataProvider } from '../../contexts/QuizDataContext';

import useFetch from '../../hooks/useFetch';
import FinalResultsPage from '../../pages/FinalResultsPage';

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
};

const initialState: State = {
  questions: [] as QuizDataType,
  status: 'loading',
  errorObject: null,
  index: 0,
  answer: null,
  score: 0,
  currentPage: 'homepage',
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
  | { type: 'changePage'; payload: PageType };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return { ...state, status: 'error', errorObject: action.payload };

    case 'startGame':
      return { ...state, status: 'active' };

    case 'newAnswer':
      return {
        ...state,
        answer: action.payload.chosenAnswer,
        score: state.score + action.payload.addToScore,
      };

    case 'nextQuestion':
      const maxNumOfQuestions = state.questions.length;

      // TODO: Find out why the index only goes up to 13?
      // console.log({ index: state.index });
      if (state.index >= maxNumOfQuestions - 2) {
        return {
          ...state,
          index: maxNumOfQuestions,
          answer: null,
          currentPage: 'resultsPage',
          status: 'finished',
        };
      } else {
        return { ...state, index: state.index + 1, answer: null };
      }

    case 'changePage':
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
}

/**
 * A quiz app
 */
function App() {
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

  // Data that is shared throughout the app, only the dispatch function to set the state is passed down through props
  const quizDataContext = {
    questions: state.questions,
    status: state.status,
    errorObject: state.errorObject,
    index: state.index,
    answer: state.answer,
    dispatch: dispatch,
    score: state.score,
    currentPage: state.currentPage,
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
