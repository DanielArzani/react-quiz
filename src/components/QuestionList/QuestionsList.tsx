import React, { useEffect, useReducer, useRef } from 'react';

import styled from 'styled-components';

import Button from '../Button';
import { useQuizData } from '../../contexts/QuizDataContext';

type QuestionsListProps = {};

/**
 * Displays the list of questions and answers, one question at a time
 */
function QuestionsList({}: QuestionsListProps) {
  const { questions, index, dispatch, answer } = useQuizData();
  const firstButtonRef = useRef<HTMLButtonElement | null>(null);

  const q = questions[index];
  const hasAnswered = answer != null;

  // Have the first button be focused on at the start of each question
  useEffect(() => {
    if (firstButtonRef.current) {
      firstButtonRef.current.focus();
    }
  }, [questions, index]);

  /**
   * Constructs and returns the class names for a button based on its index. Made to avoid the ugliness that is nested ternary operators
   * @param optionIndex - The index of the current option/button.
   * @return - A space-separated string of class names.
   */
  const getButtonClass = (optionIndex: number): string => {
    // Start with the base class names for every button.
    let classNames = ['btn', 'btn-option'];

    // If an answer has been selected:
    if (hasAnswered) {
      // If the current option was the one selected by the user, add the 'answer' class.
      if (optionIndex === answer) {
        classNames.push('answer');
      }

      // If the current option is the correct answer, add the 'correct' class.
      // Otherwise, add the 'wrong' class.
      if (optionIndex === q.correctOption) {
        classNames.push('correct');
      } else {
        classNames.push('wrong');
      }
    }

    // Join the array of class names into a space-separated string.
    return classNames.join(' ');
  };

  return (
    <Wrapper>
      <H2>{q.question}</H2>
      <QuestionList>
        {q.options.map((choices, i) => {
          return (
            <ListItem key={choices}>
              <Button
                ref={i === 0 ? firstButtonRef : null}
                onClick={() => {
                  dispatch({
                    type: 'newAnswer',
                    payload: {
                      chosenAnswer: i,
                      addToScore: i === q.correctOption ? q.points : 0,
                    },
                  });
                }}
                classList={getButtonClass(i)}
                disabled={hasAnswered}
              >
                {choices}
              </Button>
            </ListItem>
          );
        })}
      </QuestionList>
    </Wrapper>
  );
}

export default QuestionsList;

const Wrapper = styled.div`
  align-self: start;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
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
`;
