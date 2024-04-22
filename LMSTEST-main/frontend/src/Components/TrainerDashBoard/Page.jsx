import React from 'react';
import { FaRegCalendarMinus, FaTasks } from "react-icons/fa"
import { SiFuturelearn } from "react-icons/si";

const Page = () => {
    return (
        <div className='px-[25px] pt-[25px] bg-[#F8F9FC] pb-[40px]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer'>Learning Management System</h1>
            </div>
            <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
                {/* Learning Repository Card */}
                <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Learning Repository</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>Documents</h1>
                    </div>
                    <SiFuturelearn fontSize={28} color="" />
                </div>
                {/* Learning Resource Card */}
                <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#FFD700] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#FFD700] text-[11px] leading-[17px] font-bold'>Learning Resource</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>C</h1>
                    </div>
                    <SiFuturelearn fontSize={28} color="" />
                </div>
                {/* Undergoing Course Card */}
                <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#FF4500] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#FF4500] text-[11px] leading-[17px] font-bold'>Undergoing Course</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>HTML</h1>
                    </div>
                    <SiFuturelearn fontSize={28} color="" />
                </div>
                {/* Learning Resources Card */}
                <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#006400] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#006400] text-[11px] leading-[17px] font-bold'>Learning Resources</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>Videos</h1>
                    </div>
                    <SiFuturelearn fontSize={28} color="" />
                </div>
                {/* Attendance Card */}
                <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>Attendance</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>Today</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div>
                {/* Assignments Card */}
                <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#36B9CC] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>Assignments</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>Task</h1>
                    </div>
                    <FaTasks fontSize={28} />
                </div>
            </div>
        </div>
    );
};

export default Page;
