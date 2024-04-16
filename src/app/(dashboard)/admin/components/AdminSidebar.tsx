"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faThermometer } from "@fortawesome/free-solid-svg-icons"
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"


const links = [
   {
      title: 'Dashboard',
      path: '/admin'
   },
   {
      title: 'All Employees',
      path: '/admin/all-employees'
   },
   {
      title: 'Payments',
      path: '/admin/payment'
   }
]

type AdminSidebarType = {
   barState: boolean
   setBar: () => void
}

export default function AdminSidebar({ barState, setBar }: AdminSidebarType) {
   return (
      <>
         <div className="hidden lg:block desktop-screen h-screen bg-[#34444C] fixed top-16 left-0 pt-[10px] transition-all duration-300 overflow-hidden" style={{
            width: barState ? 229 : 59
         }}>
            <h1 className="px-[15px] py-[5px] text-sm text-[#bbc4cc] font-extrabold" style={{ display: barState ? 'block' : 'none' }}>Main</h1>
            <div className="dashboard-link">
               <div className="dashboard-list">
                  {links.map(({ title, path }, index) => (<div key={title + index} className="py-[9px] px-[15px] text-[#bbc4cc] flex items-center"style={{ justifyContent: barState ? 'start' : 'center' }}>
                     <FontAwesomeIcon icon={faGaugeHigh} className="text-xl" />
                     <Link href={path} className="text-sm  pl-[15px]" style={{ display: barState ? 'inline' : 'none' }}>{title}</Link>
                  </div>))}
               </div>
            </div>
         </div>

         {/* ----------------------------------------------------------------------- */}

         <div className="mobile-screen w-[224px] lg:hidden h-screen bg-[#34444C] fixed top-16 pt-[10px] transition-all duration-300 overflow-hidden" style={{
            left: barState ? 0 : -224,
         }}>
            <h1 className="px-[15px] py-[5px] text-sm text-[#bbc4cc] font-extrabold">Main</h1>
            <div className="dashboard-link">
               <div className="dashboard-list">
                  {links.map(({ title, path }, index) => (<div key={title + index} className="py-[9px] px-[15px] text-[#bbc4cc]">
                     <FontAwesomeIcon icon={faGaugeHigh} className="text-base" />
                     <Link href={path} className="text-sm pl-[15px]">{title}</Link>
                  </div>))}
               </div>
            </div>
         </div>
      </>
   )
}
