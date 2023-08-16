import React, { useContext } from 'react';

import styled from 'styled-components';

import Button from '../Button';
import { useQuizData } from '../../contexts/QuizDataContext';

type IntroProps = {};

/**
 *
 * The starting screen, will show the welcome, the number of questions the quiz has and the button to start the game
 */
function Intro({}: IntroProps) {
  const { questions, dispatch } = useQuizData();

  return (
    <Wrapper>
      <H2>Welcome to The React Quiz!</H2>

      <P>{questions.length} questions to test your React mastery</P>

      <Button
        onClick={() => {
          dispatch({ type: 'startGame' });
          dispatch({ type: 'changePage', payload: 'gamepage' });
        }}
        classList='btn'
      >
        Let's Start
      </Button>
    </Wrapper>
  );
}

export default Intro;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & :last-child {
    margin-top: 2rem;
    margin-inline: auto;
    width: 25%;
  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const P = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;
