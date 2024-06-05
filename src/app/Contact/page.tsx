import React from 'react'
import NavBar from '@/components/HeroNav/NavBar'
import Footer from '@/components/HeroFoot/Footer'
import Image from 'next/image'
import heroImg from '../../components/image/screencapture-localhost-3000-admin-2024-05-21-14_35_46.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function page() {
    return (
        <div className='bg-[#333333]'>
            <NavBar />
            <section className='bg-gradient-to-t from-[#ff9b44] to-[#ff3300] rounded-b-[3rem]'>
                <div className='lg:max-w-[85%] m-auto p-6 pt-[7rem]'>
                    <header className='text-[#fff] text-center'>
                        <h1 className='text-[45px] font-bold drop-shadow-md mt-6'>Contact us</h1>
                        <p className='text-[18px] md:w-[60%] m-auto mt-7'>We’re here to help.</p>
                    </header>
                </div>
            </section>

            <section>
                <div className='lg:max-w-[80%] m-auto py-[4rem] px-5 md:flex md:flex-row-reverse items-center justify-between w-full'>
                    <div>
                        <Image src={heroImg} className="w-[85%] md:w-[600px] m-auto md:m-0 border-[10px] border-[#000] shadow-md shadow-[#00000065] rounded-xl" alt="alt" />
                    </div>

                    <div>
                        <header className='my-[2rem] w-[95%] md:w-full  m-auto'>
                            <h2 className='text-[33.44px] text-[#fff]'>
                                We’d love to hear from you
                            </h2>
                        </header>

                        <div className="support">
                            <h3 className='text-[21.28px] text-[#fff]'>Support</h3>
                            <div className='flex gap-2 items-center text-[20px] text-[#c6c4c4]'>
                                <FontAwesomeIcon icon={faPhone} className='w-[20px] text-[#ff9b44]' />
                                <p>(877) 328-6505</p>
                            </div>
                            <p className='text-[20px] text-[#c6c4c4]'>
                                9AM – 8PM ET,<br />
                                Monday – Friday
                            </p>
                        </div>

                        <div className="sales my-[1.5rem]">
                            <h3 className='text-[21.28px] text-[#fff]'>Sales</h3>
                            <div className='flex gap-2 items-center text-[20px] text-[#c6c4c4]'>
                                <FontAwesomeIcon icon={faAt} className='w-[20px] text-[#ff9b44]' />
                                <p><Link href="sales@onpay.com" className='text-[#ff9b44]'>sales@onpay.com</Link></p>
                            </div>
                        </div>

                        <div className="sales">
                            <h3 className='text-[21.28px] text-[#fff]'>Mailing address</h3>
                            <div className='flex gap-2 items-center text-[18px] text-[#c6c4c4]'>
                                <FontAwesomeIcon icon={faEnvelope} className='w-[20px] text-[#ff9b44]' />
                                <p>OnPay, Inc</p>
                            </div>
                            <p className='text-[20px] text-[#c6c4c4]'>
                                675 Ponce de Leon Avenue NE<br />
                                Suite W207 <br />
                                Atlanta, GA 30308
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='p-5 lg:max-w-[80%] m-auto'>
                    <div className='p-5 bg-[#00000065] rounded-3xl'>
                        <p className='text-[18px] text-[#f3f3f3] text-center'><strong>Are you an OnPay client looking for chat?</strong><Link href="#" className='text-[#ff9b44] underline'>Login</Link> to your OnPay account to get the fastest chat support from our team.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:max-w-[83%] m-auto px-6 py-[4rem]">
                    <div className="bg-gradient-to-r from-[#ff9b44] to-[#ff3300] w-full rounded-3xl p-[2rem] sm:flex justify-between items-center gap-[4rem]">
                        <div className="text-[#fff] md:text-left sm:w-[60%]">
                            <h4 className="text-[15.2px]">LET’S DO THIS</h4>
                            <h2 className="text-[33.44px] leading-10 my-[.7rem] drop-shadow-md">It’s easy to get started</h2>
                            <p className="text-[18px] md:px-0">Try OnPay out yourself to see how easy payroll and HR can be. To get started, just share a few basic details about your business. Our team of pros will set everything up and import your employees’ information for you.</p>
                        </div>

                        <div className="w-full">
                            <form className="grid md:grid-cols-2 gap-3 mt-7">
                                <div>
                                    <label htmlFor="first-name"></label>
                                    <input type="text" id="first-name" placeholder="First Name" className="outline-0 w-full p-3 rounded shadow-sm shadow-[#0000002c]" />
                                </div>

                                <div>
                                    <label htmlFor="last-name"></label>
                                    <input type="text" id="last-name" placeholder="Last Name" className="outline-0 w-full p-3 rounded shadow-sm shadow-[#0000002c]" />
                                </div>

                                <div>
                                    <label htmlFor="company-name"></label>
                                    <input type="text" id="company-name" placeholder="Legal Company Name" className="outline-0 w-full p-3 rounded shadow-sm shadow-[#0000002c]" />
                                </div>

                                <div>
                                    <label htmlFor="work-email"></label>
                                    <input type="text" id="work-email" placeholder="Work Email Address" className="outline-0 w-full p-3 rounded shadow-sm shadow-[#0000002c]" />
                                </div>

                                <div>
                                    <label htmlFor="phone-number"></label>
                                    <input type="tel" id="phone-number" placeholder="Company Phone Number" className="outline-0 w-full p-3 rounded shadow-sm shadow-[#0000002c]" />
                                </div>

                                <div>
                                    <select title="industries" id="industry" className=" outline-none text-[18px] p-3 rounded w-full">
                                        <option value="" selected>Number of employees</option>
                                        <option value="">1-5</option>
                                        <option value="">6-10</option>
                                        <option value="">11-50</option>
                                        <option value="">51-100</option>
                                        <option value="">101-500+</option>
                                    </select>
                                </div>

                                <div className=" md:col-span-2">
                                    <select title="industry" id="industry" className=" outline-none text-[18px] p-3 rounded w-full">
                                        <option value="" selected>How do you pay your team now?</option>
                                        <option value="">I do it myself manually</option>
                                        <option value="">I use another online software</option>
                                        <option value="">My accountant or bookkeeper handles it</option>
                                        <option value="">I&#39;m new to payroll</option>
                                    </select>
                                </div>

                            </form>
                            <div className="heroButtons md:flex gap-6 md:justify-start md:items-center w-full text-center mt-[2rem] ">
                                <div className="get-started w-full">
                                    <button className="text-[#fff] bg-[#ff9b44] hover:bg-[#985e2b] w-[100%] p-2 text-[18px] rounded-md shadow-md shadow-[#00000065]">Get Started</button>
                                </div>
                                <div className="look w-full">
                                    <button className="text-[#fff] bg-[#0000009f] hover:bg-[#2727279f] w-[100%] p-2 text-[18px] rounded-md shadow-md shadow-[#00000065] my-[1rem]">Look Inside Dues</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page