// Routes.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from "react-router-dom";
import CreateBatch from "../Pages/CreateBatch"; // Import your CreateBatch component
import ViewBatches from "../Pages/ViewBatches";
import BatchDetails from "../Pages/BatchDetails";
import UsersList from "../Pages/UsersList";
import AdminDashBoard from "../Pages/adminDashBoard";
import LearningPlan from "../Pages/LearningPlan";
import LearningResource from "../Pages/LearningResource";
import ProgressList from "../Pages/ProgressList";
import EditBatch from "../Pages/EditBatch";
import BatchSelectPage from '../Pages/BatchSelectPage';
import AttendancePage from '../Pages/AttendancePage';
import UpdateAttendance from '../Pages/UpdateAttendance';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashBoard />} />
      <Route path="/lms/batches" element={<ViewBatches />} />
      <Route path="/lms/batches/create-batch" element={<CreateBatch />} />
      <Route path="/lms/batches/editBatch" element={<EditBatch />} />
      <Route path="/lms/batches/batchDetails" element={<BatchDetails />} />
      <Route
        path="/lms/batches/batchDetails/addUsersToBatch"
        element={<UsersList />}
      />
      <Route path="/lms/batches/batchDetails/batchUsersProgress" element={<ProgressList/>}/>
      <Route path="lms/batches/batchDetails/learningPlan" element={<LearningPlan/>}/>
      <Route path="/lms/batches/batchDetails/learningPlan/resources" element={<LearningResource/>}/>
      <Route path="/attendance/BatchSelect" element={<BatchSelectPage/>}/>
      <Route path="/attendance/takeAttendance" element={<AttendancePage/>}/>
      <Route path="/attendance/updateAttendance" element={<UpdateAttendance/>}/>
    </Routes>
  );
}

export default AppRoutes;
