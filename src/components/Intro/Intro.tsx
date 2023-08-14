import React, { useContext } from 'react';

import styled from 'styled-components';

import Button from '../Button';

import { PageContext } from '../../contexts/PageContext';
import { useQuizData } from '../../contexts/QuizDataContext';

function Intro() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePage must be used within a PageProvider');
  }
  const { changePage } = context;
  const { questions } = useQuizData();

  return (
    <Wrapper>
      <H2>Welcome to The React Quiz!</H2>

      <P>{questions.length} questions to test your React mastery</P>

      <Button onClick={() => changePage('gamepage')} classList='btn'>
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
