// Routes.js
import { Routes, Route } from "react-router-dom";
import CreateBatch from "../Pages/CreateBatch"; // Import your CreateBatch component
import ViewBatches from "../Pages/ViewBatches";
import BatchDetails from "../Pages/BatchDetails";

import {
  LandingPage,
  About,
  Login,
  Register,
  MyProfile,
  Help,
  Missing,
  UnAuthorized,
  UnderMaintainance,
  TraineeDashBoard,
  TrainerDashBoard,
} from "../Pages/indexRoute";
import RequireAuth from "../Components/RequireAuth";
import AdminDash from "../Pages/AdminDash";
import Layout from "../Components/Layout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/lms/viewBatches" element={<ViewBatches />} />
      <Route path="/lms/create-batch" element={<CreateBatch />} />
      <Route path="/lms/batchDetails" element={<BatchDetails />} />
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/help" element={<Help />}>
            {" "}
          </Route>

          {/* Trainee:  Trainee acces paths */}
          <Route element={<RequireAuth allowedRoles={["ROLE_TRAINEE"]} />}>
            <Route path="/dashboard" element={<TraineeDashBoard />}></Route>
            <Route path="trainee/myProfile" element={<MyProfile />}></Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={["ROLE_TRAINER"]} />}>
            <Route path="/dashboard" element={<TrainerDashBoard />}></Route>
            <Route path="trainee/myProfile" element={<MyProfile />}></Route>
          </Route>


          {/* admin :  admin access path*/}
          <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN"]} />}>
            <Route path="/admin/dashboard" element={<AdminDash />}></Route>
          </Route>

          {/* missing*/}
          <Route path="*" element={<Missing />}></Route>
          <Route path="/unauthorized" element={<UnAuthorized />}></Route>
          <Route
            path="/underMaintainance"
            element={<UnderMaintainance />}
          ></Route>
        </Route>
    </Routes>
  );
}

export default AppRoutes;
