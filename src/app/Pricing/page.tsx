import React from 'react'
import NavBar from '@/components/HeroNav/NavBar'
import Footer from '@/components/HeroFoot/Footer'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Image from 'next/image';
import taxIcon from '../../components/image/icon-tax-resources.svg'
import heroImg from '../../components/image/screencapture-localhost-3000-admin-2024-05-21-14_35_46.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPercent, faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faDownLong } from '@fortawesome/free-solid-svg-icons';

function page() {


    return (
        <div className='bg-[#333333]'>
            <NavBar />
            <section className='bg-gradient-to-r from-[#ff9b44] to-[#ff3300] rounded-b-[3rem]'>
                <div className='lg:max-w-[85%] m-auto p-4 py-[6rem]'>
                    <header className='text-[#fff] text-center'>
                        <h1 className='text-[40px] font-bold drop-shadow-md mt-6'>Payroll pricing that’s surprising (in a good way)</h1>
                        <p className='text-[18px] md:w-[60%] m-auto mt-7'>Get everything we do for one low monthly fee. You’ll save over 50% compared to most premium payroll companies.</p>
                    </header>
                </div>
            </section>

            <section>
                <div className='py-[4rem]'>
                    <div className='flex flex-col justify-center items-center p-[2rem] bg-[#333333] gap-3 shadow-lg  m-auto w-[80%] rounded-3xl relative top-[-140px] sm:w-[500px]'>
                        <header className='my-[1rem]'>
                            <h3 className='text-[21.28px] text-[#f3f3f3]'>We&#39;ll set you for free</h3>
                        </header>
                        <div className='flex justify-center items-center gap-5 text-[#f2f2f2] my-[1rem]'>
                            <div>
                                <span className='flex items-baseline'><h3 className='text-[53.2px]'>$40</h3><p className='text-[12px]'>/month</p></span>
                                <p className='text-[13px]'>BASE FEE</p>
                            </div>
                            <h3 className='text-[41px]'>+</h3>
                            <div>
                                <span className='flex items-baseline'><h3 className='text-[53.2px]'>$6</h3><p className='text-[12px]'>/month</p></span>
                                <p className='text-[13px]'>PER PERSON</p>
                            </div>
                        </div>
                    </div>

                    <div className="monthly-fee relative top-[-80px] overflow-hidden">
                        <header className='text-center hidden sm:block'>
                            <h2 className='text-[34.44px] text-[#f2f2f2]'>Calculate your monthly fee</h2>
                            <p className='text-[18px] text-[#f2f2f2]'>How many people do you pay each month?</p>
                        </header>

                        <div className='hidden sm:block md:w-[800px] m-auto'>
                            <Box sx={{ margin: 'auto' }}>
                                {/* <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            /> */}
                                <div className='mx-[8rem]'>
                                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="on" sx={{ margin: 'auto' }} className=' text-[#ff9b44] h-[10px] mt-[3rem]' />
                                </div>
                            </Box>
                            <p className='text-center text-[16px] text-[#f2f2f2] my-[2rem]'>Drag slider to calculate price</p>
                        </div>
                        <div className="get-started w-[300px] m-auto">
                            <button className="text-[#fff] bg-[#ff9b44] hover:bg-[#985e2b] w-[100%] p-2 text-[18px] rounded-md shadow-md shadow-[#00000065]">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:max-w-[83%] m-auto px-6 py-[4rem] ">
                    <div className="bg-gradient-to-r from-[#ff9b44] to-[#ff3300] w-full rounded-3xl p-[2rem] md:flex justify-center items-center">
                        <div className="img w-full m-auto my-[2rem]">
                            <Image src={taxIcon} alt="alt" className="w-[30%] md:w-[65%] m-auto" />
                        </div>

                        <div className="text-[#fff] text-center md:text-left">
                            <h4 className="text-[15.2px]">ONE SIMPLE PRICE</h4>
                            <h2 className="text-[33.44px] leading-10 my-[.7rem] drop-shadow-md">Everything is included. Period.</h2>
                            <p className="text-[18px] px-3 md:px-0">You’ll never need to worry about sneaky fees. We give you all our features for one low price of $40 per month plus $6 per person.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='lg:max-w-[85%] w-full p-6 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between gap-7 m-auto'>
                    <div>
                        <Image src={heroImg} className="w-[85%] md:w-[600px] m-auto md:m-0 border-[10px] border-[#000] shadow-md shadow-[#00000065] rounded-xl" alt="alt" />
                    </div>

                    <div className='py-[2.5rem]'>
                        <header>
                            <h4 className='text-[#ff9b44] text-[15.2px]'>FULL-SERVICE PAYROLL</h4>
                            <h2 className='text-[#fff] text-[33.44px] w-[300px] leading-10 my-[.9rem]'>We do more to get payroll right</h2>
                        </header>
                        <ul className='text-[#f2f2f2] flex flex-col gap-4 font-thin mt-[2.5rem]'>
                            <li className='flex items-center gap-2 text-[18px]'>
                                <FontAwesomeIcon icon={faCheck} className='w-[18px] bg-[#ff9b44] text-white rounded-full p-1' />
                                <span>Unlimited monthly pay runs</span>
                            </li>
                            <li className='flex items-center gap-2 text-[18px]'>
                                <FontAwesomeIcon icon={faCheck} className='w-[18px] bg-[#ff9b44] text-white rounded-full p-1' />
                                <span>Automated tax payments and filings</span>
                            </li>
                            <li className='flex items-center gap-2 text-[18px]'>
                                <FontAwesomeIcon icon={faCheck} className='w-[18px] bg-[#ff9b44] text-white rounded-full p-1' />
                                <span>Free W-2 and 1099 processing</span>
                            </li>
                            <li className='flex items-center gap-2 text-[18px]'>
                                <FontAwesomeIcon icon={faCheck} className='w-[18px] bg-[#ff9b44] text-white rounded-full p-1' />
                                <span>HR tools and software integrations</span>
                            </li>
                            <li className='flex items-center gap-2 text-[18px]'>
                                <FontAwesomeIcon icon={faCheck} className='w-[18px] bg-[#ff9b44] text-white rounded-full p-1' />
                                <span>Expert support whenever you need it</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className='lg:max-w-[85%] w-full p-6 sm:flex sm:items-center sm:justify-between gap-7 m-auto my-[2rem]'>
                    <div>
                        <Image src={heroImg} className="w-[85%] md:w- m-auto md:m-0 border-[10px] border-[#000] shadow-md shadow-[#00000065] rounded-xl" alt="alt" />
                    </div>

                    <div className='py-[2.5rem]'>
                        <header>
                            <h4 className='text-[#ff9b44] text-[15.2px]'>HR + BENEFITS</h4>
                            <h2 className='text-[#fff] text-[33.44px] w-[300px] leading-10 my-[.9rem]'>A built-in HR team at no extra cost</h2>
                        </header>
                        <div className="text text-[#f2f2f2] text-[18px]">
                            <p>
                                Our monthly fee includes a full set of customizable HR tools. If you want help organizing employee paperwork, automating tedious onboarding tasks, or managing PTO, it’s all here.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='lg:w-[85%] p-6 w-full m-auto'>
                    <header className='text-center'>
                        <h4 className='text-[#ff9b44] text-[15.2px]'>WHY ONPAY?</h4>
                        <h2 className='text-[#fff] text-[33.44px] leading-10 my-[.9rem]'>Get better payroll — and a better value</h2>
                    </header>


                    <div className='grid justify-center items-center sm:grid-cols-2  lg:grid-cols-4 gap-[4rem] my-[5rem]'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='relative h-[100px]'>
                                <FontAwesomeIcon icon={faTrophy} className='text-[#ff9b44] w-[75px]' />
                                <FontAwesomeIcon icon={faStar} className='text-[#333333] w-[35px] absolute top-1 right-5' />
                            </div>
                            <div className="text text-center text-[#f2f2f2]">
                                <h3 className='text-[21.28px] my-[1.5rem]'>
                                    Award-winning service
                                </h3>
                                <p className='text-[17px] w-[290px] m-auto text-[#c6c4c4]'>
                                    From onboarding and setup to ongoing support, our team knows payroll — and we’ll always have your back.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='h-[100px]'>
                            <FontAwesomeIcon icon={faSliders} className='text-[#ff9b44] w-[75px] font-thin' />
                            </div>
                            <div className="text text-center text-[#f2f2f2]">
                                <h3 className='text-[21.28px] my-[1.5rem]'>
                                    The tools you need, now and later
                                </h3>
                                <p className='text-[17px] w-[290px] m-auto text-[#c6c4c4]'>
                                    OnPay is simple enough for the smallest businesses, but flexible features and permissions make it easy to scale.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <div className='relative h-[100px]'>
                                <FontAwesomeIcon icon={faTag} className='text-[#f2f2f2] w-[75px] font-thin' />
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[#ff9b44] w-[60px] font-thin border-[8px] border-[#333333] rounded-full top-2 right-[-13px] absolute' />
                            </div>
                            <div className="text text-center text-[#f2f2f2]">
                                <h3 className='text-[21.28px] my-[1.5rem]'>
                                    Pricing that’s straightforward
                                </h3>
                                <p className='text-[17px] w-[290px] m-auto text-[#c6c4c4]'>
                                    No add-on fees. No complex pricing tiers. You’ll never hit a paywall when you ask us to do more for you.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <div className='relative h-[100px]'>
                                <FontAwesomeIcon icon={faDownLong} className='text-[#f2f2f2] w-[75px] h-[77px] font-thin' />
                                <FontAwesomeIcon icon={faPercent} className='text-[#fff] bg-[#ff9b44] w-[60px] h-[60px] p-2 rounded-full font-thin border-[8px] border-[#333333] top-2 right-[-15px] absolute' />
                            </div>
                            <div className="text text-center text-[#f2f2f2]">
                                <h3 className='text-[21.28px] my-[1.5rem]'>
                                    All for 50% less
                                </h3>
                                <p className='text-[17px] w-[290px] m-auto text-[#c6c4c4]'>
                                    We combine 30 years of payroll experience with the latest technology to do a lot more for a lot less.
                                </p>
                            </div>
                        </div>
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
        </div >
    )
}

export default page