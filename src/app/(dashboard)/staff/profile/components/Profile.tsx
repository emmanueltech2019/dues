import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV'

function Profile() {
  return (
    <div>
        <div className='my-7'>
            <div className="personal text-[#bbc4cc] grid sm:grid-cols-2 gap-6">
               <div className="personal-info p-4 rounded-lg bg-[#16191c]">
                    <header className='py-3'>
                        <h1 className='text-[1.4rem]'>Personal Informations</h1>
                    </header>
                    <div className="informations flex flex-col gap-2 text-[.83rem]">
                        <div className="passport-no flex justify-start gap-9">
                            <h1 className='flex-1'>Passport No.</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>9876543210</p>
                        </div>
                        <div className="passport-exp flex justify-start gap-9">
                            <h1 className='flex-1'>Passport Exp Date.</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>9876543210</p>
                        </div>
                        <div className="date flex justify-start gap-9">
                            <h1 className='flex-1'>Date</h1>
                            <p className='flex-[2] text-[#8e8c8a]'></p>
                        </div>
                        <div className="tel flex justify-start gap-9">
                            <h1 className='flex-1'>Tel</h1>
                            <p className='flex-[2] text-[#1628c3]'>9876543210</p>
                        </div>
                        <div className="nationality flex justify-start gap-9">
                            <h1 className='flex-1'>Nationality</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>Indian</p>
                        </div>
                        <div className="religion flex justify-start gap-9">
                            <h1 className='flex-1'>Religion</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>Christian</p>
                        </div>
                        <div className="marital-status flex justify-start gap-9">
                            <h1 className='flex-1'>Marital Status</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>Married</p>
                        </div>
                        <div className="employment flex justify-start gap-9">
                            <h1 className='flex-1'>Employment of spouse</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>No</p>
                        </div>
                        <div className="no-of-children flex justify-start gap-9">
                            <h1 className='flex-1'>No. of children</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>2</p>
                        </div>
                    </div>
               </div>

               <div className="emergency-contact p-4 rounded-lg bg-[#16191c] text-[.83rem]">
                    <header className='py-3'>
                        <h1 className='text-[1.3rem]'>Emergency Contact</h1>
                    </header>
                    <div className="information">
                        <div className="primary">
                            <h1>Primay</h1>
                           <div className='flex flex-col gap-2'>
                                <div className="name flex justify-start">
                                    <h1 className='flex-1'>Name</h1>
                                    <p className='flex-[2] text-[#8e8c8a]'>John Doe</p>
                                </div>
                                <div className="relationship flex justify-start">
                                    <h1 className='flex-1'>Relationship</h1>
                                    <p className='flex-[2] text-[#8e8c8a]'>Father</p>
                                </div>
                                <div className="phone flex justify-start">
                                    <h1 className='flex-1'>Phone</h1>
                                    <p className='flex-[2] text-[#8e8c8a]' >9876543210, 9876543210</p>
                                </div>
                           </div>
                        </div>

                        <div className="secondary">
                            <h1>Secondary</h1>
                            <div className='flex flex-col gap-2'>
                                <div className="name flex justify-start">
                                    <h1 className='flex-1'>Name</h1>
                                    <p className='flex-[2] text-[#8e8c8a]'>Karen Wills</p>
                                </div>
                                <div className="relationship flex justify-start">
                                    <h1 className='flex-1'>Relationship</h1>
                                    <p className='flex-[2] text-[#8e8c8a]'>Brother</p>
                                </div>
                                <div className="phone flex justify-start">
                                    <h1 className='flex-1'>Phone</h1>
                                    <p className='flex-[2] text-[#8e8c8a]'>9876543210, 9876543210</p>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <div className="bank-information p-4 rounded-lg bg-[#16191c] text-[.83rem]">
                    <header className='py-3'>
                        <h1 className='text-[1.2rem]'>Bank information</h1>
                    </header>
                    <div className='flex flex-col gap-2'>
                        <div className="bank-name flex justify-start gap-2">
                            <h1 className='flex-1'>Bank Name</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>ICIC Bank</p>
                        </div>
                        <div className="account-number flex justify-start gap-2">
                            <h1 className='flex-1'>Bank account No.</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>159830414641</p>
                        </div>
                        <div className="ifsc flex justify-start gap-2">
                         <h1 className='flex-1'>IFSC Code</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>ICI24504</p>
                        </div>
                        <div className="pan-no flex justify-start gap-2">
                         <h1 className='flex-1'>PAN No.</h1>
                            <p className='flex-[2] text-[#8e8c8a]'>TC000Y56</p>
                        </div>
                    </div>
               </div>

               <div className="family-informations p-4 rounded-lg bg-[#16191c] overflow-hidden text-[.83rem]">
                    <div>
                        <h1 className='text-[1.3rem] mb-3'>Family Information</h1>
                    </div>
                    <div className="whitespace-nowrap overflow-x-scroll">
                        <table className='w-full'>
                            <thead>
                                <tr className='bg-[#34444c] border-b border-[#2a3733]'>
                                    <td className='p-3'><h1>Name</h1></td>
                                    <td className='p-3'><h1>Relationship</h1></td>
                                    <td className='p-3'><h1>Date of Birth</h1></td>
                                    <td className='p-3'><h1>Phone</h1></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-[#34444c]'>
                                    <td className='p-3'><p>Leo</p></td>
                                    <td className='p-3'><p>Brother</p></td>
                                    <td className='p-3'><p>Feb 16th,2019</p></td>
                                    <td className='p-3'><p>9876543210</p></td>
                                    <td className='p-3'><FontAwesomeIcon icon={faEllipsisV} className="h-5 text-[#777777]"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
               </div>

               <div className="educations-info bg-[#16191c] p-4 rounded-md text-[.83rem]">
                    <header>
                        <h1 className='text-[1.3rem]'>Education Informations</h1>
                    </header>
                    <div className='ps-3'>
                        <div className="info1 flex gap-3">
                            <div className="circle bg-slate-400 w-[2px] h-[94px] relative top-5">
                                <span className='w-3 h-3 bg-slate-400 absolute rounded-full right-[-5px] top-[-2px]'></span>
                            </div>
                            <div className='bg-[#2e3840] p-2 mt-3 w-full'>
                                <h1 className='text-[#8e8c8a]'>
                                    International College of Arts and Science (UG)
                                </h1>
                                <p>
                                    Bsc Computer Science
                                </p>
                                <small>2000 - 2003</small>
                            </div>
                        </div>
                        <div className="info1 flex gap-3">
                            <div className="circle bg-slate-400 w-[2px] h-[4.7rem] sm:h-[6.7rem] relative top-5 sm:top-[6px]">
                                <span className='w-3 h-3 bg-slate-400 absolute rounded-full right-[-5px] top-[5px] sm:top-[23px]'></span>
                            </div>
                            <div className='bg-[#2e3840] p-2 mt-5 w-full'>
                                <h1 className='text-[#8e8c8a]'>
                                    International College of Arts and Science (UG)
                                </h1>
                                <p>
                                    Bsc Computer Science
                                </p>
                                <small>2000 - 2003</small>
                            </div>
                        </div>
                    </div>
               </div>

               <div className="educations-info bg-[#16191c] p-4 rounded-md text-[.83rem]">
                    <header>
                        <h1 className='text-[1.3rem]'>Experiance</h1>
                    </header>
                    <div className='ps-3'>
                        <div className="info1 flex gap-6">
                            <div className="circle bg-slate-400 w-[2px] relative top-5">
                                <span className='w-3 h-3 bg-slate-400 absolute rounded-full right-[-5px] top-[-2px]'></span>
                            </div>
                            <div className='bg-[#2e3840] p-2 mt-3 w-full'>
                                <h1 className='text-[#8e8c8a]'>
                                    Web Designer at Zen Corporation
                                </h1>
                                <small>Jan 2013-Present (5 years 2 months)</small>
                            </div>
                        </div>
                        <div className="info1 flex gap-6">
                            <div className="circle bg-slate-400 w-[2px] relative top-5">
                                <span className='w-3 h-3 bg-slate-400 absolute rounded-full right-[-5px] top-[-2px]'></span>
                            </div>
                            <div className='bg-[#2e3840] p-2 mt-4 w-full'>
                                <h1 className='text-[#8e8c8a]'>
                                    Web Designer at Ron-Tech
                                </h1>
                                <small>Jan 2013-Present (5 years 2 months)</small>
                            </div>
                        </div>
                        <div className="info1 flex gap-6">
                            <div className="circle bg-slate-400 w-[2px] h-[54px] relative top-5">
                                <span className='w-3 h-3 bg-slate-400 absolute rounded-full right-[-5px] top-[-2px]'></span>
                            </div>
                            <div className='bg-[#2e3840] p-2 mt-4 w-full'>
                                <h1 className='text-[#8e8c8a]'>
                                    Web Designer at Dalt Technology
                                </h1>
                                <small>Jan 2013-Present (5 years 2 months)</small>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Profile