import React from 'react'
import {getInitial, getFirst} from "../helper/getInitial"

const Profile = ({handleClick}) => {
    
  return (
    <div className='flex justify-between items-center gap-2'>
      <div className='h-12 w-12 rounded-full text-slate-950 bg-slate-100 flex items-center justify-center text-xl'>
        {getInitial("Nikhil kumar")}
      </div>
      <div>
        <p>{getFirst("Nikhil kumar")}</p>
        <button className='underline cursor-pointer' onClick={handleClick}>Logout</button>
      </div>
    </div>
  )
}

export default Profile
