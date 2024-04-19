import React from 'react'
import Image from 'next/image'
import userimg from './img/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase} from '@fortawesome/free-solid-svg-icons/faSuitcase'
import { faHourglass } from '@fortawesome/free-regular-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { wallet } from './components/WalletObj'
function EmployeeDashboard() {
  return (
    <div id='dashboard' className='p-[30px]'>
        <header className='bg-[#16191c] p-2 pb-4'>
            <div className='flex gap-4'>
                <div>
                    <Image src={userimg} alt="alt" className='w-16 rounded-lg'/>
                </div>
                <div>
                    <h3 className='text-[#bbc4cc] text-[16px]'>Welcome, John Doe</h3>
                    <p className='text-[#777777] text-[18px] my-1 font-extralight'>Monday, 20 May 2019</p>
                </div>
            </div>
        </header>
        <div className="dash-stats grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-8">
            {wallet.map((card, index) => (
               <div key={card.name + index} className="flex justify-between items-center bg-[#0000009f] p-4 rounded-md">
                  <div className="flex justify-center items-center bg-[#ff9b446e] rounded-full w-[59px] h-[59px] relative">
                     {card.icon}
                  </div>
                  <div className="stats-value text-[#bbc4cc]">
                     <h1 className="font-bold text-[23px] text-right">{card.stat}</h1>
                     <p className="text-[15px]">{card.name}</p>
                  </div>
               </div>
            ))}
         </div>
        <div className='p-4 flex flex-col smm:flex-row gap-4 justify-between items-start'>
            <div className='flex-[2] w-full'>
                <div className="today">
                    <header className='py-5'>
                        <h1 className='text-[#bbc4cc] text-[1.13rem]'>TODAY</h1>
                    </header>
                    <div className='content flex flex-col gap-4'>
                        <div className='flex items-center justify-between gap-5 bg-[#16191c] p-[15px] rounded-md'>
                            <FontAwesomeIcon icon={faHourglass} className='w-6 text-[#f62d51] Pe-4'/>
                            <p className='text-[#f62d51] text-[1rem] sm:text-[1.2rem] flex-1'>Richard Miles is off sick today</p>
                            <Image src={userimg} alt="alt" className='w-12 rounded-full border-[3px]'/>
                        </div>
                        <div className='flex items-center justify-between gap-4 bg-[#16191c] p-[15px] rounded-md'>
                            <FontAwesomeIcon icon={faSuitcase} className='w-7 text-[#575757] Pe-4'/>
                            <p className='text-[#575757] text-[1rem] sm:text-[1.2rem] flex-1'>You are away today</p>
                            <Image src={userimg} alt="alt" className='w-12 rounded-full border-[3px]'/>
                        </div>
                        <div className='flex items-center justify-between gap-4 bg-[#16191c] p-[15px] rounded-md'>
                            <FontAwesomeIcon icon={faBuilding} className='w-7 text-[#575757] Pe-4'/>
                            <p className='text-[#575757] text-[1rem] sm:text-[1.2rem] flex-1'>You are working from home today today</p>
                            <Image src={userimg} alt="alt" className='w-12 rounded-full border-[3px]'/>
                        </div>
                    </div>
                </div>

                <div className="tomorrow">
                    <header className='py-5'>
                        <h1 className='text-[#bbc4cc] text-[1.13rem]'>TOMORROW</h1>
                    </header>
                    <div className='content'>
                        <div className='flex items-center justify-between gap-5 bg-[#16191c] p-[15px] rounded-md'>
                            <FontAwesomeIcon icon={faSuitcase} className='w-7 text-[#575757] Pe-4'/>
                            <p className='text-[#575757] text-[1rem] sm:text-[1.2rem] flex-1'>2 people will be away tomorrow</p>
                            <div  className='flex relative right-6'>
                                <Image src={userimg} alt="alt" className='w-12 rounded-full border-[3px]'/>
                                <Image src={userimg} alt="alt" className='w-12 rounded-full border-[3px] absolute left-7'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="NxtSvnDays">
                    <header className='py-5'>
                        <h1 className='text-[#bbc4cc] text-[1.13rem]'>NEXT SEVEN DAYS</h1>
                    </header>
                    <div className='content flex flex-col gap-4'>
                        <div className='flex items-center justify-between gap-5 bg-[#16191c] p-[15px] rounded-md'>
                            <FontAwesomeIcon icon={faSuitcase} className='w-7 text-[#575757] Pe-4'/>
                            <p className='text-[#575757] text-[1rem] sm:text-[1.2rem] flex-1'>2 people are going away tomorrow</p>
                            <div  className='flex relative right-6'>
                                <Image src={userimg} alt="alt" className='w-12 rounded-full border-[3px]'/>
                                <Image src={userimg} alt="alt" className='w-12 rounded-full border-[3px] absolute left-7'/>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-4 bg-[#16191c] p-[15px] rounded-md'>
                            <FontAwesomeIcon icon={faUserPlus} className='w-10 text-[#575757] Pe-4'/>
                            <p className='text-[#575757] text-[1rem] sm:text-[1.2rem] flex-1'>Your first day is going to be on Thursday</p>
                            <Image src={userimg} alt="alt" className='w-12 rounded-full border-[3px]'/>
                        </div>
                        <div className='flex items-center justify-between gap-4 bg-[#16191c] p-[15px] rounded-md'>
                            <FontAwesomeIcon icon={faCalendarDays} className='w-6 text-[#575757] Pe-4'/>
                            <p className='text-[#575757] text-[1rem] sm:text-[1.2rem] flex-1'>It&#39;s Spring Bank Holiday  on Monday</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-1 w-full'>
                <div className="upcomingHoliday">
                    <header className='py-5'>
                        <h1 className='text-[#bbc4cc] text-[0.94rem]'>UPCOMING HOLIDAY</h1>
                    </header>

                    <div className='bg-[#16191c] p-4 text-center rounded-lg'>
                        <h4 className='text-[#bbc4cc] text-[1.2rem]'>2</h4>
                        <p className='text-[#bbc4cc] text-[0.94rem]'>Up Coming Holidays</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDashboard