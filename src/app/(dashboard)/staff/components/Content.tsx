"use client";
import Navbar from '@/components/shared/Navbar'
import React, { useEffect, useState } from 'react'
import StaffSidebar from './StaffSidebar'
import { useRouter } from 'next/navigation';

type contentProps = {
   children: React.ReactNode
}

export default function Content({ children }: contentProps) {

   const redirect = useRouter()
   const [barState, setBarState] = useState(true)
   const setBar = () => { setBarState(prev => !prev) }

   const [showAddEmployeeModal, setAddEmployeeModal] = useState(true)
   const toggleAddEmployeeModal = () => {setAddEmployeeModal(prev => !prev)}

   useEffect(() => {
      if(!localStorage.getItem('userToken')){
         redirect.push('/staff/auth/login')
      }
   },[])
   return (
      <>
         <div>
            <header className="navbar relative pb-16 z-50">
               <Navbar barState={barState} setBar={setBar} user='Staff' />
            </header>
            <section className="col">
               <main className="sidebar relative z-5  0 overflow-hidden">
                  <StaffSidebar barState={barState} setBar={setBar} />
               </main>
               <div className={"content w-full transition-all duration-300 " + (barState ? 'lg:pl-[229px]' : 'lg:pl-[59px]')}>
                  {children}
               </div>
            </section>
         </div>
         <div id="modals">
            {/* {showAddEmployeeModal && <AddEmployeeModal />} */}
         </div>
      </>
   )
}
