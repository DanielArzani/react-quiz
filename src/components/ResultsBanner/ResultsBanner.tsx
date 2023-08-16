import React from 'react';
import styled from 'styled-components';

import { useQuizData } from '../../contexts/QuizDataContext';
import { getMaxPossibleScore } from '../../utils/getMaxScore';
import { convertScoreToPercentage } from '../../utils/convertScoreToPercentage';

const emojis = {
  fail: '🤦‍♂️',
  barelyPass: '🤨',
  alright: '🙃',
  excellent: '🎉',
  fullScore: '🥇',
};

function getEmojiForScore(percentage: number) {
  if (percentage === 0) return emojis.fail;
  if (percentage < 50) return emojis.barelyPass;
  if (percentage < 80) return emojis.alright;
  if (percentage < 100) return emojis.excellent;
  return emojis.fullScore; // for 100%
}

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
          <Emoji>{getEmojiForScore(convertedScore)}</Emoji> You scored
          <span>
            <span>{score}</span> out of
            <span> {getMaxPossibleScore(questions)}</span> (
            <span>{convertedScore}</span>%)
          </span>
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
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: bold;
`;

const Emoji = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;
