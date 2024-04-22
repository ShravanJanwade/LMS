import React, { useEffect } from 'react';
import { FaRegCalendarMinus, FaTasks } from "react-icons/fa"
import { SiFuturelearn } from "react-icons/si";
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Modules } from './Modules'; // Import Modules component
 
const Page = () => {
    const { auth } = useAuth();

    const  getUserDetails = async() =>{
        axios.get("http://172.18.4.243:8090/batch/employee/batches/%7BemployeeId").then((response)=>console.log(response.data)).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        getUserDetails()
    },[])
 
    return (
        <div className='px-[25px] pt-[25px] bg-[#F8F9FC] pb-[40px]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer'>Dashboard{auth.username}</h1>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-[25px] pb-[15px]'>
                {/* Attendance */}
                <Modules CardName="Attendance" icon={<FaRegCalendarMinus fontSize={28} />} />
               
                {/* Assignments */}
                <Modules CardName="Assignments" icon={<FaTasks fontSize={28} />} />
               
                {/* User Batch */}
                <Modules CardName="User Batch" />
            </div>
        </div>
    );
};
 
export default Page;
