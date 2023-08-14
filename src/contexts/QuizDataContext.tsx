import React, { createContext, useContext, ReactNode } from 'react';
import { QuizDataType } from '../types/QuizDataType';
import { StatusTypes } from '../types/StatusTypes';

export type QuizDataContextType = {
  questions: QuizDataType;
  status: StatusTypes;
  errorObject: Error | null;
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
