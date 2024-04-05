import React, { useEffect } from 'react'

import useAuth from '../hooks/useAuth';
import Cookies from "js-cookie";



const LandingPage = () => {
  const { auth } = useAuth();
  useEffect(() => {
    
      
    if (auth.accessToken) {
      console.log("cookie creation started")
      // Extract the token without 'bearer=' prefix
      let tokenWithoutBearer = auth.accessToken.split("bearer=")[1];
      let jwt = tokenWithoutBearer.split(";")[0];
      
      console.log("auth",auth)
      console.log("jwt token",jwt)
      // Set the cookie with the given attributes
      Cookies.set('bearer', jwt);
  }
    // CampaignService.getMainDash()

    
  }, []);
  return (
    <>
    <div className=' flex justify-center items-center w-full h-screen'>
   
   <h1 className='text-4xl'>LAnding Page</h1>
 </div>
    </>
  )
}

export default LandingPage