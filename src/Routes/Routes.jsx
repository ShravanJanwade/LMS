// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from "react-router-dom";
import BatchSelectPage from '../Pages/BatchSelectPage';
import AttendancePage from '../Pages/AttendancePage';
import HomePage from '../Pages/Homepage';
import UpdateAttendance from '../Pages/UpdateAttendance';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/attendance/BatchSelect" element={<BatchSelectPage/>}/>
      <Route path="/attendance/takeAttendance" element={<AttendancePage/>}/>
      <Route path="/attendance/updateAttendance" element={<UpdateAttendance/>}/>
    </Routes>
  );
}

export default AppRoutes;