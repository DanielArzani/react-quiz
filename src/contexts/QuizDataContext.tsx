import React, { createContext, useContext, ReactNode } from 'react';
import { State, Action } from '../components/app/App';

export type QuizDataContextType = State & {
  dispatch: React.Dispatch<Action>;
};

const QuizDataContext = createContext<QuizDataContextType | undefined>(
  undefined
);

type QuizDataProviderProps = {
  value: QuizDataContextType;
  children: ReactNode;
};

export const useQuizData = () => {
  const context = useContext(QuizDataContext);
  if (context === undefined) {
    throw new Error('useQuizData must be used within a QuizDataProvider');
  }
  return context;
};

export function QuizDataProvider({ children, value }: QuizDataProviderProps) {
  return (
    <QuizDataContext.Provider value={value}>
      {children}
    </QuizDataContext.Provider>
  );
}
