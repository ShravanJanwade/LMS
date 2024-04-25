// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Input,
//   Typography
// } from "@material-tailwind/react";

// const ChangePassword = () => {
//   const [open, setOpen] = useState(false);
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordsMatch, setPasswordsMatch] = useState(true);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (newPassword === confirmPassword) {
     
//       setPasswordsMatch(true);
    
//       handleClose(); 
//     } else {
    
//       setPasswordsMatch(false);
//     }
//   };

//   const handleOldPasswordChange = (event) => {
//     setOldPassword(event.target.value);
//   };

//   const handleNewPasswordChange = (event) => {
//     setNewPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   return (
//     <>
//       <Button onClick={handleOpen}>Open Dialog</Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Enter New Password</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <Input
//               type="password"
//               placeholder="Old Password"
//               value={oldPassword}
//               onChange={handleOldPasswordChange}
//               fullWidth
//             />
//             <Input
//               type="password"
//               placeholder="New Password"
//               value={newPassword}
//               onChange={handleNewPasswordChange}
//               fullWidth
//             />
//             <Input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={handleConfirmPasswordChange}
//               fullWidth
//             />
//             {!passwordsMatch && (
//               <Typography color="error">Passwords do not match</Typography>
//             )}
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmit} color="primary" disabled={!passwordsMatch}>
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default ChangePassword;
import React, { useEffect, useRef, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../Api/services/AuthService";
import LoadingBar from "react-top-loading-bar";
import axios from "../Api/axios";
import useAuth from "../Hooks/useAuth";

export function ChangePassword() {
    const { auth } = useAuth();
    
  const [newPasswordValue, setNewPassword] = useState("");
  const [oldPasswordValue, setOldPassword] = useState("");
  const [confirmPasswordValue, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [emailValue, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const refLoading = useRef();
  const navigate = useNavigate();
  let params;
  const handleOldPasswordChange = (event) => {
    const oldPasswordValue = event.target.value;
    setOldPassword(oldPasswordValue);

    // Regular expressions for password criteria
    

    // Check if the password meets all criteria
  
  };
  const handleConfirmPasswordChange = (event) =>{
    const passwordMatch = event.target.value
    setConfirmPassword(passwordMatch)
    if(newPasswordValue === passwordMatch){
        setPasswordsMatch(true)
    }else{
        setPasswordsMatch(false)
    }
  }

  

  const handleNewPasswordChange = (event) => {
    const newPassword = event.target.value;
    setNewPassword(newPassword);

    const hasNumber = /\d/.test(newPassword);
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

    const isValidPassword =
    newPassword.length >= 8 &&
    hasNumber &&
    hasUppercase &&
    hasSpecialChar;

  // Update passwords match state
//   setPasswordsMatch(confirmPassword === oldPasswordValue);

  // Set requirements message
  setRequirementsMessage(
    isValidPassword
      ? ""
      : "Password requirements: Minimum 8 characters, at least one number, one uppercase letter, and one special character."
  );
//   console.log("New Password:", newPasswordValue);

    // setPasswordsMatch(newPasswordValue === newPassword);
    // console.log("Confirm Password:", newPasswordValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    refLoading.current.continuousStart();
    const data = {
        email : auth.email,
        oldPassword: oldPasswordValue,
        newPassword: newPasswordValue
    }
    // console.log(data);
    if(passwordsMatch){
        axios.put(`${import.meta.env.VITE_API_GOWSIC}/api/v1/auth/changepassword`,data).then((response)=>{
            console.log(response.data);
            setOldPassword("")
            setNewPassword("")
            setTimeout(()=>{
                navigate("/dashboard/admin")
            },2000)
        }).catch((error)=>{
            console.log(error);
        })
    }else{

    }
  
    // AuthService.resetPasswordWithToken(token, confirmPassword, setMessage)
    //   .then((data) => {
    //     refLoading.current.complete();
    //     console.log("inside resetPass", data);
    //     navigate("/login");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const [requirementsMessage, setRequirementsMessage] = useState("");

  useEffect(() => {
    const getParamsAndDecodeToken = async () => {
      // Parse token from URL parameters
      const tokenFromUrl = new URLSearchParams(window.location.search).get(
        "token"
      );
      setToken(tokenFromUrl);

      // Decode token and set email
      const decodedToken = await AuthService.decodeToken(tokenFromUrl);
      const token1 = JSON.stringify( decodedToken);
     
      setEmail(decodedToken?.sub);
    };

    // Call the async function
    getParamsAndDecodeToken();
  }, []);



  return (
    <>
      <>
        <LoadingBar color="#4caf50" ref={refLoading} />
      </>
      <Card
        color="transparent"
        shadow={false}
        className="flex justify-center items-center h-screen"
      >
        <form className="w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
              Mail ID 
            </Typography>
            <Input
              size="lg"
              label={auth.email}
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={auth.email}
              disabled
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Old Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              value={oldPasswordValue}
              onChange={handleOldPasswordChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              New Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              value={newPasswordValue}
              onChange={handleNewPasswordChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {requirementsMessage && (
              <Typography color="blue-gray" className="text-sm">
                {requirementsMessage}
              </Typography>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Confirm Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              value={confirmPasswordValue}
              onChange={handleConfirmPasswordChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {!passwordsMatch && (
              <Typography color="red">Passwords do not match</Typography>
            )}
          </div>
          {/* <Link to="/"> */}
          <Button
            className="mt-6"
            fullWidth
            disabled={!passwordsMatch}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          {/* </Link> */}
        </form>
      </Card>
    </>
  );
}

export default ChangePassword;
