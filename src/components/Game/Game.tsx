import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

function Game() {
  return (
    <Wrapper>
      <H2>Which is the most popular JavaScript framework?</H2>
      <QuestionList>
        <ListItem>
          <Button classList='btn'>Angular</Button>
        </ListItem>

        <ListItem>
          <Button classList='btn'>React</Button>
        </ListItem>

        <ListItem>
          <Button classList='btn'>Svelte</Button>
        </ListItem>

        <ListItem>
          <Button classList='btn'>Vue</Button>
        </ListItem>
      </QuestionList>
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
