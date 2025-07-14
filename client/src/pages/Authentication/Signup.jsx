import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../../store/slice/user/user.thunk';


const SignUp = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender:"male"
    });

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSignUp = () => {
        dispatch(registerUserThunk(data))
    }
    return (
        <div className='flex justify-center items-center p-6 min-h-screen'>

            <div className='max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg'>
                <h2 className='text-lg '>Please SignUp In..!!</h2>

                <label className="input input-bordered flex items-center gap-2">
                    <FaUser />
                    <input name="fullname" onChange={handleInputChange} type="text" className="grow" placeholder="Full name" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <FaUser />
                    <input name="username" onChange={handleInputChange} type="text" className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <RiLockPasswordFill />
                    <input name="password" onChange={handleInputChange} type="password" placeholder='Password' className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <RiLockPasswordFill />
                    <input name="confirmPassword" onChange={handleInputChange} type="password" placeholder='Conform Password' className="grow" />
                </label>
                <div className="input input-bordered flex items-center gap-5 ">
                    <label htmlFor='male' className='flex gap-3 items-center'>

                        <input onChange={handleInputChange} id='male' type="radio" name="gender" value="male" class="radio radio-primary" />
                        male
                    </label>
                    <label htmlFor='female' className='flex gap-3 items-center'>

                        <input onChange={handleInputChange} id="female " type="radio" name="gender" value="female" class="radio radio-primary" />
                        female
                    </label>
                </div>
                <button className="btn btn-primary" onClick={handleSignUp}>SignUp </button>
                <p>Dont have account? &nbsp; <Link to='/login' className='text-blue-400 underline '>Login</Link ></p>
            </div>

        </div>
    )
}

export default SignUp  