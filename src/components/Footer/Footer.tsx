import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <Timer role='timer' aria-label='Countdown Timer'>
        <span id='minutes'>05</span>:<span id='seconds'>00</span>
      </Timer>

      <button className='btn'>Next</button>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 3rem;
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
