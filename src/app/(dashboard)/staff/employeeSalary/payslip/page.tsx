import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint'
import Image from 'next/image'
import duesImg from './img/logo.png'


function Payslip() {
  return (
    <div id='payslip'>
        <div className='p-4'>
            <header className='flex justify-between'>
                <div>
                    <h3 className='text-[#bbc4cc] text-[1.12rem]'>Payslip</h3>
                    <p className='hidden'>Dashborad <span>/ Payslip</span></p>
                </div>
                <div className="print flex gap-[1px]">
                    <button className='text-[#bbc4cc] bg-[#16191c] text-[0.9rem] p-[0.3em] px-1 rounded-s-sm'>CSV</button>
                    <button className='text-[#bbc4cc] bg-[#16191c] text-[0.9rem] p-[0.3em] px-1'>PDF</button>
                    <div className='bg-[#16191c] flex items-center px-1 rounded-e-sm'>
                    <FontAwesomeIcon icon={faPrint} className='w-5 text-[#bbc4cc]'/>
                    <button className='text-[#bbc4cc]  text-[0.9rem] p-[0.3em]'>Print</button>
                    </div>
                </div>
            </header>

            <div className="slip bg-[#16191c] text-[#bbc4cc] p-3 my-5 rounded-md">
                <div className='mb-4'>
                    <header className='text-[16px] underline-offset-2 text-center'>
                        PAYSLIP FOR THE MONTH OF FEB 2019
                    </header>
                    <div className='flex flex-col justify-between gap-2'>
                        <div className="logo p-3">
                            <Image src={duesImg} alt="alt" className='rounded-full shadow-lg' />
                        </div>
                        <div className="info flex-1 w-full">
                            <p className=' w-[220px]'>Dreamguy&#39;s Technologies
                            3864 Quiet Valley Lane&#44;
                            Sherman Oaks&#44; CA&#44; 91403 
                            </p>
                        </div>
                        <div className=' self-baseline smm:self-start w-full text-right my-4'>
                            <h1>PAYSLIP &#35;49029</h1>
                            <p>Salary Month&#58; March, 2019</p>
                        </div>
                    </div>

                    <div>
                        <p>John Doe</p>
                        <p>Web Designer</p>
                        <p>Employee ID&#58; FT-0009</p>
                        <p>Joining Date&#58; 1 Jan 2013</p>
                    </div>
                </div>

                <div className="w-full flex flex-col smm:flex-row gap-3 pb-3">
                    <table className=' w-full'>
                        <thead>
                            <tr className='text-left'>
                                <th className='text-[16px] py-2'>Earnings</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#34444c]'>
                            <tr>
                                <td className='p-2'>Basic Salary</td>
                                <td className='p-2 text-right'>&#36;6500</td>
                            </tr>
                            <tr>
                                <td className='p-2'>House Rent Allowance (H.R.A.)</td>
                                <td className='p-2 text-right'>&#36;65</td>
                            </tr>
                            <tr>
                                <td className='p-2'>Conveyance</td>
                                <td className='p-2 text-right'>&#36;65</td>
                            </tr>
                            <tr>
                                <td className='p-2'>Other Allowance</td>
                                <td className='p-2 text-right'>&#36;65</td>
                            </tr>
                            <tr>
                                <td className='p-2'>Total Earnings</td>
                                <td className='p-2 text-right'>&#36;65</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className=' w-full'>
                        <thead>
                            <tr className='text-left'>
                                <th className='text-[16px] py-2'>Deductions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#34444c]'>
                            <tr>
                                <td className='p-2'>Tax Deducted at Source (T.D.S.)</td>
                                <td className='p-2 text-right'>&#36;0</td>
                            </tr>
                            <tr>
                                <td className='p-2'>Provident Fund</td>
                                <td className='p-2 text-right'>&#36;0</td>
                            </tr>
                            <tr>
                                <td className='p-2'>ESI</td>
                                <td className='p-2 text-right'>&#36;0</td>
                            </tr>
                            <tr>
                                <td className='p-2'>Loan</td>
                                <td className='p-2 text-right'>&#36;300</td>
                            </tr>
                            <tr>
                                <td className='p-2'>Total Deductions</td>
                                <td className='p-2 text-right'>&#36;3563</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <p><strong>Net Salary&#58;&#36;59698</strong> &#40;Fifty nine thousand six hundred and ninety eight only.&#41;</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payslip