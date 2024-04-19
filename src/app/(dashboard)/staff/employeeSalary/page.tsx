import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { salaryTable } from './components/tableModObj'

function EmployeeSalary() {

  return (
    <div id='employee-salary' className='p-[30px]'>
       <div className='p-4'>
            <header className='flex items-center justify-between py-5'>
                <h3 className='text-[#bbc4cc] text-[1.2rem]'>Employee Salary</h3>
            </header>

                        
            <div className="entries flex flex-col justify-center p-1">
                <div className="show-entries flex items-center gap-2 my-3">
                    <p className='text-[#bbc4cc]'>Show</p>
                    <select name='entries' title='entries' className='bg-[#16191c] p-2 text-[#bbc4cc]'>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <p className='text-[#bbc4cc]'>entries</p>
                </div>

                <div className="overflow-x-scroll whitespace-nowrap">
                  <table  className="w-full">
                     <thead>
                        <tr className="text-[#BBC4CC] text-[15px] font-semibold text-left">
                           <th className="py-2 px-4 border border-[#2e3840]">Employee</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Employee ID</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Email</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Join Date</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Role</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Salary</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Payslip</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                            salaryTable.map(({id, employee, employeeId, email, joinDate, role, salary}, index) =>(
                                <tr key={id + index}>
                                    <td className="py-2 px-4 border border-[#2e3840] text-[#8e8e8e]">{employee}</td>
                                    <td className="py-2 px-4 border border-[#2e3840] text-[#8e8e8e] text-sm">{employeeId}</td>
                                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{email}</td>
                                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{joinDate}</td>
                                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{role}</td>
                                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">&#36;{salary}</td>
                                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff]"><Link href='/staff/employeeSalary/payslip'><button className='text-[#ffff] text-[.8rem] bg-[#ff9b44] px-4 py-1 rounded-md'>Generate Slip</button></Link></td>
                                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff] flex justify-between items-center"><FontAwesomeIcon icon={faPencil}/><FontAwesomeIcon icon={faTrashCan} h-full/></td>
                                </tr>    
                            ))
                        }
                        
                     </tbody>
                  </table>
               </div>
            </div>
       </div>
    </div>
  )
}

export default EmployeeSalary