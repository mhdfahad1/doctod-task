import React from 'react'
import clock from '../images/clock.png'
import video from '../images/video.png'
import meter from '../images/Group1.png'
import './Courses.css'

function Courses() {
    return (
        <div className='md:w-[550px] w-[400px] md:h-[350px] h-[400px] bg-red-100 md:ml-5 ml-2 rounded-lg'>
            <div className='flex justify-between pt-3 p-2'>
                <h1 className='text-xl font-semibold pl-2'>Ongoing Courses</h1>
                <div className='mr-5'>
                    <i class="fa-solid fa-less-than text-2xl mr-4"></i>
                    <i class="fa-solid fa-greater-than text-2xl"></i>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='md:w-[514px] w-[364px] md:h-[276px] h-[316px] rounded-lg bg-[white] flex'>
                    <div className='w-[141px] h-[255px] bg-[#C4C4C4] rounded-lg mt-2 ml-2'></div>
                    <div className='pl-2'>
                        <h1 className='font-bold md:text-xl text-sm mt-2'>900 Hour Teacher Training</h1>
                        <div className='pt-5 flex'>
                            <div className='flex'>
                                <img width={'15px'} style={{height:'15px'}} className='mr-2' src={clock} alt="" />
                                <p className='text-slate-400 md:text-sm text-xs'>12 Week</p>
                            </div>
                            <div className='flex ml-7'>
                                <img width={'15px'} style={{height:'13px'}} className='mr-2 mt-1' src={video} alt="" />
                                <p className='text-slate-400 md:text-sm text-xs'>35 Lessons</p>
                            </div>
                            <div className='md:ml-7 -ml-1'>
                                <button style={{fontSize:'9px'}} className='bg-black text-white rounded-lg p-1 w-[60px]'>HYBRID</button>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <p className='text-sm'>25% Completed</p>
                            <img className='mt-2' width={'350px'} src={meter} alt="" />
                            <p className='text-slate-400 mt-3'>-----------------------------------------------</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p className='textcolor text-xs font-medium'>NEXT CLASS DUE ON 23 JUNE 2023</p>
                            <button  className='w-[80px] h-[30px] button text-sm rounded mr-1'>Continue</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Courses