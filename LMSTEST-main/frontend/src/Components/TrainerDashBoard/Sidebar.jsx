import React from "react";
import {
  FaTachometerAlt,
  FaRegSun,
  FaBookOpen,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaChevronRight,
  FaChevronLeft,
  FaBolt,
} from "react-icons/fa";
import { IoNotifications, IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import useAuth from "../../Hooks/useAuth";
const Sidebar = () => {
  const { auth } = useAuth();
  return (
    <div>
      <img src={logo} alt="logo" />
      <div className="bg-black px-[25px] h-screen">
        <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
          <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
            Welcome {auth.username}
          </h1>
        </div>

        <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer">
          <FaTachometerAlt color="white" />
          <p className="text-[14px] leading-[20px] font-bold text-white">
            Dashboard
          </p>
        </div>
        <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <Link to="#">
            <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <FaBookOpen color="white" />{" "}
                <p className="text-[14px] leading-[20px] font-normal text-white">
                  Available Courses
                </p>
              </div>
              <FaChevronRight color="white" />
            </div>
          </Link>

          <Link to="#">
            {" "}
            {/* Wrap the entire notification item */}
            <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <IoNotifications color="white" />{" "}
                <p className="text-[14px] leading-[20px] font-normal text-white">
                  Notifications
                </p>
              </div>
              <FaChevronRight color="white" />
            </div>
          </Link>
        </div>
        <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <Link to="#">
            <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <FaStickyNote color="white" />{" "}
                <p className="text-[14px] leading-[20px] font-normal text-white">
                  Report
                </p>
              </div>
              <FaChevronRight color="white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
