'use client';
import React, { useState } from 'react'
import Profile from './Profile';
import Project from './Project';
import Bank from './EditProfile';

export default function ActiveTab() {
   const [ActiveTab, setActiveTab] = useState("Profile")
   return (
      <div><div className='navigation gap-2 flex flex-wrap bg-white sm:bg-[#16191c] py-2 pe-4 rounded text-[.8rem] sm:text-[#828c8a]'>
         <div className='flex-1 border-b-2 border-transparent hover:border-[#ff9b44] sm:hover:text-white transition-all' onClick={() => setActiveTab('Profile')}>
            <h1 className='ps-4'>Profile</h1>
         </div>
         {/* <div className='flex-1 border-b-2 border-transparent hover:border-[#ff9b44] sm:hover:text-white transition-all' onClick={() => setActiveTab('Projects')}>
            <h1 className='ps-4'>Projects</h1>
         </div> */}
         <div className='flex-[2] whitespace-nowrap w-52 me-11 border-b-2 border-transparent hover:border-[#ff9b44] sm:hover:text-white transition-all' onClick={() => setActiveTab('Bank')}>
            <h1 className='ps-4'>Edit Profile</h1>
         </div>
      </div>
         {ActiveTab === 'Profile' && <Profile />}
         {/* {ActiveTab === 'Projects' && <Project />} */}
         {ActiveTab === 'Bank' && <Bank />}
         </div>
   )
}
