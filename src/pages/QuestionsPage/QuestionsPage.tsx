import React from 'react';
import CompletionBar from '../../components/CompletionBar';
import RemainingQuestions from '../../components/RemainingQuestions';
import CurrentScore from '../../components/CurrentScore';

function QuestionsPage() {
  return (
    <div>
      <CompletionBar progress={0} minMax={[0, 100]} label='Remaining Questions'>
        <RemainingQuestions currentQuestion={1} totalQuestions={15} />
        <CurrentScore
          calculateScoreFunction={() => 0}
          numberOfCorrectAnswers={0}
          minMax={[0, 280]}
        />
      </CompletionBar>
    </div>
  );
}

export default QuestionsPage;
