"use client"
import React from 'react'
import { useState, useEffect } from 'react'
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
import userImg from '../img/user.jpg'
import Swal from 'sweetalert2'
import { redirect } from 'next/navigation'
// import 'sweetalert2/src/sweetalert2.scss'

function AddEmployeeModal() {
    const [showMod, setShowMod] = useState(false)
    const [staffs, setStaffs] = useState<any[]>([])
    const [filters, setFilters] = useState({
        searchQuery: '',
        selectedDesignation: '',
        idSearchQuery: ''
    });

    function handleModPopUp() {
        setShowMod(!showMod)
    }

    // const url = 'https://dues-api.onrender.com/api/v1/user/register'
    // const axios = require('axios')
    const company = typeof window !== 'undefined' ? localStorage.getItem('admincompany') : null;
    const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        company: company !== null ? company : "",
        designation: '',
        employeeID: ''
    })

    const handleInput = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event: any) {
        event.preventDefault()
        console.log(formData)

        if (localStorage.getItem('admincompany') === null) {
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
            // alert("Please select a company first")
        } else {
            axios.post('https://dues-api.onrender.com/api/v1/user/register', formData).then((response: any) => {
                console.log(response.data)
                Swal.fire({
                    title: 'Hurray!',
                    text: 'staff added successfully',
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
        const getUsers = () => {
            if (typeof window !== 'undefined') {
                axios({
                    url: 'https://dues-api.onrender.com/api/v1/admin/staff/' + (localStorage.getItem('admincompany') !== null ? localStorage.getItem('admincompany') : ""),
                    method: "get",
                    headers: {
                        Authorization: `Bearer ` + (localStorage.getItem('adminToken') !== null ? localStorage.getItem('adminToken') : "")
                    }
                }).then((response: any) => {
                    console.log(response.data);

                    setStaffs(response.data.staffMembers);
                }).catch((error: any) => console.log(error.data));
            }
        };

        getUsers(); // Call getUsers() when component mounts

        // Cleanup function
        return () => {
            // Optionally, perform cleanup or cancel any ongoing tasks here
        };
    }, []); // Empty dependency array ensures the effect runs only once (on mount)



    const filteredStaffs = staffs.filter(staff =>
        (!filters.searchQuery || staff.fullname.toLowerCase().includes(filters.searchQuery.toLowerCase())) &&
        (!filters.idSearchQuery || staff.employeeID.toLowerCase().includes(filters.idSearchQuery.toLowerCase())) &&
        (filters.selectedDesignation === '' || staff.designation === filters.selectedDesignation)
    );

    const handleInputChange = (event: any) => {
        const searchQuery = event.target.value;
        setFilters({ ...filters, searchQuery });
    };

    const idHandleInputChange = (event: any) => {
        const idSearchQuery = event.target.value;
        setFilters({ ...filters, idSearchQuery });
    };

    const handleSelectChange = (event: any) => {
        const selectedDesignation = event.target.value;
        setFilters({ ...filters, selectedDesignation });
    };


    const handleSearch = (event: any) => {
        event.preventDefault();
        // Send formData to the server to add the employee
        axios.post('https://dues-api.onrender.com/api/v1/user/register', formData)
            .then((response) => {
                console.log(response.data);
                // Assuming the response contains the added employee data, update the staffs state with the new data
                setStaffs([...staffs, response.data]);
                // Clear the form fields after successful submission
                // setFormData({
                //     fullname: '',
                //     email: '',
                //     password: '',
                //     designation: ''
                // });
                // Close the modal after submission
                setShowMod(false);
            })
            .catch((error) => console.log(error.data));
    };


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

            <form className='grid vsm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-3 overflowx-hidden py-3'>
                <div className="employee-id bg-[#16191c] p-3 rounded w-full ">
                    <input type="text" value={filters.searchQuery} onChange={handleInputChange} placeholder="Employee ID" className=' bg-transparent w-full text-[#bbc4cc]' />
                </div>
                <div className="employee-name bg-[#16191c] p-3 rounded">
                    <input type="text" value={filters.idSearchQuery} onChange={idHandleInputChange} placeholder="Employee Name" className=' bg-transparent w-full text-[#bbc4cc]' />
                </div>
                <div className="designation bg-[#16191c] p-3 rounded text-[#bbc4cc]">
                    <select name="designation" title='Select Designation' className=' w-full outline-none rounded-none bg-[#16191c]' onChange={handleSelectChange}>
                        {/* <p className='text-white'>Designation</p> */}
                        <option value="All designations" selected></option>
                        <option value="web developer">Web Developer</option>
                        <option value="web designer">Web Designer</option>
                        <option value="andriod developer">Andriod Developer</option>
                        <option value="ios developer">Ios Developer</option>
                    </select>
                </div>
                <div className="search p-3 rounded bg-[#55ce63] text-center text-white text-[1rem] cursor-pointer">
                    <button onClick={handleSearch}>SEARCH</button>
                </div>
            </form>

            <div className="employee grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5 py-5">
                {
                    filteredStaffs.map(({ fullname, email }, index) => (
                        <div key={fullname + index} className='bg-[#16191c] py-2 px-3'>
                            <div className='flex justify-end'>
                                <FontAwesomeIcon icon={faEllipsisV} className="h-5 text-[#777777] cursor-pointer" />
                            </div>
                            <Link href={'/'} className='text-center flex flex-col justify-center items-center'>
                                <Image src={userImg} alt="alt" className='w-[80px] rounded-full mt-3' />
                                <div className="name text-lg text-white">{fullname}</div>
                                <div className="skill text-sm text-[#8e8c8a]">{email}</div>
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