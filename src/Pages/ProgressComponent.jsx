import React, { useState, useEffect } from "react";
import AnimatedProgressProvider from "../Components/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import { Progress } from "@material-tailwind/react";
import ProgressService from '../Services/Progress/ProgressService';

const ProgressComponent = ({ courseId }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const data = await ProgressService.getUserProgressOfCoursesByID({ userID: 1, courseID: courseId });
                setProgress(data.courseProgress);
                console.log(progress)
            } catch (error) {
                console.error("Error fetching progress data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProgress();
    }, [courseId]);

    if (loading) {
        return null; // or render a loading indicator
    }

    return (
        <AnimatedProgressProvider
            valueStart={0}
            valueEnd={progress}
            duration={0.5}
            easingFunction={easeQuadInOut}
            repeat
        >
            {(value) => (
                <Progress
                    className="absolute -m-6"
                    value={value}
                    color="green"
                />
            )}
        </AnimatedProgressProvider>
    );
};

export default ProgressComponent;
