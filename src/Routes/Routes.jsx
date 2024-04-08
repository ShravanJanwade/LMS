// Routes.js
import { Routes, Route } from "react-router-dom";
import CreateBatch from "../Pages/CreateBatch"; // Import your CreateBatch component
import ViewBatches from "../Pages/ViewBatches";
import BatchDetails from "../Pages/BatchDetails";
import UsersList from "../Pages/UsersList";
import AdminDashBoard from "../Pages/adminDashBoard";
import LearningPlan from "../Pages/LearningPlan";
import LearningResource from "../Pages/LearningResource";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashBoard />} />
      <Route path="/lms/batches" element={<ViewBatches />} />
      <Route path="/lms/batches/create-batch" element={<CreateBatch />} />
      <Route path="/lms/batches/batchDetails" element={<BatchDetails />} />
      <Route
        path="/lms/batches/batchDetails/addUsersToBatch"
        element={<UsersList />}
      />
      <Route path="lms/batches/batchDetails/learningPlan" element={<LearningPlan/>}/>
      <Route path="/lms/batches/batchDetails/learningPlan/resources" element={<LearningResource/>}/>
    </Routes>
  );
}

export default AppRoutes;
