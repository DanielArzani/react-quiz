import React from 'react';

import reactLogo from '../../assets/react.svg';
import Intro from '../../components/Intro';

function HomePage() {
  return (
    <>
      <header>
        <img src={reactLogo} alt='React Logo' />
        <h1>React Quiz</h1>
      </header>

      <main>
        <Intro />
      </main>
    </>
  );
}

export default HomePage;
