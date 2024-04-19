import React from 'react'

function CompanySettings() {
  return (
    <div className='my-6 bg-[#16191c] rounded-md p-3'>
        <header>
            <h1 className='text-[#bbc4cc] text-[18px] md:text-[26px]'>Company Settings</h1>
        </header>

        <div className='flex flex-col smm:flex-row gap-6 my-3'>
              <div className="basis flex-1">
                <label htmlFor="name" className='text-[#bbc4cc]'>Name</label>
                <input id="name" type="text" name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]' placeholder='E.g Jerry Wilson' />
              </div>

              <div className="basis flex-1">
                <label htmlFor="email" className='text-[#bbc4cc]'>Industry<strong className='text-[#f62d51]'>*</strong></label>
                <input id="email" type="text" name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]' />
              </div>
              
              <div className="flex-1 employee-pf-rate col-span-1">
                <label htmlFor="phone" className='text-[#bbc4cc]'>Address</label>
                <input id="phone" type="tex" className=" w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]"/>
              </div>
        </div>
        <div className='flex flex-col smm:flex-row gap-6 my-3'>
              <div className="basis flex-1">
                <label htmlFor="name" className='text-[#bbc4cc]'>City</label>
                <input id="name" type="text" name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]' placeholder='E.g Jerry Wilson' />
              </div>

              <div className="basis flex-1">
                <label htmlFor="email" className='text-[#bbc4cc]'>Country<strong className='text-[#f62d51]'>*</strong></label>
                <input id="email" type="text" name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]' />
              </div>
              
              <div className="flex-1 employee-pf-rate col-span-1">
                <label htmlFor="phone" className='text-[#bbc4cc]'>Website</label>
                <input id="phone" type="text" className=" w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]"/>
              </div>
        </div>

        <div className="button py-1 pt-3 text-center w-full">
            <button className=' bg-gradient-color text-white p-2 px-4 rounded-md text-[18px] md:text-[16px] w-[50%]'>Save</button>
        </div>
    </div>
  )
}

export default CompanySettings