import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

function Intro() {
  return (
    <Wrapper>
      <h2>Welcome to The React Quiz!</h2>

      <p>15 questions to test your React mastery</p>

      <Button>Let's Start</Button>
    </Wrapper>
  );
}

export default Intro;

const Wrapper = styled.div``;
