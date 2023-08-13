import React, { useState } from 'react';
import styled from 'styled-components';

import HomePage from '../../pages/HomePage';
import reactLogo from '../../assets/react.svg';
import GamePage from '../../pages/GamePage';

import { PageType } from '../../types/PageType';

import { PageContext } from '../../contexts/PageContext';
/**
 * The app it self, holds all of the content within it
 */
function App() {
  const [page, setPage] = useState<PageType>('homepage');

  /**
   * Changes the page of the application
   * @param pageName The name of the page component to change to
   */
  function changePage(pageName: PageType) {
    setPage(pageName);
  }

  return (
    <PageContext.Provider value={{ changePage }}>
      <Wrapper>
        <Header className=''>
          <Img src={reactLogo} alt='React Logo' />
          <H1>The React Quiz</H1>
        </Header>

        <Main className='center'>
          {page === 'homepage' && <HomePage />}
          {page === 'gamepage' && <GamePage />}
        </Main>
      </Wrapper>
    </PageContext.Provider>
  );
}

export default App;

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
