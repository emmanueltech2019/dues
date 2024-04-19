"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import GridViewIcon from '@mui/icons-material/GridView';
import PortraitIcon from '@mui/icons-material/Portrait';
import ViewListIcon from '@mui/icons-material/ViewList';
import EventNoteIcon from '@mui/icons-material/EventNote';

const links = [
   {
      title: 'Dashboard',
      path: '/admin',
      icon: <GridViewIcon className="text-inherit" />
   },
   {
      title: 'All Employees',
      path: '/admin/all-employees',
      icon: <PortraitIcon className="text-inherit" />
   },
   {
      title: 'Payments',
      path: '/admin/payment',
      icon: <ViewListIcon className="text-inherit" />
   },
   {
      title: 'Holidays',
      path: '/admin/holiday',
      icon: <EventNoteIcon className="text-inherit" />
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
                  {links.map(({ title, path, icon }, index) => (<div key={title + index} className="py-[9px] px-[15px] text-[#bbc4cc] flex items-center" style={{ justifyContent: barState ? 'start' : 'center' }}>
                     <button className="text-xl cursor-pointer" onClick={setBar}>{icon}</button>
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
                  {links.map(({ title, path, icon }, index) => (<div key={title + index} className="py-[9px] px-[15px] text-[#bbc4cc]">
                     <div className="text-base cursor-pointer">
                        {icon}
                     </div>
                     <Link href={path} className="text-sm pl-[15px]">{title}</Link>
                  </div>))}
               </div>
            </div>
         </div>
      </>
   )
}
