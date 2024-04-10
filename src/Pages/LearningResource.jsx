import React, { useEffect, useRef, useState } from "react";
import ResourceSidebar from "../Components/ResourceViewer/ResourceSidebar";
import ContentContainer from "../Components/ResourceViewer/ContentContainer";
import TopicList from "../Components/ResourceViewer/TopicList";
import "../Components/ResourceViewer/index.css";
import useDarkMode from "../Components/ResourceViewer/useDarkMode";
import { viewerContext } from "../Components/ResourceViewer/viewerContext";
const LearningResource = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const courseId = "1";
  const batchId = "1";
  const topicsId = "2";
  const [view,setView] =useState();
  return (
    <div className="flex bg-[#F2F2F2] dark:bg-gray-900 ">
      <viewerContext.Provider value={{view,setView}}>
        <ResourceSidebar />

        <TopicList courseId={courseId} />

        <ContentContainer courseId={courseId} batch={batchId} />
      </viewerContext.Provider>
    </div>
  );
};

export default LearningResource;
