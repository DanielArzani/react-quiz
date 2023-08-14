import React from 'react';

import Intro from '../../components/Intro';

import { Action } from '../../components/app/App';

type HomePageProps = {
  dispatch: React.Dispatch<Action>;
};

/**
 * The initial page that users see, holds the introduction and the button to start the game
 * @param dispatch The function to set the state, here only to be passed down as a prop
 */
function HomePage({ dispatch }: HomePageProps) {
  return <Intro dispatch={dispatch} />;
}

export default HomePage;
