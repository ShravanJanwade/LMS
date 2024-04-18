import { createContext, useContext } from "react";

type Completion = {
  resourceId: number;
  progress: number;
};

interface CompletionContextType {
  completion: Completion;
  setCompletion: React.Dispatch<React.SetStateAction<Completion>>; // 
}

const defaultContext = {
  completion: {
    resourceId: 0,
    progress: 0,
  },
  setCompletion: (completion: Completion) => {},
} as CompletionContextType;

export const CompletionContext =
  createContext<CompletionContextType>(defaultContext);
