"use client";

import Link from "next/link"
import Image from "next/image"
import { useContext, useState, useLayoutEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faEllipsisV, faMagnifyingGlass, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons"
import logo from './images/logo.svg'
import img1 from './images/img1.jpg'


type NavbarType ={
   barState: boolean,
   setBar: () => void,
   user: string
}

export default function Navbar({barState, setBar, user}:NavbarType) {
   const [searchInput, setSearchInput] = useState('')
   const [profileToggle, setProfileToggle] = useState(false)
   return (
      <div className="flex justify-between items-center fixed top-0 left-0 w-full bg-[#263238] border-[0.5px] border-[#263238]">
         <div className="mobile-togglebar lg:hidden px-5">
            <button onClick={setBar}>
               <FontAwesomeIcon icon={faBars} className="w-6 text-white" />
            </button>
         </div>
         <div className="col flex items-center py-[10px] lg:py-0 px-[5px]">
            <div className={"logo transition-all duration-300 " + (barState ? "lg:w-[229px]" : "lg:w-[60px]")}>
               <div className="logoImage1 flex justify-center items-center py-[10px]">
                  <Link href={'/'} className="relative">
                     <Image src={logo} alt="website logo" className={"relative "+ (barState ? "w-16" :"w-12")} />
                  </Link>
               </div>
            </div>
            <div className="desktop-togglebar px-[10px] hidden lg:block">
               <button title="toggle button" className="flex flex-col items-start justify-center gap-[5px] w-5 h-full" onClick={setBar}>
                  <div className="w-5 h-[2px] bg-[#bbc4cc]"></div>
                  <div className="w-[15px] h-[2px] bg-[#bbc4cc]"></div>
                  <div className="w-5 h-[2px] bg-[#bbc4cc]"></div>
               </button>
            </div>
            <div className="company-title px-5 py-[17px] hidden lg:block">
               <h1 className="text-[#bbc4cc] text-lg font-medium whitespace-nowrap">Company Title</h1>
            </div>
         </div>
         <div className="col items-center flex">
            <div className="search-bar hidden lg:flex py-[17px]"> 
               <div className="relative">
                  <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} name="search" placeholder="Search Here" className="bg-lightColor border border-[rgba(255,255,255, 0.15)] text-white text-sm h-10 pl-[15px] pr-[50px] py-[10px] rounded-full outline-0 max-w-36 xl:max-w-56" />
                  <button title="btn" className="absolute top-0 right-0 w-12 h-10 flex items-center justify-center">
                     <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 text-white" />
                  </button>
               </div>
            </div>
            <div className="notification-bar px-[15px] hidden md:block">
               <div className="relative">
                  <FontAwesomeIcon icon={faBell} className="w-5 text-[#bbc4cc] font-bold" />
                  <span className="batch text-white font-bold bg-[#7460ee] text-[11.25px] px-[7.35px] py-[3.5px] rounded-3xl absolute -top-1/2 -right-1/2 flex items-center justify-center">3</span>
               </div>
            </div>
            <div className="message-bar px-[15px] hidden md:block">
               <div className="relative">
                  <FontAwesomeIcon icon={faComment} className="w-5 text-[#bbc4cc] font-bold" />
                  <span className="batch text-white font-bold bg-[#7460ee] text-[11.25px] px-[7.35px] py-[3.5px] rounded-3xl absolute -top-1/2 -right-1/2">3</span>
               </div>
            </div>
            <div className="profile-bar px-[15px] hidden md:block relative">
               <button className="flex items-center gap-1" onClick={() => { profileToggle ? setProfileToggle(false) : setProfileToggle(true) }}>
                  <div className="relative">
                     <div className="profile-img w-[30px] h-[30px] relative overflow-hidden rounded-full">
                        <Image src={img1} alt="profile-image" className="w-full h-full relative object-cover" />
                     </div>
                     <span className="status-online absolute border-2 border-white h-[10px] w-[10px] rounded-full inline-block bg-[#55ce63] right-0 bottom-0"></span>
                  </div>
                  <h2 className="text-[#bbc4cc] text-sm font-medium hidden lg:block">{user}</h2>
                  <FontAwesomeIcon icon={faChevronDown} className="w-4 text-[#fff] text-xs font-medium hidden lg:block transition-all duration-300" style={{
                     scale: profileToggle ? -1 : 1
                  }} />
               </button>

               <div className="selection py-2 absolute top-[50px] -left-full lg:left-0 bg-[#34444c] shadow-sm shadow-[#34444c] flex flex-col w-28" style={{ display: profileToggle ? 'flex' : 'none' }}>
                  <Link href='/profile' className="py-1 px-4 text-[#bbc4cc] text-sm">My Profile</Link>
                  <Link href='/settings' className="py-1 px-4 text-[#bbc4cc] text-sm">Settings</Link>
                  <Link href='/Logout' className="py-1 px-4 text-[#bbc4cc] text-sm">Logout</Link>
               </div>
            </div>
            <div className="ellipsis-button md:hidden px-5">
               <button onClick={() => { profileToggle ? setProfileToggle(false) : setProfileToggle(true) }} onBlur={() => { setProfileToggle(false) }}>
                  <FontAwesomeIcon icon={faEllipsisV} width={6} height={24} color="#fff" />
               </button>
               <div className="selection py-2 absolute top-[50px] -left-full lg:left-0 bg-[#34444c] shadow-sm shadow-[#34444c] flex flex-col w-28" style={{ display: profileToggle ? 'flex' : 'none' }}>
                  <Link href='/profile' className="py-1 px-4 text-[#bbc4cc] text-sm">My Profile</Link>
                  <Link href='/settings' className="py-1 px-4 text-[#bbc4cc] text-sm">Settings</Link>
                  <Link href='/Logout' className="py-1 px-4 text-[#bbc4cc] text-sm">Logout</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

