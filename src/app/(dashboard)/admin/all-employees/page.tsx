import React from 'react'
import { faTableCells} from '@fortawesome/free-solid-svg-icons/faTableCells'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { employees } from './components/page-objects';
import Image from 'next/image'

function page() {
  return (
    <div className='px-5'>
        <header className="flex justify-between items-center w-full py-3">
            <div className="text">
                <h1 className='text-[1.2rem] text-[#bbc4cc]'>Employee</h1>
            </div>
            <nav className='flex gap-2 justify-between items-center'>
                <div className="grid-view bg-[#16191c] p-2 text-[#bbc4cc] rounded  h-9">
                    <FontAwesomeIcon icon={faTableCells} className='h-5 w-5'/>
                </div>
                <div className="list-view bg-[#16191c] p-2 text-[#bbc4cc] rounded h-9">
                    <FontAwesomeIcon icon={faBars} className='h-5 w-5'/>
                </div>
                <div className="add-employee flex items-center px-3 py-1 gap-1 rounded-full bg-[#FF9B44] text-[1rem] text-[#ffffff]">
                    <FontAwesomeIcon icon={faPlus}/>
                    <h1>Add Employee</h1>
                </div>
            </nav>
        </header>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 overflowx-hidden py-3'>
            <div className="employee-id bg-[#16191c] p-3 rounded w-full ">
                <input type="text" placeholder="Employee ID" className=' bg-transparent w-full '/>
            </div>
            <div className="employee-name bg-[#16191c] p-3 rounded">
                <input type="text" placeholder="Employee Name" className=' bg-transparent w-full '/>
            </div>
            <div className="designation bg-[#16191c] p-3 rounded text-[#bbc4cc]">
                <select name="designation" title='Select Designation' className=' w-full outline-none rounded-none bg-[#16191c]'>
                    {/* <p className='text-white'>Designation</p> */}
                    <option>Select Designation</option>
                    <option value="web developer">Web Developer</option>
                    <option value="web designer">Web Designer</option>
                    <option value="andriod developer">Andriod Developer</option>
                    <option value="ios developer">Ios Developer</option>
                </select>
            </div>
           <div className="search p-3 rounded bg-[#55ce63] text-center text-white text-[1rem]">
           <button>SEARCH</button>
           </div>
        </div>

        <div className="employee grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5 py-5">
            {
                employees.map(({name, skill, userImage, href},index) => (
                    <div key={name + index} className='bg-[#16191c] py-2 px-3'>
                        <div className='flex justify-end'>
                        <FontAwesomeIcon icon={faEllipsisV} className="h-5 text-[#777777]"/>
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