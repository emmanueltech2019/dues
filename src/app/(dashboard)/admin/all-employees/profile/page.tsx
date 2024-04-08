"use client";
import React from 'react'
import Image from 'next/image'
import user from '../img/user.jpg';
import Profile from './components/Profile';
import Project from './components/Project';
import Assets from './components/Assets';
import Bank from './components/Bank';
import { useState } from 'react';
import Link from 'next/link';



function page() {
    const [ActiveTab, setActiveTab] = useState("Profile")

    return (
        <div className='p-4'>
            <header className='pb-7'>
                <p className='text-[1.2rem] text-[#bbc4cc]'>Profile</p>
            </header>

            <div className="profile-card bg-[#16191c] p-4 rounded-lg text-[.8rem] flex flex-col smm:flex-row smm:gap-6">
                <div className='flex justify-center'>
                    <div>
                        <Image src={user} alt="alt" className='w-[112px] rounded-full' />
                    </div>
                </div>
                <div className='sm:flex sm:gap-3'>
                    <div className="profile text-center items-center pb-3 border-b-2 sm:border-b-0 border-dashed sm:border-r-2 text-[.8rem] sm:pe-3 sm:h-44">
                        <div className='smm:text-left'>
                            <h1 className='text-[#bbc4cc] text-[.8rem]'>John Doe</h1>
                            <p className='text-[#8e8c8a] text-[.7rem]'>UI/UX Design Team</p>
                            <p className='text-[#8e8c8a] text-[.7rem] py-1'>Web Designer</p>
                        </div>
                        <div className='pb-2 smm:text-left'>
                            <h1 className='text-[#bbc4cc] text-[.8rem]'>Employee ID : FT-0001</h1>
                            <p className='text-[#8e8c8a] text-[.7rem]'>Date of John : 1st Jan 2013</p>
                        </div>

                        <div className="button py-1 pt-3 smm:text-left">
                            <button className=' bg-gradient-color text-white p-2 px-4 rounded-md text-[.84rem]'>Send Message</button>
                        </div>
                    </div>
                    <div className="details py-4 flex flex-col gap-2">
                        <div className="phone flex justify-start gap-8">
                            <h1 className='text-[#bbc4cc] flex-1'>Phone:</h1>
                            <Link href={'tel:9876543210'} className='flex-[2] text-white underline'>9876543210</Link>
                        </div>
                        <div className="email flex justify-start gap-8">
                            <h1 className='text-[#bbc4cc] flex-1'>Email:</h1>
                            <Link href={'mailto:'} className='flex-[2] text-white underline'>johndoe@example.com</Link>
                        </div>
                        <div className="birthday flex justify-start gap-8">
                            <h1 className='text-[#bbc4cc] flex-1'>Birthday:</h1>
                            <p className='text-[#828c8a] flex-[2]'>24th July</p>
                        </div>
                        <div className="address flex justify-start gap-8">
                            <h1 className='text-[#bbc4cc] flex-1'>Address:</h1>
                            <div className='text-[#828c8a] text-left flex-[2]'>
                                <p>1861 Bayonne Ave,</p>
                                <p>Manchester Township, Nj,</p>
                                <p>08759</p>
                            </div>
                        </div>
                        <div className="gender flex justify-start gap-8">
                            <h1 className='text-[#bbc4cc] flex-1'>Gender:</h1>
                            <p className='text-[#828c8a] flex-[2]'>Male</p>
                        </div>
                        <div className="report flex justify-start gap-8">
                            <h1 className='text-[#bbc4cc] flex-1'>Reports to:</h1>
                            <div className='flex gap-2 items-center flex-[2]'>
                                <Image src={user} alt="alt" className='w-6 rounded-full' />
                                <Link href={'/'} className='text-white underline'>Jeffery Lalor</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='navigation gap-2 flex flex-wrap bg-white sm:bg-[#16191c] py-2 pe-4 rounded text-[.8rem] sm:text-[#828c8a]'>
                <div className='flex-1 border-b-2 border-transparent hover:border-[#ff9b44] sm:hover:text-white transition-all' onClick={() => setActiveTab('Profile')}>
                    <h1 className='ps-4'>Profile</h1>
                </div>
                <div className='flex-1 border-b-2 border-transparent hover:border-[#ff9b44] sm:hover:text-white transition-all' onClick={() => setActiveTab('Projects')}>
                    <h1 className='ps-4'>Projects</h1>
                </div>
                <div className='flex-[2] whitespace-nowrap w-52 me-11 border-b-2 border-transparent hover:border-[#ff9b44] sm:hover:text-white transition-all' onClick={() => setActiveTab('Bank')}>
                    <h1 className='ps-4'>Bank & Statutory <span className='text-[#f62d51] font-light'>(Admin Only)</span></h1>
                </div>
                <div className='flex-1 w-38 border-b-2 border-transparent hover:border-[#ff9b44] sm:hover:text-white transition-all' onClick={() => setActiveTab('Assets')}>
                    <h1 className='ps-4'>Assets</h1>
                </div>
            </div>
            {ActiveTab === 'Profile' && <Profile />}
            {ActiveTab === 'Projects' && <Project />}
            {ActiveTab === 'Assets' && <Assets />}
            {ActiveTab === 'Bank' && <Bank />}
        </div>
    )
}

export default page