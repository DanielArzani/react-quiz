// Importing the useState hook from React for managing state within functional components
import { useState, ChangeEvent, FC } from 'react';

/**
 * A Date Counter component that allows users to manipulate a date by increasing
 * or decreasing it according to a specified step.
 * The component provides UI controls to increment, decrement, reset the count, and define the step.
 */
const DateCounter: FC = () => {
  // State variable to hold the count value, initialized to 0
  const [count, setCount] = useState<number>(0);

  // State variable to hold the step value by which the date is incremented or decremented, initialized to 1
  const [step, setStep] = useState<number>(1);

  // Create a new date object representing June 21, 2027
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count); // Adjusting the date according to the count value

  // Function to decrement the count by the step value
  const dec = function () {
    setCount((count) => count - step);
  };

  // Function to increment the count by the step value
  const inc = function () {
    setCount((count) => count + step);
  };

  // Function to set the count value based on the user input
  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    setCount(Number(e.target.value));
  };

  // Function to set the step value based on the user input
  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    setStep(Number(e.target.value));
  };

  // Function to reset both the count and step values to their initial state
  const reset = function () {
    setCount(0);
    setStep(1);
  };

  // Rendering the UI elements for the Date Counter component
  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

// Exporting the component for usage in other parts of the application
export default DateCounter;
