"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import user from '../../img/user.jpg';
import Link from 'next/link';
import ActiveTab from './ActiveTab';
import axios from 'axios'

function Container() {
    const [profileData, setProfileData] = useState<any>({})
    const url = 'https://dues-api.onrender.com/api/v1/user/profile'
    const getData = async (url: string) => {
        axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + (localStorage.getItem('userToken') !== null ? localStorage.getItem('userToken') : "")
            }
        }).then(res => setProfileData(res.data.user))
            .catch(e => console.warn)
    }
    useEffect(() => {
        getData(url)
        return () => { setProfileData({}) };
    }, [])
    


    if(Object.keys(profileData).length) {
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
                    <div className='sm:flex sm:gap-3 w-full'>
                        <div className="profile text-center items-center pb-3 border-b-2 sm:border-b-0 border-dashed sm:border-r-2 text-[.8rem] sm:pe-3 sm:h-44 lg:w-[40%] lg:pe-6">
                            <div className='smm:text-left'>
                                <h1 className='text-[#bbc4cc] text-[.8rem]'>{profileData.fullname}</h1>
                                <p className='text-[#8e8c8a] text-[.7rem]'>UI/UX Design Team</p>
                                <p className='text-[#8e8c8a] text-[.7rem] py-1'>Web Designer</p>
                            </div>
                            <div className='pb-2 smm:text-left'>
                                <h1 className='text-[#bbc4cc] text-[.8rem]'>Employee ID : FT-0001</h1>
                                <p className='text-[#8e8c8a] text-[.7rem]'>Date of John : 1st Jan 2013</p>
                            </div>
    
                            {/* <div className="button py-1 pt-3 smm:text-left">
                                <button className=' bg-gradient-color text-white p-2 px-4 rounded-md text-[.84rem]'>Edit profile</button>
                            </div> */}
                        </div>
                        <div className="details py-4 flex flex-col gap-2 lg:w-[40%]">
                            <div className="phone flex justify-start gap-8">
                                <h1 className='text-[#bbc4cc] flex-1'>Phone:</h1>
                                <Link href={'tel:9876543210'} className='flex-[2] text-white underline'>9876543210</Link>
                            </div>
                            <div className="email flex justify-start gap-8">
                                <h1 className='text-[#bbc4cc] flex-1'>Email:</h1>
                                <Link href={'mailto:'} className='flex-[2] text-white underline'>{profileData.email}</Link>
                            </div>
                            <div className="birthday flex justify-start gap-8">
                                <h1 className='text-[#bbc4cc] flex-1'>Birthday:</h1>
                                <p className='text-[#828c8a] flex-[2]'>24th July</p>
                            </div>
                            <div className="address flex justify-start gap-8">
                                <h1 className='text-[#bbc4cc] flex-1'>Address:</h1>
                                <div className='text-[#828c8a] text-left flex-[2]'>
                                    <p>1861 Bayonne Ave, Manchester Township, Nj, 08759</p>
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
    
                <ActiveTab />
            </div>
        )
    } else {
        return (<></>)
    }
}

export default Container