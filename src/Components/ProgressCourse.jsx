import React from 'react'
import {useEffect,useState} from 'react'
import AnimatedProgressProvider from './AnimatedProgressProvider'
import ProgressService from '../Services/Progress/ProgressService'
import { easeQuadInOut } from 'd3-ease'
import { Progress } from '@material-tailwind/react'
const ProgressCourse = ({batchID,courseID,userID}) => {

const [progress,setProgress] = useState(null);
    useEffect(() => {
        const fetchData = async ({userID,batchID,courseID})=>{
          
            const progress = await ProgressService.getUserProgressOfCoursesByID({ userID, courseID,batchID })
            // console.log("progress",progress)
            setProgress(progress.courseProgress)
        }
        fetchData({userID,courseID,batchID})
      }, [])
  return (
    <div>
        {/* remove */}
        
          <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={progress}
                    duration={0.5}
                    easingFunction={easeQuadInOut}
                    repeat
                  >
                    {value => (
                      <Progress className="absolute -m-6" value={value} color="green" />
                    )}
                  </AnimatedProgressProvider>
    </div>
  )
}

export default ProgressCourse