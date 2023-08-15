import React from 'react';
import styled from 'styled-components';

import { useQuizData } from '../../contexts/QuizDataContext';
import { getMaxPossibleScore } from '../../utils/getMaxScore';
import { convertScoreToPercentage } from '../../utils/convertScoreToPercentage';

// let emoji;
// if (percentage === 100) emoji = "🥇";
// if (percentage >= 80 && percentage < 100) emoji = "🎉";
// if (percentage >= 50 && percentage < 80) emoji = "🙃";
// if (percentage >= 0 && percentage < 50) emoji = "🤨";
// if (percentage === 0) emoji = "🤦‍♂️";

const listOfEmojis = [
  { fail: '🤦‍♂️' },
  { barelyPass: '🤨' },
  { alright: '🙃' },
  { excellent: '🎉' },
  { fullScore: '🥇' },
];

function ResultsBanner() {
  const { score, questions } = useQuizData();

  const maxScore = getMaxPossibleScore(questions);
  let convertedScore = 0;
  if (maxScore !== 0) {
    convertedScore = convertScoreToPercentage(score, maxScore);
  }

  return (
    <Wrapper>
      <BannerStyles>
        <P>
          You scored <span>{score}</span> out of{' '}
          <span>{getMaxPossibleScore(questions)}</span> (
          <span>{convertedScore}</span>%)
        </P>
      </BannerStyles>
    </Wrapper>
  );
}

export default ResultsBanner;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerStyles = styled.div`
  background-color: var(--lightBlue-400);
  border-radius: 100px;
  padding: 1rem 4rem;
`;

const P = styled.p`
  font-weight: bold;
`;
