import React from 'react'

let bg = 'bg-[rgba(0,0,0,0.15)]'

export default function AddEmployeeModal() {
  return (
    <div className='fixed z-50 w-full h-full top-0 left-0 flex justify-center'>
      <div className="layer absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.32)] -z-10"></div>
      <div className='z-20 bg-[#34444c] rounded-[10px] w-11/12 md:max-w-[500px] lg:max-w-[800px] my-2 md:my-7 h-full'>
         <h1 className='px-[30px] pt-[30px] text-center text-[22px] text-[#bbc4cc]'>Add Employee</h1>
         <form className='py-[30px] px-[18px] text-[15px] text-[#bbc4cc]'>
            <div className="names flex w-full flex-col md:flex-row">
               <div className="firstName flex flex-col px-3 flex-1 pb-4">
                  <label htmlFor="firstName" className='py-[7px]'>First Name <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="text" name='firstName' id='firstName' required className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className='flex flex-col px-3 flex-1 pb-4'>
                  <label htmlFor="lastName" className='py-[7px]'>Last Name</label>
                  <input type="text" name='lastName' id='lastName' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>

            <div className="details flex w-full flex-col md:flex-row">
               <div className="userName flex flex-col px-3 flex-1 pb-4">
                  <label htmlFor="userName" className='py-[7px]'>Username <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="text" name='userName' id='userName' required className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className='flex flex-col px-3 flex-1 pb-4'>
                  <label htmlFor="email" className='py-[7px]'>Email <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="text" name='email' id='email' required className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>

            <div className="password flex w-full flex-col md:flex-row">
               <div className="password flex flex-col px-3 flex-1 pb-4">
                  <label htmlFor="password" className='py-[7px]'>Password <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="password" name='password' required id='password' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className='flex flex-col px-3 flex-1 pb-4'>
                  <label htmlFor="crmpwd" className='py-[7px]'>Confirm Password <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="password" name='crmpwd' required id='crmpwd' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>

            <div className="employee flex w-full flex-col md:flex-row">
               <div className="employeeid flex flex-col px-3 flex-1 pb-4">
                  <label htmlFor="employeeid" className='py-[7px]'>Employee ID <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="text" name='employeeid' required id='employeeid' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className='flex flex-col px-3 flex-1 pb-4'>
                  <label htmlFor="crmpwd" className='py-[7px]'>Confirm Password <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="password" name='crmpwd' required id='crmpwd' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>

            <div className="password flex w-full flex-col md:flex-row">
               <div className="password flex flex-col px-3 flex-1 pb-4">
                  <label htmlFor="password" className='py-[7px]'>Password <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="password" name='password' required id='password' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className='flex flex-col px-3 flex-1 pb-4'>
                  <label htmlFor="crmpwd" className='py-[7px]'>Confirm Password <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="password" name='crmpwd' required id='crmpwd' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>

            <div className="password flex w-full flex-col md:flex-row">
               <div className="password flex flex-col px-3 flex-1 pb-4">
                  <label htmlFor="password" className='py-[7px]'>Password <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="password" name='password' required id='password' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className='flex flex-col px-3 flex-1 pb-4'>
                  <label htmlFor="crmpwd" className='py-[7px]'>Confirm Password <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="password" name='crmpwd' required id='crmpwd' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>

            <div className="password flex w-full flex-col md:flex-row">
               <div className="password flex flex-col px-3 flex-1 pb-4">
                  <label htmlFor="password" className='py-[7px]'>Password <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="password" name='password' required id='password' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className='flex flex-col px-3 flex-1 pb-4'>
                  <label htmlFor="crmpwd" className='py-[7px]'>Confirm Password <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="password" name='crmpwd' required id='crmpwd' className='bg-transparent border-[rgb(227,227,227)] border rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>
         </form>
      </div>
    </div>
  )
}
