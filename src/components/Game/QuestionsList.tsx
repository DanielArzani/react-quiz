import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import Button from '../Button';

import { useQuizData } from '../../contexts/QuizDataContext';

type QuestionsListProps = {};

/**
 * Displays the list of questions and answers, one question at a time
 */
function QuestionsList({}: QuestionsListProps) {
  const { questions, index } = useQuizData();

  const q = questions[index];

  return (
    <Wrapper>
      <H2>{q.question}</H2>
      <QuestionList>
        {q.options.map((choices, i) => {
          return (
            <ListItem key={choices}>
              <Button onClick={() => {}} classList='btn'>
                {choices}
              </Button>
            </ListItem>
          );
        })}
      </QuestionList>
    </Wrapper>
  );
}

export default QuestionsList;

const Wrapper = styled.div`
  align-self: center;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const H2 = styled.h2`
  font-weight: bold;
`;

const QuestionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  list-style-type: none;
`;

const ListItem = styled.li`
  font-size: 1.25rem;

  & > button {
    font-size: inherit;
    text-align: start;
    transition: all 0.25s ease-in-out;
    width: 100%;
  }

  & > button:hover {
    transform: translateX(15px);
  }
`;
