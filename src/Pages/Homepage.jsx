// eslint-disable-next-line no-unused-vars
import React from "react";
import {Button} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const HomePage=()=>{
    const navigate=useNavigate();
    const takeAttendance=()=>{
        sessionStorage.setItem("update",0)
        navigate("/attendance/batchSelect");
    }
    const updateAttendance=()=>{
        sessionStorage.setItem("update",1);
        navigate("/attendance/batchSelect");
    }
    const navigateToYouTube = () => {
        navigate('https://www.youtube.com');
      };
    
    return <div>
        <h1>Home</h1>
        <Button onClick={takeAttendance}>Take Attendance</Button>
        <Button onClick={updateAttendance}>Update Attendance</Button>
        <Button onClick={navigateToYouTube}>Youtube</Button>

    </div>
}
export default HomePage;