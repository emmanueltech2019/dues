"use client";
import Link from "next/link"
import GridViewIcon from '@mui/icons-material/GridView';
import PortraitIcon from '@mui/icons-material/Portrait';
import ViewListIcon from '@mui/icons-material/ViewList';


const links = [
   {
      title: 'Dashboard',
      path: '/super',
      icon: <GridViewIcon className="text-inherit" />
   },
   {
      title: 'All Employees',
      path: '/admin/all-employees',
      icon: <PortraitIcon className="text-inherit" />
   },
   {
      title: 'Company',
      path: '/super/company',
      icon: <ViewListIcon className="text-inherit" />
   }
]

type SuperSidebarType = {
   barState: boolean
   setBar: () => void
}

export default function SuperSidebar({ barState, setBar }: SuperSidebarType) {
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
