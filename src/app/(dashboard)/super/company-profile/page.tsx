import React from 'react'
import Image from 'next/image'
import user from '../img/user.jpg';
import Link from 'next/link';
import ActiveTab from '../components/ActiveTab';



function page() {
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
                            <h1 className='text-[#bbc4cc] text-[.8rem]'>Vine Africa</h1>
                            <p className='text-[#8e8c8a] text-[.7rem]'>Tech Company</p>
                        </div>
                        <div className='pb-2 smm:text-left'>
                            <h1 className='text-[#bbc4cc] text-[.8rem]'>www.devemmy.com</h1>
                        </div>

                    </div>
                    <div className="details py-4 flex flex-col gap-2 lg:w-[40%]">
                        <div className="phone flex justify-start gap-8">
                            <h1 className='text-[#bbc4cc] flex-1'>Website:</h1>
                            <Link href={'tel:9876543210'} className='flex-[2] text-white underline'>www.devemmy.com</Link>
                        </div>
                        <div className="birthday flex justify-start gap-8">
                            <h1 className='text-[#bbc4cc] flex-1'>City:</h1>
                            <p className='text-[#828c8a] flex-[2]'>Port Harcourt</p>
                        </div>
                        <div className="address flex justify-start gap-8">
                            <h1 className='text-[#bbc4cc] flex-1'>Address:</h1>
                            <div className='text-[#828c8a] text-left flex-[2]'>
                                <p>Tony Estate</p>
                            </div>
                        </div>
                        <div className="gender flex justify-start gap-8">
                            <h1 className='text-[#bbc4cc] flex-1'>Country:</h1>
                            <p className='text-[#828c8a] flex-[2]'>Nigeria</p>
                        </div>
                    </div>
                </div>

            </div>

            <ActiveTab />
        </div>
    )
}

export default page