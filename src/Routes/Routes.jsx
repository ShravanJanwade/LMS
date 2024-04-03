// Routes.js
import { Routes, Route } from "react-router-dom";
import CreateBatch from "../Pages/CreateBatch"; // Import your CreateBatch component
import ViewBatches from "../Pages/ViewBatches";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ViewBatches />} />
      <Route path="/lms/create-batch" element={<CreateBatch />} />
    </Routes>
  );
}

export default AppRoutes;
