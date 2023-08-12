import React from 'react';
import HomePage from '../../pages/HomePage';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  padding-block-start: 3rem;
  min-height: 100%;
`;
