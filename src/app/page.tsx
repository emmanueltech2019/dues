"use client"
import NavBar from "@/components/HeroNav/NavBar";
import Footer from "@/components/HeroFoot/Footer";
import Link from "next/link";
import AOS from "aos"
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroimg from '../components/image/screencapture-localhost-3000-admin-2024-05-21-14_35_46.png'
import Image from "next/image";
import forbesImg from '../components/image/forbes-advisor-best-2023-badge.png'
import pcMagImg from '../components/image/PCMag-EditorsChoice-vert-min.png'
import acentImg from '../components/image/Ascent-bestPayrollSoftware-2024.png'
import cnbcImg from '../components/image/CNBC_logo_160px_height.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faTractor } from "@fortawesome/free-solid-svg-icons";
import { faMartiniGlassEmpty } from "@fortawesome/free-solid-svg-icons";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import g2Image from '../components/image/G2-23-Winter-Leader-medal.png'
import gaImage from '../components/image/ga-features_and_functionality-2023.png'
import saImage from '../components/image/sa-customer_support-2023.png'
import caImage from '../components/image/ca-ease_of_use-2023.png'
import savingsImage from '../components/image/icon-savings.svg'
import duesImage1 from '../components/image/onpay-icons-2023-02.png'
import duesImage2 from '../components/image/onpay-icons-2023-03.png'
import duesImage3 from '../components/image/onpay-icons-2023-04.png'
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease', // Easing function
      once: false,
    });
  }, []);
  return (
    // <main>
    //   <div><Link href={'/admin'}>admin</Link></div>
    //   <div><Link href={'/staff'}>staff</Link></div>
    //   <div><Link href={'/super'}>super</Link></div>
    // </main>
    <div className="bg-[#333333]">
      <div className=" overflow-x-hidden min-h-[100vh] -z-[999]">
        <NavBar />

        <section className='hero px-[2rem] py-[5rem]'>
          <div className="lg:max-w-[80%] mt-[8rem] md:flex flex-row-reverse justify-between items-center m-auto">
            <div data-aos='fade-in'>
              <Image src={heroimg} className="w-[85%] m-auto border-[4px] border-[#000] shadow-md shadow-[#00000065] rounded-xl" alt="alt" />
            </div>

            <div>
              <div className="text-center md:text-left text-[#c6c4c4] mt-[3rem]">
                <span>
                  <h1 data-aos='fade-right' className=" font-extra-light text-[32px md:text-[28px] drop-shadow-md">Payroll and HR that</h1>
                </span>
                <span>
                  <h1 data-aos='fade-left' className="text-[44px] md:text-[35px] drop-shadow-lg">Makes business a breeze</h1>
                </span>
                <p data-aos='fade-in' className="text-[18px] text-[#f2f2f2]">
                  We give you everything you need to handle payroll, HR and benefits with confidence &mdash; so you can get down to business.
                </p>
              </div>

              <div className="heroButtons text-center mt-[2rem]">
                <div data-aos='zoom-in-up' className="get-started">
                  <button className="text-[#fff] bg-[#ff9b44] hover:bg-[#985e2b] w-[80%] p-2 text-[18px] rounded-md shadow-md shadow-[#00000065]">Get Started</button>
                </div>
                <div data-aos='zoom-in-up ' className="look">
                  <button className="text-[#fff] bg-[#0000009f] hover:bg-[#2727279f] w-[80%] p-2 text-[18px] rounded-md shadow-md shadow-[#00000065] my-[1rem]">Look Inside Dues</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#00000065] py-[3rem]">
          <div className="lg:max-w-[80] m-auto px-[2rem] mt-[9rem] grid smm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-[3rem] md:justify-center smm:gap-x-[13rem] smm:w-[80%] gap-[3rem] w-[60%]">
            <div data-aos='zoom-in-right' className="forbes border-b smm:border-0 border-[#ffffff29]">
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
          <div className="lg:max-w-[85%] m-auto px-[2rem] md:flex md:flex-col md:items-center my-[4rem]">
            <div className="md:flex md:justify-center md:items-center">
              <div>
                <Image src={heroimg} className="w-[85%] m-auto md:m-0 border-[10px] border-[#000] shadow-md shadow-[#00000065] rounded-xl" alt="alt" />
              </div>


              <div className="md:w-[100%] px-[2rem]">
                <div className="text-[34px] text-[#f2f2f2] font-semi-bold flex justify-center md:justify-start items-center gap-[.5rem] mt-[3rem]">
                  <h2 className="underline cursor-pointer hover:text-[#ff9b44] transition-all ease-in-out duration-700">Payroll</h2>
                  <h2 className="text-[23px]">&bull;</h2>
                  <h2 className="underline cursor-pointer hover:text-[#ff9b44] transition-all ease-in-out duration-700">HR</h2>
                  <h2 className="text-[23px]">&bull;</h2>
                  <h2 className="underline cursor-pointer hover:text-[#ff9b44] transition-all ease-in-out duration-700">Benefits</h2>
                </div>

                <p className="text-center text-[18px] text-[#b7b4b4] md:text-left my-[.5rem]">
                  Fast, precise, and backed by payroll experts, we’re the only payroll company you’ll ever need.
                </p>

                <div className='flex justify-center items-center md:justify-start my-4 text-[#ff9b44] '>
                  <button className="text-[20px] hover:pe-[.5rem] transition-all ease-in-out duration-700">Have a look</button>
                  <ArrowForwardIosIcon className="text-[20px]" />
                </div>
              </div>

            </div>

            <div className="text-center mt-[8rem] px-[2rem]">
              <h1 className="text-[34px] font-semi-bold text-[#fff]">Built with your business in mind</h1>
              <p className="text-[18px] text-[#b7b4b4]">Dues simplifies paying and managing your team &mdash; so you have more time to focus on what you do best.</p>
            </div>

            <div className="mt-[3rem]">
              <Image src={heroimg} className="w-[85%] m-auto border-[10px] border-[#000] shadow-md shadow-[#00000065] rounded-xl" alt="alt" />
            </div>

            <div className="text-center mt-[8rem]">
              <h1 className="text-[34px] font-semi-bold text-[#fff]">5-star software and service</h1>
              <p className="text-[18px] text-[#b7b4b4] mt-[0.7rem]">Thousands of small businesses count on DUES to run payroll and simplify back office tasks.</p>
            </div>

            <div className="text-center mt-[2rem]">
              <div className="text-[#fcb900]">
                <StarIcon className="text-[36px] smm:text-[56px]" />
                <StarIcon className="text-[36px] smm:text-[56px]" />
                <StarIcon className="text-[36px] smm:text-[56px]" />
                <StarIcon className="text-[36px] smm:text-[56px]" />
                <StarIcon className="text-[36px] smm:text-[56px]" />
              </div>
              <p className="text-[28px] leading-7 mt-[1.3rem] text-[#b7b4b4]">Rated <strong>4.8</strong> stars out of <strong>5</strong> in <strong>880</strong> reviews</p>
              <p className="text-[#b7b4b4] text-[20px] font-extra-light">from Capterra, G2, and TrustPilot.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#00000065]">
          <div className="lg:max-w-[85%] m-auto px-3 py-[4rem]">
            <header className="text-center">
              <h1 className="text-[35px] text-[#f2f2f2]">Accuracy for every industry</h1>

              <select title="industry" id="industry" className=" outline-none text-[18px] my-4 p-2 rounded md:hidden">
                <option value="">Start-ups and Entreprenuers</option>
                <option value="">Farms and Africulture</option>
                <option value="">Dentists</option>
                <option value="">Restaurants and Bars</option>
                <option value="">Doctors and Healthcare</option>
                <option value="">Nonprofit Organizations</option>
                <option value="">Gyms and Fitness Clubs</option>
                <option value="">Franchises and Chains</option>
                <option value="">Medium-sized Businesses</option>
                <option value="">Accountants</option>
              </select>

              <div className="md:gap-8 md:justify-center md:grid-cols-5 md:my-5 hidden md:grid">
                <div className="flex flex-col justify-center items-center gap-6 bg-[#ff9b44] py-4 rounded-lg">
                  <FontAwesomeIcon icon={faLightbulb} className="text-[#00000065] w-[42px]" />
                  <h3 className="text-[#000000] font-semi-bold text-[18px]">Start-ups and Entrepreneurs</h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 bg-[#ff9b44] py-4 rounded-lg">
                  <FontAwesomeIcon icon={faTractor} className="text-[#00000065] w-[42px]" />
                  <h3 className="text-[#000000] font-semi-bold text-[18px]">Farms and Agriculture</h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 bg-[#ff9b44] py-4 rounded-lg">
                  <FontAwesomeIcon icon={faTooth} className="text-[#00000065] w-[42px]" />
                  <h3 className="text-[#000000] font-semi-bold text-[18px]">Dentists</h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 bg-[#ff9b44] py-4 rounded-lg">
                  <FontAwesomeIcon icon={faMartiniGlassEmpty} className="text-[#00000065] w-[42px]" />
                  <h3 className="text-[#000000] font-semi-bold text-[18px]">Restaurants and Bars</h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 bg-[#ff9b44] py-4 rounded-lg">
                  <FontAwesomeIcon icon={faBriefcaseMedical} className="text-[#00000065] w-[42px]" />
                  <h3 className="text-[#000000] font-semi-bold text-[18px]">Doctors and Healthcare</h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 bg-[#ff9b44] py-4 rounded-lg">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="text-[#00000065] w-[47px]" />
                  <h3 className="text-[#000000] font-semi-bold text-[18px]">Nonprofit Organizations</h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 bg-[#ff9b44] py-4 rounded-lg">
                  <FontAwesomeIcon icon={faDumbbell} className="text-[#00000065] w-[47px]" />
                  <h3 className="text-[#000000] font-semi-bold text-[18px]">Gyms and Fitness Clubs</h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 bg-[#ff9b44] py-4 rounded-lg">
                  <FontAwesomeIcon icon={faStore} className="text-[#00000065] w-[47px]" />
                  <h3 className="text-[#000000] font-semi-bold text-[18px]">Franchises and Chains</h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 bg-[#ff9b44] py-4 rounded-lg">
                  <FontAwesomeIcon icon={faCity} className="text-[#00000065] w-[47px]" />
                  <h3 className="text-[#000000] font-semi-bold text-[18px]">Medium-sized Businesses</h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 bg-[#ff9b44] py-4 rounded-lg">
                  <FontAwesomeIcon icon={faCalculator} className="text-[#00000065] w-[35px]" />
                  <h3 className="text-[#000000] font-semi-bold text-[18px]">Accountants</h3>
                </div>

              </div>
            </header>
          </div>
        </section>

        <section>
          <div className="lg:max-w-[85%] m-auto px-6 py-[4rem]">
            <div className="md:flex md:justify-center md:items-center">
              <div className="mt-[3rem]">
                <Image src={heroimg} className="w-[85%] m-auto border-[10px] border-[#000] shadow-md shadow-[#00000065] rounded-xl" alt="alt" />
              </div>

              <div className="text-center md:text-left my-[2rem] md:mt-[6rem]">
                <h1 className="text-[34px] text-[#f2f2f2] leading-10">Backed by a higher level of service</h1>
                <p className="text-[#b7b4b4] text-[18px] md:text-[16px] lg:text-[18px] my-[1rem]">At DUES, every client receives the VIP treatment. We take care of all setup and data migration to ensure a seamless start. Plus, our team of trained payroll experts is readily available whenever you need assistance. They&#39;re not just knowledgeable; they&#39;re also genuinely friendly folks.</p>
              </div>
            </div>

            <div className="mt-[5rem]">
              <header>
                <h1 className="text-[34px] text-center text-[#f2f2f2] leading-10">Top-rated across the board</h1>
              </header>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-[3rem] m-auto mt-[5rem]">
                <div className="w-full">
                  <Image src={caImage} alt="alt" className="w-[140px] m-auto" />
                </div>
                <div className="w-full">
                  <Image src={g2Image} alt="alt" className="w-[140px] m-auto" />
                </div>
                <div className="w-full">
                  <Image src={gaImage} alt="alt" className="w-[140px] m-auto" />
                </div>
                <div className="w-full">
                  <Image src={saImage} alt="alt" className="w-[140px] m-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="lg:max-w-[83%] m-auto px-6 py-[4rem] ">
            <div className="bg-gradient-to-r from-[#ff9b44] to-[#ff3300] w-full rounded-3xl p-[2rem] md:flex justify-center items-center">
              <div className="img w-full m-auto my-[2rem]">
                <Image src={savingsImage} alt="alt" className="w-[30%] md:w-[65%] m-auto" />
              </div>

              <div className="text-[#fff] text-center md:text-left">
                <h4 className="text-[15.2px]">PRICING</h4>
                <h2 className="text-[33.44px] leading-10 my-[.7rem] drop-shadow-md">Simple, transparent pricing</h2>
                <p className="text-[18px] px-3 md:px-0">For on monthly price of $40 + $6 per person you&#39;ll get more than any other provider offers. No surprises or added fees, ever.</p>
              </div>

              <div className="w-full text-center">
                <button className="text-[#ff3300] text-[18px] p-2 w-[60%] md:w-[80%] bg-white rounded-md my-[2rem] shadow-md shadow-[#0000002c]">See our pricing</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="lg:max-w-[83%] m-auto px-6 py-[4rem]">
            <header>
              <h1 className="text-[34px] text-center text-[#f2f2f2] leading-10">More ways we make business easier</h1>
            </header>

            <div className="my-[3rem] grid sm:grid-cols-2 md:grid-cols-3">
              <div className="my-[4rem]">
                <Image src={duesImage1} alt="alt" className="w-[27%] m-auto" />
                <div className="text-center flex flex-col justify-center items-center">
                  <h3 className="text-[#f2f2f2] text-[21px] my-[1rem]">Expert support</h3>
                  <p className="text-[#b7b4b4] text-[18px] w-[70%] m-auto">If you ever need help, our team of trained payroll pros is easy to reach. They really know their stuff (and they’re great folks).</p>
                  <div className='flex justify-center items-center md:justify-start my-4 text-[#ff9b44] '>
                    <button className="text-[20px] hover:pe-[.5rem] transition-all ease-in-out duration-700">Get answers</button>
                    <ArrowForwardIosIcon className="text-[20px]" />
                  </div>
                </div>
              </div>

              <div className="my-[4rem]">
                <Image src={duesImage2} alt="alt" className="w-[27%] m-auto" />
                <div className="text-center flex flex-col justify-center items-center">
                  <h3 className="text-[#f2f2f2] text-[21px] my-[1rem]">Detailed resources</h3>
                  <p className="text-[#b7b4b4] text-[18px] w-[70%] m-auto">Get expert online advice on everything from payroll 101 to getting HR and employee benefits right.</p>
                  <div className="text-[18px] text-[#f2f2f2] font-semi-bold flex justify-center md:justify-start items-center gap-[.5rem] mt-[3rem]">
                    <h2 className="underline cursor-pointer hover:text-[#ff9b44] transition-all ease-in-out duration-700">Payroll</h2>
                    <h2 className="text-[20px]">|</h2>
                    <h2 className="underline cursor-pointer hover:text-[#ff9b44] transition-all ease-in-out duration-700">HR</h2>
                    <h2 className="text-[20px]">|</h2>
                    <h2 className="underline cursor-pointer hover:text-[#ff9b44] transition-all ease-in-out duration-700">Benefits</h2>
                  </div>
                </div>
              </div>

              <div className="my-[4rem]">
                <Image src={duesImage3} alt="alt" className="w-[27%] m-auto" />
                <div className="text-center flex flex-col justify-center items-center">
                  <h3 className="text-[#f2f2f2] text-[21px] my-[1rem]">Best-in-class integrations</h3>
                  <p className="text-[#b7b4b4] text-[18px] w-[70%] m-auto">We play nicely with others, including QuickBooks, Xero, and top timekeeping software. And we’ll help you set it up.</p>
                  <div className='flex justify-center items-center md:justify-start my-4 text-[#ff9b44] '>
                    <button className="text-[20px] hover:pe-[.5rem] transition-all ease-in-out duration-700">Explore integrations</button>
                    <ArrowForwardIosIcon className="text-[20px]" />
                  </div>
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
                    <select title="industry" id="industry" className=" outline-none text-[18px] p-3 rounded w-full">
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
    </div>
  );
}
