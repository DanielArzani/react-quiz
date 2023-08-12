import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

function Intro() {
  return (
    <Wrapper>
      <H2>Welcome to The React Quiz!</H2>

      <P>15 questions to test your React mastery</P>

      <Button className='btn'>Let's Start</Button>
    </Wrapper>
  );
}

export default Intro;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  & :last-child {
    margin-top: 2rem;
    margin-inline: auto;
    width: 25%;
  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;
