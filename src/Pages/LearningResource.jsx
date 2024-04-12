import React, { useEffect, useRef, useState } from "react";
import ResourceSidebar from "../Components/ResourceViewer/ResourceSidebar";
import ContentContainer from "../Components/ResourceViewer/ContentContainer";
import TopicList from "../Components/ResourceViewer/TopicList";
import "../Components/ResourceViewer/index.css";
import useDarkMode from "../Components/ResourceViewer/useDarkMode";
import { viewerContext } from "../Components/ResourceViewer/viewerContext";
import { CompletionContext } from "../Components/ResourceViewer/CompletionContext"
import { CourseCompletionContext } from "../Components/ResourceViewer/CourseContext";
const LearningResource = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const courseId = "1";
  const batchId = "1";
  const topicsId = "2";
  const [view, setView] = useState();
  const [completion, setCompletion] = useState();
  const [courseCompletion, setCourseCompletion] = useState();
  return (
    <div className="flex bg-[#F2F2F2] dark:bg-gray-900 ">
      <CourseCompletionContext.Provider value={{ courseCompletion, setCourseCompletion }}>
        <viewerContext.Provider value={{ view, setView }}>
          <CompletionContext.Provider value={{ completion, setCompletion }}>
            <ResourceSidebar />

            <TopicList courseId={courseId} />

            <ContentContainer courseId={courseId} batch={batchId} />
          </CompletionContext.Provider>
        </viewerContext.Provider>
      </CourseCompletionContext.Provider>
    </div>
  );
};

export default LearningResource;
