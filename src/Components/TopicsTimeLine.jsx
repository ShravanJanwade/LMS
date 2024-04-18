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

import ProgressTopic from "./ProgressTopic";


export function TopicsTimeLine(props) {
  //TODO - get userID from auth
  const userID = 11660
  //TODO get batch ID from session
  const batchID= 1;


  return (
    <div className="w-full">
      <Timeline>
        {props.topics.map((data, key) => (
          
          <TimelineItem key={key} className="min-h-20 mt-5">
            <TimelineConnector className="mt-6 !w-[150px ] " />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-0 h-[3.3rem] w-[3.3rem]" variant="ghost">
               
                <ProgressTopic userID={userID} batchID={batchID} topicID={data.topicId} />

              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  {data.topicName}
                </Typography>

                <Typography
                  color="gray"
                  className="text-xs" // Applying text-xs class to reduce text size
                >
                  Duration: {data.startDate} to {data.endDate}     
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
