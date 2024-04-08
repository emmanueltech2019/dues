import React from 'react'
import Image from 'next/image';
import user from '../../img/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV'



export default function Project() {
  return (
    <div>
      <div className='grid grid-cols-1 mt-8 smm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className="office-management bg-[#16191c] p-4 rounded-lg">
          <header className='flex justify-between'>
            <div>
              <h1 className='text-white'>Office Management</h1>
              <small className='text-[#8e8c8a]'><strong className='text-[#bbc4cc]'>1</strong> open tasks, <strong className='text-[#bbc4cc]'>9</strong> tasks completed</small>
            </div>
            <FontAwesomeIcon icon={faEllipsisV} className="h-5 text-[#777777]"/>
          </header>

          <div className="text text-[#8e8c8a] py-3">
            <p className='text-[.8rem]'>
              Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
              When an unknown printer took a gallery
              of type and scrambled it...
            </p>
          </div>

          <div className="deadline  py-2">
            <h1 className='text-[#bbc4cc] text-[.8rem]'>Deadline:</h1>
            <p className='text-[#8e8c8a] text-[.8rem]'>17 Apr 2019</p>
          </div>

          <div className="project-leader py-1">
            <h1 className='text-[#bbc4cc] text-[.8rem]'>Project Leader:</h1>
            <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full'/>
          </div>

          <div className="team py-2 mb-9">
            <h1 className='text-[#bbc4cc] text-[.8rem]'>Team:</h1>
            <div className="img flex relative">
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-0'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-6 z-20'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-12 z-30'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-[70px] z-40'/>
              <p className='text-white text-[.7rem] pt-[.53em] ps-[.4em] bg-red-600 w-8 h-8 border-2 border-white rounded-full absolute left-[90px] z-40 text-[.8rem]'>+15</p>
            </div>
          </div>

          <div className="progress py-2">
            <div className='flex justify-between'>
              <h1 className='text-[#bbc4cc] text-[.8rem]'>Progress</h1>
              <p className='text-[#699834] text-[.8rem]'>40%</p>
            </div>

            <div className="pro w-full bg-white h-[4px] rounded-full mt-5">
              <div className="bar"></div>
            </div>
          </div>
        </div>

        <div className="project-management bg-[#16191c] p-4 rounded-lg">
          <header className='flex justify-between'>
            <div>
              <h1 className='text-white'>Project Management</h1>
              <small className='text-[#8e8c8a]'><strong className='text-[#bbc4cc]'>2</strong> open tasks, <strong className='text-[#bbc4cc]'>5</strong> tasks completed</small>
            </div>
            <FontAwesomeIcon icon={faEllipsisV} className="h-5 text-[#777777]"/>
          </header>

          <div className="text text-[#8e8c8a] py-3">
            <p className='text-[.8rem]'>
              Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
              When an unknown printer took a gallery
              of type and scrambled it...
            </p>
          </div>

          <div className="deadline  py-2">
            <h1 className='text-[#bbc4cc] text-[.8rem]'>Deadline:</h1>
            <p className='text-[#8e8c8a] text-[.8rem]'>17 Apr 2019</p>
          </div>

          <div className="project-leader py-1">
            <h1 className='text-[#bbc4cc] text-[.8rem]'>Project Leader:</h1>
            <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full'/>
          </div>

          <div className="team py-2 mb-9">
            <h1 className='text-[#bbc4cc] text-[.8rem]'>Team:</h1>
            <div className="img flex relative">
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-0'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-6 z-20'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-12 z-30'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-[70px] z-40'/>
              <p className='text-white text-[.7rem] pt-[.53em] ps-[.4em] bg-red-600 w-8 h-8 border-2 border-white rounded-full absolute left-[90px] z-40 text-[.8rem]'>+15</p>
            </div>
          </div>

          <div className="progress py-2">
            <div className='flex justify-between'>
              <h1 className='text-[#bbc4cc] text-[.8rem]'>Progress</h1>
              <p className='text-[#699834] text-[.8rem]'>40%</p>
            </div>

            <div className="pro w-full bg-white h-[4px] rounded-full mt-5">
              <div className="bar"></div>
            </div>
          </div>
        </div>

        <div className="video-callingApp bg-[#16191c] p-4 rounded-lg">
          <header className='flex justify-between'>
            <div>
              <h1 className='text-white'>Video Calling App</h1>
              <small className='text-[#8e8c8a]'><strong className='text-[#bbc4cc]'>3</strong> open tasks, <strong className='text-[#bbc4cc]'>3</strong> tasks completed</small>
            </div>
            <FontAwesomeIcon icon={faEllipsisV} className="h-5 text-[#777777]"/>
          </header>

          <div className="text text-[#8e8c8a] py-3">
            <p className='text-[.8rem]'>
              Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
              When an unknown printer took a gallery
              of type and scrambled it...
            </p>
          </div>

          <div className="deadline  py-2">
            <h1 className='text-[#bbc4cc] text-[.8rem]'>Deadline:</h1>
            <p className='text-[#8e8c8a] text-[.8rem]'>17 Apr 2019</p>
          </div>

          <div className="project-leader py-1">
            <h1 className='text-[#bbc4cc]'>Project Leader:</h1>
            <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full'/>
          </div>

          <div className="team py-2 mb-9">
            <h1 className='text-[#bbc4cc] text-[.8rem]'>Team:</h1>
            <div className="img flex relative">
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-0'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-6 z-20'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-12 z-30'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-[70px] z-40'/>
              <p className='text-white text-[.7rem] pt-[.53em] ps-[.4em] bg-red-600 w-8 h-8 border-2 border-white rounded-full absolute left-[90px] z-40 text-[.8rem]'>+15</p>
            </div>
          </div>

          <div className="progress py-2">
            <div className='flex justify-between'>
              <h1 className='text-[#bbc4cc] text-[.8rem]'>Progress</h1>
              <p className='text-[#699834] text-[.8rem]'>40%</p>
            </div>

            <div className="pro w-full bg-white h-[4px] rounded-full mt-5">
              <div className="bar"></div>
            </div>
          </div>
        </div>

        <div className="hospital-aministration bg-[#16191c] p-4 rounded-lg">
          <header className='flex justify-between'>
            <div>
              <h1 className='text-white'>Hospital Administration</h1>
              <small className='text-[#8e8c8a]'><strong className='text-[#bbc4cc]'>12</strong> open tasks, <strong className='text-[#bbc4cc]'>4</strong> tasks completed</small>
            </div>
            <FontAwesomeIcon icon={faEllipsisV} className="h-5 text-[#777777]"/>
          </header>

          <div className="text text-[#8e8c8a] py-3">
            <p className='text-[.8rem]'>
              Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
              When an unknown printer took a gallery
              of type and scrambled it...
            </p>
          </div>

          <div className="deadline  py-2">
            <h1 className='text-[#bbc4cc]'>Deadline:</h1>
            <p className='text-[#8e8c8a] text-[.8rem]'>17 Apr 2019</p>
          </div>

          <div className="project-leader py-1">
            <h1 className='text-[#bbc4cc] text-[.8rem]'>Project Leader:</h1>
            <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full'/>
          </div>

          <div className="team py-2 mb-9">
            <h1 className='text-[#bbc4cc] text-[.8rem]'>Team:</h1>
            <div className="img flex relative">
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-0'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-6 z-20'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-12 z-30'/>
              <Image src={user} alt="alt" className='w-8 border-2 border-white rounded-full absolute left-[70px] z-40'/>
              <p className='text-white text-[.7rem] pt-[.53em] ps-[.4em] bg-red-600 w-8 h-8 border-2 border-white rounded-full absolute left-[90px] z-40 text-[.8rem]'>+15</p>
            </div>
          </div>

          <div className="progress py-2">
            <div className='flex justify-between'>
              <h1 className='text-[#bbc4cc] text-[.8rem]'>Progress</h1>
              <p className='text-[#699834] text-[.8rem]'>40%</p>
            </div>

            <div className="pro w-full bg-white h-[4px] rounded-full mt-5">
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
