"use client"
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
// import React from 'react'
import { faTableCells } from '@fortawesome/free-solid-svg-icons/faTableCells'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { employees } from '../components/page-objects';
import Image from 'next/image'
import axios from 'axios'

function AddEmployeeModal() {
    const [showMod, setShowMod] = useState(false)

    function handleModPopUp() {
        setShowMod(!showMod)
    }

    // const url = 'https://dues-api.onrender.com/api/v1/user/register'
    const axios = require('axios')
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
    })

    const handleInput = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event: any) {
        event.preventDefault()
        console.log(formData)
        axios.post('https://dues-api.onrender.com/api/v1/user/register', formData ).then((response: any) => {
            console.log(response.data)
        }).catch((error: any) => console.log(error.data))
    }

    function getUsers() {
        if (typeof window !== 'undefined') {
            axios({
                url: 'https://dues-api.onrender.com/api/v1/admin/staff/' + (localStorage.getItem('admincompany') !== null ? localStorage.getItem('admincompany') : ""),
                method: "get",
                headers: {
                    Authorization: `Bearer ` + (localStorage.getItem('adminToken') !== null ? localStorage.getItem('adminToken') : "")
                }
            }).then((response: any) => {
                console.log(response.data)
            }).catch((error: any) => console.log(error.data))
        }
    }
    
    getUsers()
    return (
        <div className='px-5'>
            <header className="flex justify-between items-center w-full py-3">
                <div className="text">
                    <h1 className='text-[1.2rem] text-[#bbc4cc]'>Employee</h1>
                </div>
                <nav className='flex gap-2 justify-between items-center'>
                    <button onClick={handleModPopUp} className="add-employee flex items-center px-3 py-1 gap-1 rounded-full bg-[#FF9B44] text-[1rem] text-[#ffffff] cursor-pointer">
                        <FontAwesomeIcon icon={faPlus} />
                        <h1>Add Employee</h1>
                    </button>
                </nav>
            </header>

            <div className='grid vsm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-3 overflowx-hidden py-3'>
                <div className="employee-id bg-[#16191c] p-3 rounded w-full ">
                    <input type="text" placeholder="Employee ID" className=' bg-transparent w-full ' />
                </div>
                <div className="employee-name bg-[#16191c] p-3 rounded">
                    <input type="text" placeholder="Employee Name" className=' bg-transparent w-full ' />
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
                <div className="search p-3 rounded bg-[#55ce63] text-center text-white text-[1rem] cursor-pointer">
                    <button>SEARCH</button>
                </div>
            </div>

            <div className="employee grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5 py-5">
                {
                    employees.map(({ name, skill, userImage, href }, index) => (
                        <div key={name + index} className='bg-[#16191c] py-2 px-3'>
                            <div className='flex justify-end'>
                                <FontAwesomeIcon icon={faEllipsisV} className="h-5 text-[#777777] cursor-pointer" />
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

            <div className="modal">
                {showMod ?
                    <div className='fixed top-[23%] left-[17%] md:left-[19%] lg:left-[38%] z-[999] w-[65%] md:w-[500px] shadow-[0px_0px_4000px_1000px_rgba(0,0,0,0.3)] rounded-lg transition-transform'>
                        <div className="mod bg-[#34444c] p-3 rounded-lg">
                            <header className='flex justify-between items-center'>
                                <h1 className='text-[#bbc4cc] text-[18px] md:text-[26px] py-3 pb-5'>Add Holiday</h1>
                                <div className='border border-[#ff9b44] rounded-full h-9 px-3 pt-[7px] cursor-pointer' onClick={handleModPopUp}>
                                    <button title='btn'><FontAwesomeIcon icon={faXmark} className='text-[#ff9b44]' /></button>
                                </div>
                            </header>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor='name' className='text-[#777777] text-[18px]'>Full Name</label>
                                    <input id="name" type="text" name="fullname" onChange={handleInput} className='w-full p-2 bg-[#16191c] my-2 text-[#bbc4cc] rounded-md p-3' />
                                </div>
                                <div>
                                    <label htmlFor='email' className='text-[#777777] text-[18px]'>Email</label>
                                    <input id="email" type="email" name="email" onChange={handleInput} className='w-full p-2 bg-[#16191c] my-2 text-[#bbc4cc] rounded-md p-3' />
                                </div>
                                <div>
                                    <label htmlFor='password' className='text-[#777777] text-[18px]'>Password</label>
                                    <input id="password" type="password" name="password" onChange={handleInput} className='w-full p-2 bg-[#16191c] my-2 text-[#bbc4cc] rounded-md p-3' />
                                </div>
                                <div className='text-center'>
                                    <button type='submit' className='text-[#fff] text-[18px] sm-[24px] bg-[#ff9b44] px-3 py-1 rounded-md w-[50%] my-3'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default AddEmployeeModal