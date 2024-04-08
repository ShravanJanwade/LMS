import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const ResourceSidebar = () => {
  return (
    <div className="fixed left-0  w-16 h-96 justify-center mt-40 bg-[#F2F2F2] dark:bg-gray-900 ">
  <div className="flex flex-col justify-center items-center h-full ">
    <SideBarIcon icon={<FaFire size="28" />} />
    <Divider />
    <SideBarIcon icon={<BsPlus size="32" />} />
    <SideBarIcon icon={<BsFillLightningFill size="20" />} />
    <SideBarIcon icon={<FaPoo size="20" />} />
    <Divider />
    <SideBarIcon icon={<BsGearFill size="22" />} />
  </div>
</div>

  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default ResourceSidebar;