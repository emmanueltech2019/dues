
import React from 'react'

export default function Bank() {
  return (
    <div>
      <div className="salary-info bg-[#16191c] p-4">
        <div>
          <header className='pb-4'>
            <h1 className='text-[#bbc4cc] text-xl'>Basic Salary Information</h1>
          </header>
          <div className='grid grid-cols-1 gap-6 smm:grid-cols-3 pb-6 border-b-2 border-[#bbc4cc24]'>
            <div className="basis">
              <h1 className='text-[#bbc4cc] pb-2'>Salary basis <strong className='text-[#F62d51]'>*</strong></h1>
              <select name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                <option value="select-salary-basis-type" selected>Select salary basis type</option>
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div className="amount">
              <h1 className='text-[#bbc4cc] pb-2'>Salary amount <small>per month</small></h1>
              <div title='basis-type' className='flex w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] text-[#bbc4cc]'>
                <span className='text-[#000000] bg-[#fff] h-full p-3 overflow-hidden rounded-s'>$</span><input type="text" value="0.00" placeholder="Type your salary amount" className='flex-1 px-2 bg-transparent'/>
              </div>
            </div>

            <div className="basis">
              <h1 className='text-[#bbc4cc] pb-2'>Payment type</h1>
              <select name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                <option value="select-salary-basis-type" selected>Select payment type</option>
                <option value="bank transfer">Bank transfer</option>
                <option value="check">Check</option>
                <option value="cash">Cash</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pf-info py-6 border-b-2 border-[#bbc4cc24]">
          <header>
            <h1 className='text-[#bbc4cc] text-xl pb-4'>PF Information</h1>
          </header>
          <div className='flex flex-col gap-6'>
           <div className='flex flex-col smm:flex-row gap-6'>
            <div className="basis flex-1">
                <h1 className='text-[#bbc4cc]'>PF contribution</h1>
                <select name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                  <option value="select-pf-contribution" selected>Select PF contribution</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="basis flex-1">
                <h1 className='text-[#bbc4cc]'>PF No.<strong className='text-[#f62d51]'>*</strong></h1>
                <select name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                  <option value="select-pf-contribution" selected>Select PF contribution</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className='flex-1 hidden smm:block'>

              </div>
           </div>
           <div className='flex flex-col smm:flex-row gap-6'>
              <div className="flex-1 employee-pf-rate col-span-1">
                <h1 className='text-[#bbc4cc]'>Employee PF rate</h1>
                <select name="employee-pf-rate" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                  <option value="select-pf-contribution" selected>Select PF contribution</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className='flex-1'>
                <h1 className='text-[#bbc4cc]'>Additional rate<strong className='text-[#f62d51]'>*</strong></h1>
                <select name="addition-rate" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                  <option value="select-additional-rate" selected>Select additional rate</option>
                  <option value="0%">0%</option>
                  <option value="1%">1%</option>
                  <option value="2%">2%</option>
                  <option value="3%">3%</option>
                  <option value="4%">4%</option>
                  <option value="5%">5%</option>
                  <option value="6%">6%</option>
                  <option value="7%">7%</option>
                  <option value="8%">8%</option>
                  <option value="9%">9%</option>
                  <option value="10%">10%</option>
                </select>
              </div>
              <div className='flex-1'>
                <h1 className='text-[#bbc4cc]'>Total rate</h1>
                <input type="text" placeholder="N/A" value="11%" className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-3 text-[#bbc4cc]'/>
              </div>
           </div>
            <div className="flex flex-col addition-rate smm:flex-row gap-6">
              <div className="flex-1 -pf-rate">
                <h1 className='text-[#bbc4cc]'>Employee PF rate</h1>
                <select name="employee-pf-rate" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                  <option value="select-pf-contribution" selected>Select PF contribution</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className='flex-1'>
                <h1 className='text-[#bbc4cc]'>Additional rate<strong className='text-[#f62d51]'>*</strong></h1>
                <select name="addition-rate" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                  <option value="select-additional-rate" selected>Select additional rate</option>
                  <option value="0%">0%</option>
                  <option value="1%">1%</option>
                  <option value="2%">2%</option>
                  <option value="3%">3%</option>
                  <option value="4%">4%</option>
                  <option value="5%">5%</option>
                  <option value="6%">6%</option>
                  <option value="7%">7%</option>
                  <option value="8%">8%</option>
                  <option value="9%">9%</option>
                  <option value="10%">10%</option>
                </select>
              </div>
              <div className='flex-1'>
                <h1 className='text-[#bbc4cc]'>Total rate</h1>
                <input type="text" placeholder="N/A" value="11%" className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-3 text-[#bbc4cc]'/>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='text-white flex flex-col'>
          <div className='row flex'>
            <div className="col flex-1">
              <h1>PF Contribution</h1>
              <select name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                <option value="select-pf-contribution" selected>Select PF contribution</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col flex-1">
              <h1>PF Contribution</h1>
              <select name="basis-type" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                <option value="select-pf-contribution" selected>Select PF contribution</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col flex-1">
              
            </div>
          </div>
        </div> */}

        <div className='esi-info'>
          <header>
            <h1 className='text-[#bbc4cc] text-xl pb-4'>ESI Information</h1>
          </header>

          <div className=" flex flex-col esi-form gap-6">
            <div className='flex flex-col smm:flex-row gap-6'>
              <div className="esi-contribution flex-1">
                <h1 className='text-[#bbc4cc]'>Employee PF rate</h1>
                <select name="esi-contribution" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                  <option value="select-esi-contribution" selected>Select ESI contribution</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="employee-pf-rate flex-1">
                <h1 className='text-[#bbc4cc]'>ESI No <strong className='text-[#f62d51]'>*</strong></h1>
                <select name="employee-pf-rate" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                  <option value="select-pf-contribution" selected>Select PF contribution</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className='flex-1 hidden smm:block'>

              </div>
            </div>

            <div className="flex flex-col smm:flex-row gap-6 addition-rate">
              <div className="employee-pf-rate flex-1">
                <h1 className='text-[#bbc4cc]'>Employee ESI rate</h1>
                <select name="employee-pf-rate" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                  <option value="select-pf-contribution" selected>Select PF contribution</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              
              <div className='flex-1'>
                <h1 className='text-[#bbc4cc]'>Additional rate<strong className='text-[#f62d51]'>*</strong></h1>
                <select name="addition-rate" title='basis-type' className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'>
                  <option value="select-additional-rate" selected>Select additional rate</option>
                  <option value="0%">0%</option>
                  <option value="1%">1%</option>
                  <option value="2%">2%</option>
                  <option value="3%">3%</option>
                  <option value="4%">4%</option>
                  <option value="5%">5%</option>
                  <option value="6%">6%</option>
                  <option value="7%">7%</option>
                  <option value="8%">8%</option>
                  <option value="9%">9%</option>
                  <option value="10%">10%</option>
                  </select>
              </div>
              
              <div className='flex-1'>
                <h1 className='text-[#bbc4cc]'>Total rate</h1>
                <input type="text" placeholder="N/A" value="11%" className=' w-full outline-none rounded bg-[#16191c] border border-[#bbc4cc24] p-4 text-[#bbc4cc]'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
