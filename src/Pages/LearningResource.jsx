import React, { useEffect, useRef } from 'react';
import ResourceSidebar from '../Components/ResourceViewer/ResourceSidebar';
import ContentContainer from '../Components/ResourceViewer/ContentContainer';
import TopicList from '../Components/ResourceViewer/TopicList';
import '../Components/ResourceViewer/index.css';
import useDarkMode from '../Components/ResourceViewer/useDarkMode';

const LearningResource = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();


  return (
    <div className="flex bg-[#F2F2F2] dark:bg-gray-900">
      <ResourceSidebar />

      <TopicList courseId={"1"} />

      <ContentContainer />
    </div>
  );
};

export default LearningResource;
