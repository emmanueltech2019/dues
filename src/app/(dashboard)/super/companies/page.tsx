import React from 'react'
import { faTableCells} from '@fortawesome/free-solid-svg-icons/faTableCells'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'
import { companies } from '../components/AdminObj'

function page() {
  return (
    <div className='px-5'>
        <header className="flex justify-between items-center w-full py-3">
            <div className="text">
                <h1 className='text-[1.2rem] text-[#bbc4cc]'>Companies</h1>
            </div>
            <nav className='flex gap-2 justify-between items-center'>
                <button className="add-employee flex items-center px-3 py-1 gap-1 rounded-full bg-[#FF9B44] text-[1rem] text-[#ffffff] cursor-pointer">
                    <FontAwesomeIcon icon={faPlus}/>
                    <h1>Add Company</h1>
                </button>
            </nav>
        </header>
        <div className="employee grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5 py-5">
            {
                companies.map(({name, skill, userImage, href},index) => (
                    <div key={name + index} className='bg-[#16191c] py-2 px-3'>
                        <div className='flex justify-end'>
                        <FontAwesomeIcon icon={faEllipsisV} className="h-5 text-[#777777] cursor-pointer"/>
                        </div>
                        <Link href={href} className='text-center flex flex-col justify-center items-center'>
                            <Image src={userImage} alt="alt" className='w-[80px] rounded-full mt-3' />
                            <div className="name text-lg text-white">{name}</div>
                            <div className="skill text-sm text-[#8e8c8a]">{skill}</div>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default page 