import React ,{useEffect,useState} from 'react'
import AnimatedProgressProvider from './AnimatedProgressProvider';
import { CircularProgressbar } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import ProgressService from '../Services/Progress/ProgressService';

const ProgressTopic = ({userID,topicID,batchID}) => {
    const [progress,setProgress] = useState(null);
    useEffect(() => {
        const fetchData = async ({userID,batchID,topicID})=>{
            console.log("topic id",topicID)
            console.log("batch id",batchID)
            console.log("user id",userID)
            const progress = await ProgressService.getUserProgressOfTopicsByID({ userID, topicID,batchID })
            // console.log("progress",progress)
            setProgress(progress?.topicProgress)
        }
        fetchData({userID,topicID,batchID})
        console.log("from state",progress)
      }, [])



  return (
    <div>
                    

        <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={progress}
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
    </div>
  )
}

export default ProgressTopic