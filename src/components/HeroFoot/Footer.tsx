import React from 'react'
import Link from 'next/link'



function footer() {
    return (
        <div>
            <section className='bg-[#ff9b44] rounded-t-[3rem]'>
                <div className='lg:max-w-[85%] p-6 m-auto '>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        <div className="features">
                            <h3 className='text-[16px] font-bold my-2'>Features</h3>
                            <ul>
                                <li>Payroll Software</li>
                                <li>For Accountants</li>
                                <li>HR Software</li>
                                <li>Health Insurance</li>
                                <li>401(k) Retirement</li>
                                <li>Workers&#39; Comp</li>
                                <li>Software Integrstions</li>
                            </ul>
                        </div>

                        <div className="features">
                            <h3 className='text-[16px] font-bold my-2'>Resources</h3>
                            <ul>
                                <li>Payroll 101</li>
                                <li>HR Basics</li>
                                <li>Benefits Guide</li>
                                <li>Payroll Calculators</li>
                                <li>Help Center</li>
                                <li>Pricing</li>
                                <li>Switch Payroll Companies</li>
                            </ul>
                        </div>

                        <div className="features">
                            <h3 className='text-[16px] font-bold my-2'>DUES</h3>
                            <ul>
                                <li>About Us</li>
                                <li>News & Press</li>
                                <li>Benefits Guide</li>
                                <li>Payroll Calculators</li>
                                <li>Help Center</li>
                                <li>Pricing</li>
                                <li>Switch Payroll Companies</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-[16px] font-bold my-2'>Serving Clients for Over 30 Years</h3>
                            <p className='text-[14px] w-[50%] sm:w-[80%]'>
                                At DUES, our online payroll service simplifies paycheck calculations, tax handling, and frees you to focus on your core strengths. With 30 years of payroll processing experience and innovative technology, our software adapts to your needs, integrates seamlessly with your preferred business applications, and streamlines small business management, wherever you are
                            </p>
                        </div>
                    </div>

                    <div className='text-center mt-8 border-t border-[#000] pt-[2em]'>
                        <p>&#169;2024 DUES, Inc.</p>
                        <p>Insurance offered through OnPay Insurance Agency, LLC (CA License #0L29422)</p>
                        <div className='flex justify-center items-center my-[1.4rem] w-full text-[13px]'>
                            <span>
                            <Link href="#">Terms and Conditions</Link>
                            </span>
                            <span>|</span>
                            <span>
                            <Link href="#">Privacy</Link>
                            </span>
                            <span>|</span>
                            <span>
                            <Link href="#">Cookie Policy</Link>
                            </span>
                            <span>|</span>
                            <span>
                            <Link href="#">Manage Cookies</Link>
                            </span>
                            <span>|</span>
                            <span>
                            <Link href="#">Sitemap</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default footer