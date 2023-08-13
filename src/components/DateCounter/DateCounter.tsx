// Importing the useState hook from React for managing state within functional components
import { useState, ChangeEvent, FC, useReducer } from 'react';

type State = { count: number; step: number };

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'defineCount'; payload: number }
  | { type: 'defineStep'; payload: number }
  | { type: 'reset' };

const initialState: State = { count: 0, step: 1 };

/**
 * The reduce function for the date counter, when on a change event, the message increment is passed into the dispatch function then the state will be incremented by 1 and vice versa for decrement
 * @param state
 * @param action
 */
function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };

    case 'decrement':
      return { ...state, count: state.count - state.step };

    case 'defineCount':
      return { ...state, count: action.payload };

    case 'defineStep':
      return { ...state, step: action.payload };

    case 'reset':
      return { count: 0, step: 1 };
  }
}

/**
 * A Date Counter component that allows users to manipulate a date by increasing
 * or decreasing it according to a specified step.
 * The component provides UI controls to increment, decrement, reset the count, and define the step.
 */
const DateCounter: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create a new date object representing June 21, 2027
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + state.count); // Adjusting the date according to the count value

  // Rendering the UI elements for the Date Counter component
  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={state.step}
          onChange={(e) =>
            dispatch({ type: 'defineStep', payload: Number(e.target.value) })
          }
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <input
          value={state.count}
          onChange={(e) =>
            dispatch({ type: 'defineCount', payload: Number(e.target.value) })
          }
        />
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
};

// Exporting the component for usage in other parts of the application
export default DateCounter;
