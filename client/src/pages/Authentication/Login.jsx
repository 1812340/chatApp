import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from '../../store/slice/user/user.thunk';


const Login = () => {
    const dispatch = useDispatch( )
    const [data, setData]=useState({
        Username:"",
        password:""
    })
    const handleInputChange=(e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    console.log(data)

    const handleLogin= async ()=>{
         console.log("login")
        await dispatch(loginUserThunk(data ))
    }
    return (
        <div className='flex justify-center items-center p-6 min-h-screen'>

            <div className='max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg'>
                <h2 className='text-lg '>Please Login In..!!</h2>
                <label className="input input-bordered flex items-center gap-2">
                    <FaUser />
                    <input name="Username" onChange={handleInputChange} type="text"  className="grow" placeholder="Username" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <RiLockPasswordFill />
                    <input name="password" onChange={handleInputChange} type="password" placeholder='Password' className="grow" />
                </label>
                <button className="btn btn-primary" onClick={handleLogin}>Login </button>
                <p>Dont have account? &nbsp; <Link to='/signup' className='text-blue-400 underline '>Sign Up</Link ></p>
            </div>

        </div>
    )
}

export default Login  