// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from "react";
import {
  Card,
  Button,
  Typography,
} from "@material-tailwind/react";
import SelectOption from "../Components/SelectOption";
import Date from "../Components/Date";
import { useNavigate } from "react-router-dom";
import { getBatches, getCourses } from "../Services/AttendanceService";
const BatchSelectPage = () => {
    const [batch,setBatch]=useState(null);
    const [course,setCourse]=useState(null);
    const [period,setPeriod]=useState(null);
    const [batchData,setBatchData]=useState([]);
    const [courseData,setCourseData]=useState([]);
    const navigate=useNavigate();
    const attendanceHandler=()=>{
        navigate("/attendance/takeAttendance")
    }
    const batchHandler=(value)=>{
        setBatch(value)
        console.log(batch);
        // console.log(batchData)
        console.log(courseData);
    }
    const courseHandler=(value)=>{
        setCourse(value);
        setTimeout(()=>{
            console.log(course);
        },2000)
    }
    const periodHandler=(batch)=>{
        setBatch(batch)
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const batchData = await getBatches();
            if (batchData) {
              setBatchData(batchData);
              console.log(batchData)
            } else {
              throw new Error("Failed to fetch batch data");
            }
          } catch (error) {
            console.error("Error fetching batch data:", error);
          }
        };
    
        fetchData();
    
        return () => {
          // Cleanup function
        };
      }, []);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const courseData = await getCourses(batch);
            if (courseData) {
              setCourseData(courseData);
              console.log(courseData)
            } else {
              throw new Error("Failed to fetch batch data");
            }
          } catch (error) {
            console.error("Error fetching batch data:", error);
          }
        };
    
        fetchData();
    
        return () => {
          // Cleanup function
        };
      }, [batch]);
    
  return (
    <div className="flex items-center justify-center h-screen">
      <Card
        color="transparent"
        shadow={true} // Set shadow to true
        className="flex items-center justify-center border border-gray-200 rounded-xlg p-8" // Add border and padding
        style={{ maxWidth: "800px" }} // Set max-width for responsiveness
      >
        <Typography variant="h4" color="blue-gray" className="text-center">
          Attendance System
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Select a batch, course, and half of the day to take attendance.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Select Batch
            </Typography>
            <SelectOption disabled={false} selectHandler={batchHandler} data={batchData} label={"Select Batch"}/>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Select Course
            </Typography>
            <SelectOption disabled={batch!=null?false:true} selectHandler={courseHandler} data={courseData}  label={"Select Course"}/>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Half of the day
            </Typography>
            <SelectOption disabled={false} selectHandler={periodHandler} data={batchData}  label={"Select Period"}/>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Select Date
            </Typography>
            <Date/>
          </div>
          <Button className="mt-6" fullWidth onClick={attendanceHandler}>
            Take Attendance
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default BatchSelectPage;
