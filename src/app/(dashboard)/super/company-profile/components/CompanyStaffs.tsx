import React from 'react'
import { companyStaffs } from '../../components/AdminObj'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function CompanyStaffs() {
  return (
    <div className='mt-5'>
      <header>
        <h1 className='text-[#bbc4cc] text-[18px] md:text-[26px]'>Company Staffs</h1>
      </header>

      <div className="whitespace-nowrap">
        <table className='w-full p-4 rounded-md bg-[#16191c]'>
          <thead>
            <tr className='border-b border-[#2a3733]'>
              <td className='p-3 text-[#bbc4cc]'><h1>Name</h1></td>
              <td className='p-3 text-[#bbc4cc]'><h1>Role</h1></td>
              <td className='p-3 text-[#bbc4cc]'><h1>Email</h1></td>
              <td className='p-3 text-[#bbc4cc]'><h1>Action</h1></td>
            </tr>
          </thead>
          <tbody>
            {
              companyStaffs.map(({ name, skill, email }, index) => (
                <tr key={name + index} className='border-b border-[#2a3733]'>
                  <td className='p-3 text-[#777777]'><p>{name}</p></td>
                  <td className='p-3 text-[#777777]'><p>{skill}</p></td>
                  <td className='p-3 text-[#777777]'><p>{email}</p></td>
                  <td className='p-3 text-[#fff] flex justify-around'><EditIcon className='cursor-pointer'/> <DeleteIcon className='cursor-pointer'/></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompanyStaffs