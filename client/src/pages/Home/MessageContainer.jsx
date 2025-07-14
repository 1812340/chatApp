import React from 'react'
import User from './User'
import Message from './Message'
import { IoSend } from "react-icons/io5";

const MessageContainer = () => {
    return (
        <div className='h-screen w-full flex flex-col' >
            <div className='border-b border-b-white/10 p-3 '>
                <User />
            </div>
            <div className='h-full overflow-y-auto '>
                <Message />
            </div>
            <div className='w-full p-3 flex gap-2'>
                <input type="text" placeholder="Type here ..." className="input input-primary input-bordered w-full" />
                <button className="btn btn-square btn-outline btn-primary">
                    <IoSend />

                </button>
            </div>
        </div>
    )
}

export default MessageContainer