
import React from 'react'

export default function EditProfile() {
  return (
    <div>
      <div className="salary-info bg-[#16191c] p-4 my-4 rounded-md">
        <div>
          <header className='pb-4'>
            <h1 className='text-[#bbc4cc] text-xl'>Edit Your Profile</h1>
          </header>
        </div>

        <div className="pf-info py-6 border-b-2 border-[#bbc4cc24]">
          <header>
            <h1 className='text-[#bbc4cc] text-xl pb-4'>Personal Information</h1>
          </header>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col smm:flex-row gap-6'>
              <div className="basis flex-1">
                <label htmlFor="name" className='text-[#bbc4cc]'>Name</label>
                <input id="name" type="text" name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]' placeholder='E.g Jerry Wilson' />
              </div>

              <div className="basis flex-1">
                <label htmlFor="email" className='text-[#bbc4cc]'>Email<strong className='text-[#f62d51]'>*</strong></label>
                <input id="email" type="email" name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]' />
              </div>
              <div className='flex-1 hidden smm:block'>

              </div>
            </div>
            <div className='flex flex-col smm:flex-row gap-6'>
              <div className="flex-1 employee-pf-rate col-span-1">
                <label htmlFor="phone" className='text-[#bbc4cc]'>Phone</label>
                <input id="phone" type="tel" className=" w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]"/>
              </div>
              <div className="flex-1">
                <label htmlFor="birthday" className="text-[#bbc4cc]">Birthday</label>
                <input id="birthday" type="date"  className=" w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]"/>
              </div>
              <div className="flex-1">
                <label htmlFor="address" className="text-[#bbc4cc]">Address</label>
                <input id="address" type="text" placeholder="N/A" value="11%" className= "w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-3 text-[#bbc4cc]"/>
              </div>
           </div>
            <div className="flex flex-col addition-rate smm:flex-row gap-6">
              <div className="flex-1 -pf-rate">
                <label htmlFor="gender" className="text-[#bbc4cc]">Gender</label>
                <input id="gender" type="text" className=" w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]"/>
              </div>
              <div className="flex-1">
                <label htmlFor="nationality" className="text-[#bbc4cc]">Nationality</label>
                <input id="nationality" type='text'  className="w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]"/>
              </div>
              <div className="flex-1">
                <label htmlFor="religion" className="text-[#bbc4cc]">Religion</label>
                <input id="religion" type='text'  className="w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]"/>
              </div>
              
            </div>
              <div className='grid grid-cols-1 gap-6 smm:grid-cols-3 '>
                <div className="flex-1">
                  <label htmlFor="marital-status" className="text-[#bbc4cc]">Marital Status</label>
                  <input id="marital-status" type='text'  className="w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]"/>
                </div>
                <div className="flex-1">
                  <label htmlFor="no-of-children" className="text-[#bbc4cc]">No. of children</label>
                  <input id="no-of-children" type='text'  className="w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]"/>
                </div>
              </div>
          </div>
        </div>

    </div>    

      
  </div>
  )
}
