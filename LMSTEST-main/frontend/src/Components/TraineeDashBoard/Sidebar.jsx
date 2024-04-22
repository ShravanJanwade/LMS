import React from 'react'
import { FaTachometerAlt, FaRegSun, FaBookOpen , FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaChevronLeft, FaBolt, FaLayerGroup } from "react-icons/fa"
import { IoNotifications } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../Assets/logo.png'
const Sidebar = () => {
    const {auth}  = useAuth();
    return (
        <div className='bg-black px-[25px] h-screen'>
            <img src={logo} alt="" />
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Welcome {auth.username}  </h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                <FaTachometerAlt color='white' />
                <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
               
                <Link to="#" className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <GiProgression  color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Progress</p>
                    </div>
                    <FaChevronRight color='white' />
                </Link>
             <Link to="#" className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <IoNotifications color='white' />
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Notifications</p>
                </div>
                <FaChevronRight color='white' />
            </Link>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                
               <Link to="#" className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white' /> 
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Report</p>
                    </div>
                    <FaChevronRight color='white' />
                </Link>
                
                <Link to="#" className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                        <FaLayerGroup color='white' /> 
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Batches</p>
                    </div>
                    <FaChevronRight color='white' />
                </Link>
                <div className='flex items-center gap-[10px] py-[15px]  cursor-pointer'>
                    <FaRegChartBar color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Anlyitics</p>
                </div>
               
            </div>
            
            
           
        </div>
    )
}

export default Sidebar