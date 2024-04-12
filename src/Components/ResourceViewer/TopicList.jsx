import { useContext, useEffect, useState } from "react";
import { BsHash } from "react-icons/bs";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";
import { Courses, topics } from "../../Data/Courses";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import {
  Checkbox,
  Card,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import TickMark from "../../../public/icons8-tick.gif";
import useDarkMode from "./useDarkMode";
import { viewerContext } from "./viewerContext";
import AnimatedProgressProvider from "../AnimatedProgressProvider";
import { CompletionContext } from "./CompletionContext";
import { data } from "autoprefixer";
import { render } from "react-dom";
// import topics from '../../Data/Courses'
// const topics = ['tailwind-css', 'react'];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];

const TopicList = ({ courseId }) => {
  const course = Courses.find((course) => course.courseId === courseId);
  console.log(JSON.stringify(course));
  const [darkTheme, setDarkTheme] = useDarkMode();

  return (
    <div className="channel-bar bg-gray-300 dark:bg-[#313338] shadow-lg w-[800px] ">
      {/* enter course Name here */}
      <ChannelBlock CourseName={course.courseName} />
      <div className="channel-container ">
        <Card className=" overflow-auto min-h-[800px] max-h-screen bg-[#D5D5D5] dark:bg-[#36373d]  pb-36 p-3">
          {course.topics.map((topic, index) => (
            <Dropdown
              key={index}
              header={topic.topicName}
              selections={topics}
            />
          ))}
        </Card>
      </div>
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Accordion open={expanded} className="dropdown m-1 ">
      <AccordionHeader
        onClick={() => setExpanded(!expanded)}
        className={
          expanded
            ? "dropdown-header-text-selected text-blue-500 dark:text-[#f8f8f8]"
            : "dropdown-header-text text-gray-500  dark:text-[#949ba4]"
        }
      >
        {header}
      </AccordionHeader>
      <AccordionBody className="dropdown-selection">
        <p>
          <ResourceBlock resources={selections} />
          {/* {JSON.stringify(selections)} */}
        </p>
      </AccordionBody>
    </Accordion>

    // {/* {expanded &&
    //   selections &&
    //   selections.map((selection) => <TopicSelection selection={selection} />)} */}
  );
};

const ResourceBlock = (props) => {
  const contextValue = useContext(viewerContext);
  let view = contextValue?.view;
  let setView = contextValue?.setView;
  const {completion,setCompletion} = useContext(CompletionContext);

  // const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (data) => {
    // Set the view to the clicked data
    // setProgress({id:data.id,progress:data.progress})
    setView({id:data.id,type:data.type,source:data.source,progress:data.progress});

  };

  

  useEffect(()=>{
    console.log(JSON.stringify(completion))
  },[completion])



  return (
    <Card className="h-full w-[450px] m-1 dark:bg-[#53555f]   bg-gray-200">
      <table className="w-full min-w-max table-auto text-left ">
        <thead></thead>
        <tbody>
          {props.resources.map((data, index) => {
            const classes = "p-4 border-b border-blue-gray-50 ";
            // Apply conditional styling to highlight the selected item
            const rowClasses = `   hover:bg-blue-gray-100 hover:dark:bg-[#36373d]  hover:dark:text-green-200 dark:text-gray-100 rounded-lg ${
              view?.id === data.id ? "dark:bg-[#45a049] bg-green-200" : ""
            }`;
           
            
            return (
              <tr
                key={index}
                className={rowClasses}
                onClick={() => handleClick(data)}
              >
                <td className={classes}>
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-normal"
                  >
                    {data.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-normal"
                  >
                    {data.type}
                  </Typography>
                </td>
                <td className={classes}>
                  <CompletionMarker progress={data.id===completion?.topicId?completion.progress :data.progress} type={data.type} renderId={data.id} viewId={view?.id}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

const CompletionMarker = ({ progress, type,renderId,viewId }) => {

  
  // const [indvidualProgress,setIndividualProgress] = useState(progress)

  // const {progress,setProgress} = useContext(CompletionContext);
  // if(renderId==viewId){
  //   setProgress({id:viewId,progress:100})
  //   //TODO-send axios request updating progress
  // }
 


  

  return (
    <div>
      {type != "youtubeVideo" ? (
        progress<95 ? (
          <RiCheckboxBlankCircleFill size="34" className="text-gray-500/25" />
        ) : (
          <RiCheckboxCircleFill size="34" className="text-green-200" />
        )
      ) : progress<95 ? (
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={progress}
          duration={0.9}
          easingFunction={easeQuadInOut}
          repeat
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <div className="w-7 h-7">
                <CircularProgressbar
                  value={progress}

                  /* This is important to include, because if you're fully managing the
            animation yourself, you'll want to disable the CSS animation. */
                />
              </div>
            );
          }}
        </AnimatedProgressProvider>
      ) :
      (<RiCheckboxCircleFill size="34" className="text-green-200" />)
    }
    </div>
  );
};

const ChannelBlock = (props) => (
  <div className="channel-block ">
    <h5 className="channel-block-text">{props.CourseName}</h5>
  </div>
);

export default TopicList;
