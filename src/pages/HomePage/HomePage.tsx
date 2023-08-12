import React from 'react';

import reactLogo from '../../assets/react.svg';
import Intro from '../../components/Intro';
import styled from 'styled-components';

function HomePage() {
  return (
    <>
      <Header>
        <Img src={reactLogo} alt='React Logo' />
        <H1>The React Quiz</H1>
      </Header>

      <main>
        <Intro />
      </main>
    </>
  );
}

export default HomePage;

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
  font-size: 3.5rem;
  font-weight: 700;
`;
