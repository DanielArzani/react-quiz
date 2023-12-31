import React from 'react';

import styled from 'styled-components';

type CompletionBarProps = {
  progress: number;
  minMax: [number, number];
  label: string;
  styles?: string;
  children?: React.ReactNode;
};

/**
 * A bar which shows how many questions have been answered and how many are left. It can take up to 3 children which will be displayed underneath it to its left, middle and right. Note that they will be positioned in the order that they are added
 * @param progress The current value of the meter element, update this to change the meter
 * @param minMax The min value and max value of the meter. Note that min is the first element of the array and max is the second
 * @param label Text which describes what is being measured by the meter. Note that it will only be visible to screen readers, not to use sighted users
 * @param styles The styles in which to pass on to the meter, should be a string of space separated class names
 * @example
 * <CompletionBar progress={incrementProgress} minMax=[0, 100] label="Remaining Questions" styles="bar bar--green">
 * <RemainingQuestions progress={incrementProgress} />
 * </CompletionBar>
 */
function CompletionBar({
  progress,
  minMax,
  label,
  styles = '',
  children = null,
}: CompletionBarProps) {
  return (
    <Wrapper>
      <div>
        <span className='sr-only'>{label}</span>
        <meter
          className={styles}
          min={minMax[0]}
          max={minMax[1]}
          value={progress}
        ></meter>
      </div>

      <ChildLayout>{children}</ChildLayout>
    </Wrapper>
  );
}

export default CompletionBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const ChildLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;
