import React from 'react'
import asnmt from '../images/Frame1.png'
import course from '../images/Frame2.png'
import watch from '../images/Frame4.png'
import certfct from '../images/Frame3.png'

function Dashboard() {
  return (
    <div>
        <div className='flex justify-start pt-28 pl-7'>
            <h1 className='font-extrabold text-xl'>Home</h1>
        </div>
        <div className='md:flex p-4 md:ml-0 ml-20'>
            <div className='flex justify-between w-[190px] h-[80px] border rounded-lg p-3 mr-5 md:mt-0 mt-1'>
                <div>
                    <img width={'35px'} src={course} alt="" />
                </div>
                <div>
                    <p className='font-extrabold text-lg'>4</p>
                    <p className='font-semibold text-sm'>Ongoing Courses</p>
                </div>
            </div>
            <div className='flex justify-between w-[190px] h-[80px] border rounded-lg p-3 mr-5 md:mt-0 mt-1'>
                <div>
                    <img width={'35px'} src={asnmt} alt="" />
                </div>
                <div>
                    <p className='font-extrabold text-lg'>4</p>
                    <p className='font-semibold text-sm'>Assignments</p>
                </div>
            </div>
            <div className='flex justify-between w-[190px] h-[80px] border rounded-lg p-3 mr-5 md:mt-0 mt-1'>
                <div>
                    <img width={'35px'} src={watch} alt="" />
                </div>
                <div>
                    <p className='font-extrabold text-lg'>40h</p>
                    <p className='font-semibold text-sm'>Watch Time</p>
                </div>
            </div>
            <div className='flex justify-between w-[190px] h-[80px] border rounded-lg p-3 md:mt-0 mt-1'>
                <div>
                    <img width={'35px'} src={certfct} alt="" />
                </div>
                <div>
                    <p className='font-extrabold text-lg'>4</p>
                    <p className='font-semibold text-sm'>Certificates</p>
                </div>
            </div>
             
        </div>
    </div>
  )
}

export default Dashboard