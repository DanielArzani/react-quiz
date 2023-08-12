import React from 'react';
import styled from 'styled-components';

import HomePage from '../../pages/HomePage';
import reactLogo from '../../assets/react.svg';
import QuestionsPage from '../../pages/GamePage';

/**
 * The app it self, holds all of the content within it
 */
function App() {
  return (
    <Wrapper>
      <Header>
        <Img src={reactLogo} alt='React Logo' />
        <H1>The React Quiz</H1>
      </Header>

      <Main>
        {/* <HomePage /> */}
        <QuestionsPage />
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  margin-inline: auto;
  max-width: 654px;
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
  width: 100%;
`;
