import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import {
  CircularProgressbar,


  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import { useEffect } from "react";
import ProressService from "../Services/Progress/ProgressService";
import { useState } from "react";


export function TopicsTimeLine(props) {
  const [topicProgress, setTopicProgress] = useState([]);
  useEffect(() => {
    // Fetch progress for each topic
    props.topics.forEach(async (topic) => {
      try {
        const response = await ProressService.getUserProgressOfTopicsByID({
          userID: 1, // Assuming userID is always 1
          topicID: topic.topicId,
        });
        setTopicProgress((prevProgress) => [
          ...prevProgress,
          { topicId: topic.topicId, progress: response.topicProgress },
        ]);
      } catch (error) {
        console.error(`Error fetching progress for topic ${topic.topicId}:`, error);
      }
    });
  }, [props.topics]);


  return (
    <div className="w-full">
      <Timeline>
        {props.topics.map((data, key) => (
          
          <TimelineItem key={key} className="min-h-20 mt-5">
            <TimelineConnector className="mt-6 !w-[150px ] " />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-0 h-[3.3rem] w-[3.3rem]" variant="ghost">
              
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={
                    // Find the progress for the current topic
                    topicProgress.find((progress) => progress.topicId === data.topicId)?.progress || 0
                  }
                  duration={0.5}
                  easingFunction={easeQuadInOut}
                  repeat
                >
                  {value => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        /* This is important to include, because if you're fully managing the
                  animation yourself, you'll want to disable the CSS animation. */
                        // styles={buildStyles({ pathTransition: "none" })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  {data.topicName}
                </Typography>

                <Typography
                  color="gray"
                  className="text-xs" // Applying text-xs class to reduce text size
                >
                  Duration: {data.startDate} to {data.endDate}     TOpic id{JSON.stringify(data.topicId)}
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
