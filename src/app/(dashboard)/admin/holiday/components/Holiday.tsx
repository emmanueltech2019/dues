'use client'
import React, {useState} from 'react'
import { holidays } from './holidayTableObj'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'



function Holiday() {

  const [showMod, setShowMod] = useState(false)

  function handleModPopUp() {
    setShowMod(!showMod)
  }

  const [holidayData, setHolidayData] = useState({
    holidayName: '',
    startDate: '',
    endDate: '',
    companyId: ''
  })

  const handleInput = () => {
    setHolidayData()
  }

  return (
    <div id='holiday' className='p-4 relative top-0'>
        <header className='flex justify-between items-center my-4'>
          <div>
            <h3 className='text-[#bbc4cc] text-[18px] sm:text-[26px]'>Holidays 2019</h3>
            <p className='text-[15px] text-[#bbc4cc]'><span className=''>Dashboard</span> <span className='text-[#777777]'>/ Holidays</span></p>
          </div>
          <div>
            <button onClick={handleModPopUp} className="add-employee flex items-center px-3 py-1 gap-1 rounded-full bg-[#FF9B44] text-[1rem] text-[#ffffff] cursor-pointer">
              <FontAwesomeIcon icon={faPlus}/>
              <h1 className='text-[14px]'>Add Holiday</h1>
            </button>
          </div>
        </header>

        <div className="whitespace-nowrap">
          <table  className="w-full bg-[#34444c]">
              <thead>
                <tr className="text-[#BBC4CC] text-[15px] font-semibold text-left">
                    <th className="py-2 px-4 border border-[#2e3840]">#</th>
                    <th className="py-2 px-4 border border-[#2e3840]">Title</th>
                    <th className="py-2 px-4 border border-[#2e3840]">Holiday Date</th>
                    <th className="py-2 px-4 border border-[#2e3840]">Day</th>
                    <th className="py-2 px-4 border border-[#2e3840]">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  holidays.map(({id, title, date, day}, index) => (
                    <tr key={id + index}>
                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{id}</td>
                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{title}</td>
                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{date}</td>
                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{day}</td>
                    <td className="py-2 px-4 border border-[#2e3840] text-[#fff] "><div className='flex justify-center gap-4'>
                        <FontAwesomeIcon icon={faPencil}/><FontAwesomeIcon icon={faTrashCan} h-full/>
                      </div></td>
                  </tr> 
                  ))
                }
                
              </tbody>
          </table>
          </div>

          {showMod ?
            <div className='absolute top-[9%] left-[17%] md:left-[25%] z-[999] w-[65%] md:w-[500px] shadow-[0px_0px_4000px_1000px_rgba(0,0,0,0.3)] rounded-lg transition-transform'>
              <div className="mod bg-[#34444c] p-3 rounded-lg">
                <header className='flex justify-between items-center'>
                  <h1 className='text-[#bbc4cc] text-[18px] md:text-[26px] py-3 pb-5'>Add Holiday</h1>
                  <div className='border border-[#ff9b44] rounded-full h-9 px-3 pt-[7px] cursor-pointer' onClick={handleModPopUp}>
                    <button title='btn'><FontAwesomeIcon icon={faXmark} className='text-[#ff9b44]'/></button>
                  </div>
                </header>

                <div>
                  <label htmlFor='holiday-name' className='text-[#777777] text-[18px]'>Holiday Name</label>
                  <input id="holiday-name" type="text" name="holidayName" className='w-full p-2 bg-[#16191c] my-3 text-[#bbc4cc] rounded-md p-3'/>
                </div>
                <div>
                  <label htmlFor='start-date' className='text-[#777777] text-[18px]'>Start Date</label>
                  <input id="start-date" type="date" name="startDate" className='w-full p-2 bg-[#16191c] my-3 text-[#bbc4cc] rounded-md p-3'/>
                </div>
                <div>
                  <label htmlFor='end-date' className='text-[#777777] text-[18px]'>End Date</label>
                  <input id="end-date" type="date" name="endDate" className='w-full p-2 bg-[#16191c] my-3 text-[#bbc4cc] rounded-md p-3'/>
                </div>
                <div>
                  <label htmlFor='company-id' className='text-[#777777] text-[18px]'>Company ID</label>
                  <input id="company-id" type="text" name="companyId" className='w-full p-2 bg-[#16191c] my-3 text-[#bbc4cc] rounded-md p-3'/>
                </div>
                <div className='text-center'>
                  <button type='submit' className='text-[#fff] text-[18px] sm-[24px] bg-[#ff9b44] px-3 py-1 rounded-md w-[50%] my-3'>Submit</button>
                </div>
              </div>
            </div> :  null
          }
    </div>
  )
}

export default Holiday
