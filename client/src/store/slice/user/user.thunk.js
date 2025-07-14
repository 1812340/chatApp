// import { createAsyncThunk } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";
// import { axiosInstance } from "../../../component/utilities/axiousInstance";

// export  const  loginUserThunk = createAsyncThunk(
//     'user/login',
//     async ({username , password}, {rejectWithValue }) => {
//     try{
//       const response = await axiosInstance.post("user/login",{
//         username,
//         password
//       }) 
//       toast.success("login successful  ")
//       return response.data
//     }catch(e){
//       console.log(e.response.data.errMessage  )
//      const errorOutput = e.response.data.errMessage
//       toast.error(errorOutput)
//       return rejectWithValue(errorOutput )
//     } 
//     },
//   ) 
// export  const  registerUserThunk = createAsyncThunk(
//     'user/signup',
//     async ({username , password, fullname,confirmPassword ,gender}, {rejectWithValue }) => {
//       console.log(`this is register ${username}`)
//       console.log(`this is register ${password}`)
//       console.log(`this is register ${fullname}`)
//       console.log(`this is register ${gender}`)
//       console.log(`this is register ${confirmPassword}`)
//     try{
//       const response = await axiosInstance.post("/user/register",{
//         username,
//         password,
//         fullname,  
//         gender,
//         // confirmPassword
//       }) 
//       console.log(`this is register response =>${response}`)
//       toast.success("register success ")
//       console.log(`this is register data ${response.data}`)
//       return response.data  
//     }catch(e){
//       console.log(e)
//      const errorOutput = e
//     //  const errorOutput = e.response.data.errMessage
//     //   toast.error(errorOutput)
//       // return rejectWithValue(errorOutput )
//       return rejectWithValue({
//         message: error.message,
//         status: error.response?.status,
//         data: error.response?.data  // Server's error response
//       });
//     } 
//     },
//   ) 

import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../../component/utilities/axiousInstance";

export const loginUserThunk = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    console.log(`client before login username =>${username}`)
    console.log(`client before login password =>${password}`)
    try {
      const response = await axiosInstance.post("/user/login", {
        username,
        password,
      });
     
      toast.success("Login successfull!");
      return response.data;
    } catch (error) {
      console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);

export const registerUserThunk = createAsyncThunk(
  "user/signup",
  async ({ fullName, username, password, gender }, { rejectWithValue }) => {
    console.log(`client after signup fulname =>${fullName}`)
    console.log(`client after signup username =>${username}`)
    console.log(`client after signup password =>${password}`)
    console.log(`client after signup gender  =>${gender}`)
    try {
      const response = await axiosInstance.post("/user/register", {
        fullName,
        username,
        password,
        gender,
      });
      console.log(`signup responce ${response.data}`)
      toast.success("Account created successfully!!");
      return response.data;
    } catch (error) {
      console.log(`error in sign up${error?.response}`)
    
      // console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/logout");
      toast.success("Logout successfull!!");
      return response.data;
    } catch (error) {
      console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);

export const getUserProfileThunk = createAsyncThunk(
  "user/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/get-profile");
      return response.data;
    } catch (error) {
      // console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      // toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);

export const getOtherUsersThunk = createAsyncThunk(
  "user/getOtherUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/get-other-users");
      return response.data;
    } catch (error) {
      console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      // toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);
