"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import heroLogo from '../image/logo.svg'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function NavBar() {
    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle(!toggle)
    }
    return (
        <div className='z-[999]'>
            <header>
                <div className='bg-[#333333] p-4 py-6 lg:px-[10rem] text-[#f2f2f2] fixed z-[999] w-full left-0 top-0 right-0 flex justify-between items-center'>
                    <div className='flex gap-[4rem] items-center justify-between'>
                        <div>
                            <Link href="/">
                                <Image src={heroLogo} alt="alt" />
                            </Link>
                        </div>
                        <ul className='gap-4 text-[16px] hidden lg:flex md:gap-[3rem]'>
                            <li><Link href='/About'>About</Link></li>
                            <li><Link href='/Pricing'>Pricing</Link></li>
                            <li><Link href='/Contact'>Contact us</Link></li>
                        </ul>
                        {
                            !toggle ? <nav className='flex items-center justify-center bg-[#292929] absolute top-0 right-[-150%] w-full h-[100vh] text-center p-3 transition-all duration-1000 ease-in-out lg:hidden'>
                                <div className=''>
                                    <ul className='flex flex-col gap-4 text-[24px]'>
                                        <li><Link href='/About'>About</Link></li>
                                        <li><Link href='/Pricing'>Pricing</Link></li>
                                        <li><Link href='/Contact'>Contact us</Link></li>
                                    </ul>
                                    <div className="getStarted text-[20px]">
                                        <p><Link href='#'>Login</Link></p>
                                        <p><Link href='#'>Get Started</Link></p>
                                    </div>
                                </div>
                            </nav> : <nav className='flex items-center justify-center bg-[#292929] absolute top-0 right-0 w-full h-[100vh] text-center p-3 transition-all duration-600 ease-in-out lg:hidden'>
                                <div className=''>
                                    <ul className='flex flex-col gap-4 text-[24px]'>
                                        <li><Link href='/About'>About</Link></li>
                                        <li><Link href='/Pricing'>Pricing</Link></li>
                                        <li><Link href='/Contact'>Contact us</Link></li>
                                    </ul>
                                    <div className="getStarted flex flex-col gap-4 text-[20px] mt-4">
                                        <p><Link href='#'>Login</Link></p>
                                        <p><Link href='#'>Get Started</Link></p>
                                    </div>
                                </div>
                            </nav>
                        }

                    </div>

                    <div className="getStarted hidden lg:flex md:justify-between gap-[3rem]">
                        <p><Link href='#'>Login</Link></p>
                        <p><Link href='#'>Get Started</Link></p>
                    </div>
                    {
                        !toggle ? <div className='z-[999] lg:hidden'>
                            <div className="toggle">
                                <MenuIcon onClick={handleToggle} className='text-[35px] cursor-pointer' />
                            </div>
                            <div className="toggleClose hidden">
                                <CloseIcon onClick={handleToggle} className=' text-[#fff] text-[35px] cursor-pointer' />
                            </div>

                        </div> : <div className='z-[999]'>
                            <div className="toggle hidden">
                                <MenuIcon onClick={handleToggle} className='text-[35px] cursor-pointer' />
                            </div>
                            <div className="toggleClose block">
                                <CloseIcon onClick={handleToggle} className=' text-[#fff] text-[35px] cursor-pointer' />
                            </div>

                        </div>
                    }
                </div>
            </header>
        </div>
    )
}

export default NavBar