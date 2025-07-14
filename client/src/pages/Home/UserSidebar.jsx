import React from 'react'
import { CiSearch } from "react-icons/ci";
import User from './User';

const UserSidebar = () => {
  return (
    <div className='max-w-[20rem] border-r border-r-white/10 h-screen w-full flex flex-col'>
      <div className=' bg-black rounded-lg mt-3 mx-3 py-2 px-1 text-[#7480FF] text-xl font-semibold'>
        Chat app
      </div>
      <div className='p-3'>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <CiSearch />

        </label>
      </div>
      <div className='h-full overflow-y-auto px-3 '>
        <User />

      </div>
      <div className='flex items-center justify-between p-3'>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <button className="btn btn-primary btn-sm">Logout</button>

      </div> 

    </div>
  ) 
}

export default UserSidebar