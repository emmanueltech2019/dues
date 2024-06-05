import React from 'react'
import NavBar from '@/components/HeroNav/NavBar'
import Footer from '@/components/HeroFoot/Footer'
import forbesImg from '../../components/image/forbes-advisor-best-2023-badge.png'
import pcMagImg from '../../components/image/PCMag-EditorsChoice-vert-min.png'
import acentImg from '../../components/image/Ascent-bestPayrollSoftware-2024.png'
import cnbcImg from '../../components/image/CNBC_logo_160px_height.png'
import Image from 'next/image'



function page() {
  return (
    <div className='min-h-full bg-[#333333]'>
      <NavBar />
      <section className='bg-gradient-to-r from-[#ff9b44] to-[#ff3300] rounded-b-[3rem]'>
        <div className='lg:max-w-[85%] m-auto p-4 py-[7rem]'>
          <header className='text-[#fff] text-center'>
            <h1 className='text-[45px] font-bold drop-shadow-md mt-6'>Meet  DUES</h1>
            <p className='text-[18px] md:w-[60%] m-auto mt-7'>See how DUES puts our clients&#38; experience first in everything we do — combining great customer service with payroll expertise and superb technology.</p>
          </header>
        </div>
      </section>

      <section className='bg-[#333333]'>
        <div className='lg:max-w-[80%] m-auto p-4 py-[7rem]'>
          <header className='text-[#f2f2f2] text-center'>
            <h1 className='text-[40px] font-bold my-5'>Payroll is our story</h1>
          </header>

          <div className="story text-[19px] text-[#f2f2f2] flex flex-col gap-5">
            <p>
              DUES grew out of our founder’s long-standing family payroll business. When Jesse Burgess joined that company in 2007, his first priority was simply helping the company’s six payroll clerks be more efficient — and to keep them from getting frustrated.
            </p>

            <p>
              With 200 small business customers to take care of, Jesse streamlined his clerks’ user experience and automated repetitive tasks until he realized the whole payroll process could move online. Soon after, DUES was born.
            </p>

            <p>
              We’re different because we’re a payroll business, not a startup. We’ve combined our experience with the latest technology to develop payroll software that’s fast, intuitive, and designed to help small business owners do what they do best.
            </p>

            <p>
              We continue to invest in improving customer experience, expanding into HR and benefits, and giving small businesses unsurpassed levels of support.
            </p>

            <p>
              DUES may have gotten more powerful, but businesses still pay one low fee for everything.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#333333] p-6 pb-[7rem]">
        <div className="lg:max-w-[80%] m-auto px-[2rem] grid smm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-[3rem] md:justify-center smm:gap-x-[13rem] gap-[3rem] bg-[#00000065] p-[4rem] w-full rounded-3xl">
          <div className="forbes border-b smm:border-0 border-[#ffffff29]">
            <div>
              <Image src={forbesImg} alt="alt" className="w-[112px] m-auto" />
            </div>
            <div className="text-center my-[2rem] w-[140px] m-auto">
              <h3 className="font-bold text-[#fff] text-[18.7px]">Top Payroll Service</h3>
              <p className="text-[#f4f4f4] text-[14px]">FORBES</p>
            </div>
          </div>

          <div className="forbes border-b border-[#ffffff29] smm:border-0 ">
            <div>
              <Image src={pcMagImg} alt="alt" className="w-[112px] m-auto" />
            </div>
            <div className="text-center my-[2rem] w-[140px] m-auto">
              <h3 className="font-bold text-[#fff] text-[18.7px]">Best for Up to 100 Empoyees</h3>
              <p className="text-[#f4f4f4] text-[14px]">FORBES</p>
            </div>
          </div>

          <div data-aos='zoom-in-right' className="forbes border-b border-[#ffffff29] smm:border-0 ">
            <div>
              <Image src={cnbcImg} alt="alt" className="w-[112px] m-auto" />
            </div>
            <div className="text-center my-[2rem] w-[140px] m-auto">
              <h3 className="font-bold text-[#fff] text-[18.7px]">Best for Small Busimess</h3>
              <p className="text-[#f4f4f4] text-[14px]">FORBES</p>
            </div>
          </div>

          <div data-aos='zoom-out-up' className="forbes border-b border-[#ffffff29] smm:border-0 ">
            <div>
              <Image src={acentImg} alt="alt" className="w-[112px] m-auto" />
            </div>
            <div className="text-center my-[2rem] w-[140px] m-auto">
              <h3 className="font-bold text-[#fff] text-[18.7px]">Best for small Business</h3>
              <p className="text-[#f4f4f4] text-[14px]">THE ACSCENT MOYTLEY FOOL</p>
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
    </div>
  )
}

export default page