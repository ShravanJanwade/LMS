import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import {
  RiDashboard2Fill,
  RiInboxFill,
  RiFileMarkFill,
  RiFolderVideoFill,
} from "react-icons/ri";
import { RxDividerHorizontal } from "react-icons/rx";
import { Button, Tooltip } from "@material-tailwind/react";

const ResourceSidebar = () => {
  return (
    <div className="fixed left-0  w-16 h-96 justify-center mt-40 bg-[#F2F2F2] dark:bg-gray-900 z-20 ">
      <div className="flex flex-col justify-center items-center h-full ">
        <SideBarIcon icon={<RiDashboard2Fill size="30" />} text="Progress" />
        <Divider />
        <SideBarIcon icon={<RiInboxFill size="25" />} text="All Resources" />
        <SideBarIcon
          icon={<RiFileMarkFill size="24" />}
          text="Text Based Resources"
        />
        <SideBarIcon
          className="mb-0 "
          icon={<RiFolderVideoFill size="24" />}
          text="Video Based Resources"
        />

        <br />
        <br />
        <br />

        <SideBarIcon icon={<MdMenuOpen size="24" />} text="Dock" />

        <Divider />
      </div>

      <Tooltip content="Next Course" placement="right-end">
        <Button
          className="p-2 w-14 ml-1 mb-1 mt-3 dark:text-green-700 dark:border-green-200 hover:dark:border-gray-200 hover:dark:text-gray-100 hover:bg-green-100 hover:text-gray-100"
          variant="outlined"
        >
          >>
        </Button>
      </Tooltip>
      <Tooltip content="Previous Course" placement="right-end">
        <Button
          className="p-2 w-14 ml-1 mt-1 dark:text-green-700 dark:border-green-200 hover:dark:border-gray-200 hover:dark:text-gray-100 hover:bg-green-100 hover:text-gray-100"
          variant="outlined"
        >
          {"<<"}
        </Button>
      </Tooltip>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => (
  <hr className="w-7 h-px my-0 bg-green-200 border-0 dark:bg-green-700" />
);

export default ResourceSidebar;
