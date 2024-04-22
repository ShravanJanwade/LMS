import React, { useEffect } from "react";

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
  BatchList,
  RoleSelect,
  Resources,
} from "./indexRoute";
import RequireAuth from "../Components/RequireAuth";
import { Routes, Route, useNavigate } from "react-router-dom";

import AdminDash from "../Pages/AdminDash";
import Layout from "../Layouts/Layout";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import PagesLayout from "../Layouts/PagesLayout";
import ForgotPassword from "../Pages/ForgotPassword";
import EnterNewPassword from "../Pages/EnterNewPassword";
import AuthService from "../Api/services/AuthService";
import UserListPage from "../Components/AdminDashBoard/Userslist";
import useAuth from "../Hooks/useAuth";

function AppRoutes() {
  const auth = useAuth();
  return (
    <div className=" w-full h-sccreen">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes*/}
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/roleSelect" element={<RoleSelect />}></Route>
          <Route path="/enter-new-password" element={<EnterNewPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* TRAINEE:  trainee acces paths */}
        <Route element={<RequireAuth allowedRoles={["USER"]} />}>
          <Route path="/dashboard" element={<DashBoardLayout />}>
            <Route
              path="/dashboard/trainee"
              element={<TraineeDashBoard />}
            ></Route>
          </Route>
          <Route path="/" element={<PagesLayout />}>
            {/* Trainee pages here */}
            <Route path="/resources" element={<Resources />}></Route>
          </Route>
        </Route>

        {/* admin :  admin access path*/}
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/dashboard" element={<DashBoardLayout />}>
            <Route path="/dashboard/admin" element={<AdminDash />}></Route>
          </Route>
          <Route path="/" element={<PagesLayout />}>
            {/* Admin pages here */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/user-list" element={<UserListPage />} /> {/* Route to UserListPage */}
            <Route path="/batch-list" element={<BatchList />}></Route>
          </Route>
        </Route>

        {/* trainer :  trainer access path*/}
        <Route element={<RequireAuth allowedRoles={["TRAINER"]} />}>
          <Route path="/dashboard" element={<DashBoardLayout />}>
            <Route
              path="/dashboard/trainer"
              element={<TrainerDashBoard />}
            ></Route>
          </Route>
          <Route path="/" element={<PagesLayout />}>
            {/* Trainer pages here */}
          </Route>
        </Route>

        {/* missing*/}
        <Route path="*" element={<Missing />}></Route>

        <Route path="/unauthorized" element={<UnAuthorized />}></Route>
        <Route
          path="/underMaintainance"
          element={<UnderMaintainance />}
        ></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
