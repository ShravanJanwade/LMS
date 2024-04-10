import { createContext, useContext } from "react";

interface ViewerContextType {
  view: 
  {
    id:number | string,
    type: "ppt" | "pdf" | "youtubeVideo" | "sharePointVideo" | "docx" | undefined,
    name: string,
    source: string,
    progress: number
  }; // Define the type of 'view'
  setView: React.Dispatch<React.SetStateAction<string>>; // Define the type of 'setView'
}

export const viewerContext = createContext<ViewerContextType | undefined>(undefined);


