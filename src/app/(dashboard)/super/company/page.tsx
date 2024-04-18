import React from 'react'

export default function page() {
   return (
      <div className='p-[30px] flex justify-center'>
         <div className='text-[#bbc4cc] w-4/5'>
         <h1 className='mb-[30px] pb-[5px] text-2xl'>Company Settings</h1>
         <form action="py-[30px]">
            <div className="names flex w-full flex-col md:flex-row gap-7">
               <div className="flex flex-col flex-1 pb-4">
                  <label htmlFor="companyName" className='py-[7px]'>Company Name <span className='text-[rgb(246,45,81)]'>*</span></label>
                  <input type="text" name='companyName' id='companyName' required className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className='flex flex-col flex-1 pb-4'>
                  <label htmlFor="contactPerson" className='py-[7px]'>Contact Person</label>
                  <input type="text" name='contactPerson' id='contactPerson' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>

            <div className='flex flex-col flex-1 pb-4'>
               <label htmlFor="address" className='py-[7px]'>Address</label>
               <input type="text" name='address' id='address' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' />
            </div>

            <div className="names flex w-full flex-col md:flex-row gap-7">
               <div className="flex flex-col flex-1 pb-4">
                  <label htmlFor="country" className='py-[7px]'>Country</label>
                  {/* <input type="text" name='country' id='country' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' /> */}
                  <select name="country" id="country" className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none'>
                     <option value="USA">USA</option>
                     <option value="United-Kingdom">United Kingdom</option>
                  </select>
               </div>
               <div className='flex flex-col flex-1 pb-4'>
                  <label htmlFor="city" className='py-[7px]'>City</label>
                  <input type="text" name='city' id='city' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className="flex flex-col flex-1 pb-4">
                  <label htmlFor="state" className='py-[7px]'>State/Province</label>
                  {/* <input type="text" name='state' id='state' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' /> */}
                  <select name="state" id="state" className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none'>
                     <option value="califonia">Califonia</option>
                     <option value="alaska">Alaska</option>
                     <option value="alabama">Alabama</option>
                  </select>
               </div>
               <div className='flex flex-col flex-1 pb-4'>
                  <label htmlFor="postalcode" className='py-[7px]'>Postal Code</label>
                  <input type="text" name='postalcode' id='postalcode' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>

            <div className="names flex w-full flex-col md:flex-row gap-7">
               <div className="flex flex-col flex-1 pb-4">
                  <label htmlFor="email" className='py-[7px]'>Email</label>
                  <input type="text" name='email' id='email' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className='flex flex-col flex-1 pb-4'>
                  <label htmlFor="phone" className='py-[7px]'>Phone Number</label>
                  <input type="text" name='phone' id='phone' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>

            <div className="names flex w-full flex-col md:flex-row gap-7">
               <div className="flex flex-col flex-1 pb-4">
                  <label htmlFor="mobile" className='py-[7px]'>Mobile Number</label>
                  <input type="text" name='mobile' id='mobile' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
               <div className='flex flex-col flex-1 pb-4'>
                  <label htmlFor="fax" className='py-[7px]'>Fax</label>
                  <input type="text" name='fax' id='fax' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' />
               </div>
            </div>
            
            <div className='flex flex-col flex-1 pb-4'>
               <label htmlFor="website" className='py-[7px]'>Website URL</label>
               <input type="text" name='website' id='website' className='bg-[rgb(22,25,28)] rounded-md px-3 py-[6px] h-11 outline-none' />
            </div>

            <input type="submit" value='Save' className='cursor-pointer mt-10 px-[20px] py-[10px] text-lg flex justify-center items-center mx-auto bg-[#ff9b44] rounded-[50px] min-w-[200px]' />
         </form>
      </div>
      </div>
   )
}
