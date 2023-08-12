import React from 'react';
import CompletionBar from '../../components/CompletionBar';
import RemainingQuestions from '../../components/RemainingQuestions';
import CurrentScore from '../../components/CurrentScore';
import styled from 'styled-components';

/**
 * Holds the questions themselves along with the users current status and score
 */
function GamePage() {
  return (
    <Wrapper>
      <div>
        <CompletionBar
          styles='player-status-bar'
          progress={50}
          minMax={[0, 100]}
          label='Remaining Questions'
        >
          <RemainingQuestions currentQuestion={1} totalQuestions={15} />
          <CurrentScore
            calculateScoreFunction={() => 0}
            numberOfCorrectAnswers={0}
            minMax={[0, 280]}
          />
        </CompletionBar>
      </div>

      <div>
        <H2>Which is the most popular JavaScript framework?</H2>
        <QuestionList>
          <ListItem>
            <button className='btn'>Angular</button>
          </ListItem>

          <ListItem>
            <button className='btn'>React</button>
          </ListItem>

          <ListItem>
            <button className='btn'>Svelte</button>
          </ListItem>

          <ListItem>
            <button className='btn'>Vue</button>
          </ListItem>
        </QuestionList>
      </div>

      <div>
        <Timer role='timer' aria-label='Countdown Timer'>
          <span id='minutes'>05</span>:<span id='seconds'>00</span>
        </Timer>

        <button className='btn'>Next</button>
      </div>
    </Wrapper>
  );
}

export default GamePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* TODO: Move these when I move the code into its own component */
  & > div:nth-child(2) {
    align-self: center;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-inline: 3rem;
  }
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

const Timer = styled.div`
  background-color: var(--bg-primary-400);
  border: 2px solid var(--bg-primary-300);
  border-radius: 100px;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1.2rem;
`;
