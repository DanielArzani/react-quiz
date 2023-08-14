import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { QuizDataType } from '../../types/QuizDataType';

type GameProps = {
  data: QuizDataType;
};

/**
 * The UI for the core of quiz game itself, in other words, the list of questions and answers
 * @param data The list of questions and their associated data
 */
function Game({ data }: GameProps) {
  return (
    <Wrapper>
      {data.map((d, i) => {
        return (
          <div key={i}>
            <H2>{d.question}</H2>
            <QuestionList>
              <ListItem>
                <Button onClick={() => {}} classList='btn'>
                  {'Quiz Question'}
                </Button>
              </ListItem>
            </QuestionList>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default Game;

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
