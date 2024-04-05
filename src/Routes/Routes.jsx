// Routes.js
import { Routes, Route } from "react-router-dom";
import CreateBatch from "../Pages/CreateBatch"; // Import your CreateBatch component
import ViewBatches from "../Pages/ViewBatches";
import BatchDetails from "../Pages/BatchDetails";
import UserList from "../Pages/UserList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ViewBatches />} />
      <Route path="/lms/create-batch" element={<CreateBatch />} />
      <Route path="/lms/batchDetails" element={<BatchDetails />} />
      <Route path="/lms/addUsersToBatch" element={<UserList/>}/>
    </Routes>
  );
}

export default AppRoutes;
