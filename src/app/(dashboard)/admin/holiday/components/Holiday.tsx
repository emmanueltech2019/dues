'use client'
import React, { useEffect, useState } from 'react'
import { holidays } from './holidayTableObj';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import Swal from 'sweetalert2'
import axios from 'axios'
import { ServerInsertedHTMLContext } from 'next/navigation';

function Holiday() {

  const [showMod, setShowMod] = useState(false)
  const [editMod, setEditMod] = useState(false)
  const [holidays, setHolidays] = useState([])
  const [currentModData, setCurrentModData] = useState("")
  function handleModPopUp() {
    setShowMod(!showMod)
  }

  function editModPopUp() {
    setEditMod(!editMod)
  }

  const [holidayData, setHolidayData] = useState({
    holidayName: '',
    startDate: '',
    endDate: '',
    company: (localStorage.getItem('admincompany') !== null ? localStorage.getItem('admincompany') : "")
  })
  
  const handleInput = (event: any) => {
    setHolidayData({ ...holidayData, [event.target.name]: event.target.value })
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    console.log(holidayData)

    if ((localStorage.getItem('admincompany')) === null) {
      Swal.fire({
        title: 'Sorry!',
        text: 'Please login',
        icon: 'warning',
        timer: 5000
      }).then(() => {
        setTimeout(() => {
          window.location.href = "auth/login";
        }, 3000); // Redirect after 5 seconds
      });
    } else {
      console.log("startnjhgjhg", holidayData)
      axios({
        url: 'https://dues-api.onrender.com/api/v1/admin/holiday-records',
        data: holidayData,
        method: "post",
        headers: {
          Authorization: `Bearer ` + (localStorage.getItem('adminToken') !== null ? localStorage.getItem('adminToken') : "")
        }

      }).then((response: any) => {
        console.log(response.data)
        Swal.fire({
          title: 'Hurray!',
          text: 'Holiday added successfully',
          icon: 'success',
          confirmButtonText: 'Done',
          timer: 5000
        }).then(() => {
          window.location.reload()
        })
      }).catch((error: any) => console.log(error.data))
    }
  }

  useEffect(() => {
    const getHolidays = () => {
      let data = { company: (localStorage.getItem('admincompany') !== null ? localStorage.getItem('admincompany') : "") }
      axios({
        url: (`https://dues-api.onrender.com/api/v1/admin/holiday-record/${currentModData}`),
        method: 'post',
        data,
        headers: {
          Authorization: `Bearer ` + (localStorage.getItem('adminToken') !== null ? localStorage.getItem('adminToken') : "")
        }
      }).then((response: any) => {
        console.log("na here oh", response.data)
        setHolidays(response.data.holidayRecords)
      }).catch((error: any) => {
        console.log(error.data)
      })
    }

    getHolidays()
  }, [])

  const editHoliday = (id: any) => {
    editModPopUp()
    setCurrentModData(id)
    axios({
      url: `https://dues-api.onrender.com/api/v1/admin/holiday-records/${currentModData}` && `https://dues-api.onrender.com/api/v1/admin/holiday-records/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken') || ""}`
      }
    }).then((response)=>{
      console.log(response)
      let data = response.data.holidayRecord
      setHolidayData({
        holidayName: data.holidayName,
        endDate: data.endDate,
        startDate: data.startDate
      })
    }).catch((error: any) => {
      console.log(error.data)
    })
  }

  const handleEdit = (e:React.FormEvent, id: any) => {
    e.preventDefault()
    axios({
      url: `https://dues-api.onrender.com/api/v1/admin/holiday-records/${currentModData}`,
      method: "put",
      data: holidayData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken') || ""}`
      }
    }).then((response) => {
    console.log(response.data)
    setHolidays(holidays.map(holiday => holiday._id === currentModData ? { ...holiday, ...holidayData } : holiday));
    Swal.fire({
      title: 'Success!',
      text: 'Holiday deleted successfully',
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 5000
    });
    setEditMod(false) //close modal after update has been made
    }).catch((error: any) => {
      console.log(error.response.data);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to delete holiday',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
}

  const deleteHoliday = (id: any) => {
    axios({
      url: `https://dues-api.onrender.com/api/v1/admin/holiday-records/${id}`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken') || ""}`
      }
    }).then((response) => {
      console.log(response.data);
      setHolidays(holidays.filter(holiday => holiday._id !== id));
      Swal.fire({
        title: 'Success!',
        text: 'Holiday deleted successfully',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 5000
      });
    }).catch((error) => {
      console.log(error.response.data);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to delete holiday',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  };

  
  return (
    <div id='holiday' className='p-4 relative top-0'>
      <header className='flex justify-between items-center my-4'>
        <div>
          <h3 className='text-[#bbc4cc] text-[18px] sm:text-[26px]'>Holidays 2019</h3>
          <p className='text-[15px] text-[#bbc4cc]'><span className=''>Dashboard</span> <span className='text-[#777777]'>/ Holidays</span></p>
        </div>
        <div>
          <button onClick={handleModPopUp} className="add-employee flex items-center px-3 py-1 gap-1 rounded-full bg-[#FF9B44] text-[1rem] text-[#ffffff] cursor-pointer">
            <FontAwesomeIcon icon={faPlus} />
            <h1 className='text-[14px]'>Add Holiday</h1>
          </button>
        </div>
      </header>

      <div className="whitespace-nowrap">
        <table className="w-full bg-[#34444c]">
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
              holidays.map(({ _id, holidayName, startDate, endDate }, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border border-[#2e3840] text-[#fff]"></td>
                  <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{holidayName}</td>
                  <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{startDate.split("T")[0]}</td>
                  <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{endDate.split("T")[0]}</td>
                  <td className="py-2 px-4 border border-[#2e3840] text-[#fff] "><div className='flex justify-center gap-4'>
                    <FontAwesomeIcon icon={faPencil} onClick={()=>editHoliday(_id)}/><FontAwesomeIcon icon={faTrashCan} h-full onClick={()=>deleteHoliday(_id)}/>
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
                <button title='btn'><FontAwesomeIcon icon={faXmark} className='text-[#ff9b44]' /></button>
              </div>
            </header>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='holiday-name' className='text-[#777777] text-[18px]'>Holiday Name</label>
                <input id="holiday-name" type="text" name="holidayName" className='w-full p-2 bg-[#16191c] my-3 text-[#bbc4cc] rounded-md p-3' onChange={handleInput} />
              </div>
              <div>
                <label htmlFor='start-date' className='text-[#777777] text-[18px]'>Start Date</label>
                <input id="start-date" type="date" name="startDate" className='w-full p-2 bg-[#16191c] my-3 text-[#bbc4cc] rounded-md p-3' onChange={handleInput} />
              </div>
              <div>
                <label htmlFor='end-date' className='text-[#777777] text-[18px]'>End Date</label>
                <input id="end-date" type="date" name="endDate" className='w-full p-2 bg-[#16191c] my-3 text-[#bbc4cc] rounded-md p-3' onChange={handleInput} />
              </div>
              <div className='text-center'>
                <button onClick={handleInput} type='submit' className='text-[#fff] text-[18px] sm-[24px] bg-[#ff9b44] px-3 py-1 rounded-md w-[50%] my-3'>Submit</button>
              </div>
            </form>
          </div>
        </div> : null
      }


        {editMod ?
          <div className='absolute top-[9%] left-[17%] md:left-[25%] z-[999] w-[65%] md:w-[500px] shadow-[0px_0px_4000px_1000px_rgba(0,0,0,0.3)] rounded-lg transition-transform'>
            <div className="mod bg-[#34444c] p-3 rounded-lg">
              <header className='flex justify-between items-center'>
                <h1 className='text-[#bbc4cc] text-[18px] md:text-[26px] py-3 pb-5'>Edit Holiday</h1>
                <div className='border border-[#ff9b44] rounded-full h-9 px-3 pt-[7px] cursor-pointer' onClick={editModPopUp}>
                  <button title='btn'><FontAwesomeIcon icon={faXmark} className='text-[#ff9b44]' /></button>
                </div>
              </header>

              <form onSubmit={handleEdit}>
                <div>
                  <label htmlFor='holiday-name' className='text-[#777777] text-[18px]'>Holiday Name</label>
                  <input id="holiday-name" type="text" name="holidayName" value={holidayData.holidayName} className='w-full p-2 bg-[#16191c] my-3 text-[#bbc4cc] rounded-md p-3' onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor='start-date' className='text-[#777777] text-[18px]'>Start Date</label>
                  <input id="start-date" type="date" name="startDate" value={holidayData.startDate.split("T")[0]} className='w-full p-2 bg-[#16191c] my-3 text-[#bbc4cc] rounded-md p-3' onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor='end-date' className='text-[#777777] text-[18px]'>End Date</label>
                  <input id="end-date" type="date" name="endDate" value={holidayData.endDate.split("T")[0]} className='w-full p-2 bg-[#16191c] my-3 text-[#bbc4cc] rounded-md p-3' onChange={handleInput} />
                </div>
                <div className='text-center'>
                  <button onClick={handleInput} type='submit' className='text-[#fff] text-[18px] sm-[24px] bg-[#ff9b44] px-3 py-1 rounded-md w-[50%] my-3'>Submit</button>
                </div>
              </form>
            </div>
          </div> : null
        }
    </div>
  )
}

export default Holiday
