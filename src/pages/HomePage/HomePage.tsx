import React from 'react';

import Intro from '../../components/Intro';

import { Action } from '../../components/app/App';

type HomePageProps = {};

/**
 * The initial page that users see, holds the introduction and the button to start the game
 */
function HomePage({}: HomePageProps) {
  return <Intro />;
}

export default HomePage;
