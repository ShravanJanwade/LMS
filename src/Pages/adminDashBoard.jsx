// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AdminDashBoard = () => {
  const navigate=useNavigate();
  const takeAttendance=()=>{
      sessionStorage.setItem("update",0)
      navigate("/attendance/batchSelect");
  }
  const updateAttendance=()=>{
      sessionStorage.setItem("update",1);
      navigate("/attendance/batchSelect");
  }
  return (
    <div>
      <Link to="/lms/batches">
        <Button>View Batches</Button>
    
      </Link>
      <Button onClick={takeAttendance}>Take Attendance</Button>
        <Button onClick={updateAttendance}>Update Attendance</Button>
    </div>
  );
};
export default AdminDashBoard;
