import { useState } from 'react';

// Custom hook to manage state with localStorage
function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // If no value in localStorage, return the initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If an error occurs, return the initialValue
      console.error(error);
      return initialValue;
    }
  });

  // Setter function to be used to update the state
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Set state
      setStoredValue(valueToStore);
      // Save state to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
