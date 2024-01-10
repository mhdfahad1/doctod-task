import React, { useState } from 'react'
import plus from '../images/Plus.png'
import danger from '../images/Danger.png'
function Assignments() {
    const [check,setCheck]=useState(0)
    return (
        <div className='flex p-4'>
            <div className='md:w-[265px] h-[338px] rounded-lg border p-3'>
                <h1 className='md:text-xl text-sm font-bold'>Assignments</h1>
                <div className='flex pt-2'>
                    <input type="checkbox" checked name="" id="" style={{ accentColor: 'green' }} />
                    <p className='text-xs ml-1 '>{check}/5 completed</p>

                </div>
                <div className='flex justify-between mt-3'>
                    <div className='flex'>
                        <input onClick={()=>setCheck(check+1)} className='w-[20px]' style={{ accentColor: '#FF5956' }} type="checkbox" />
                        <div className='ml-3'>
                            <h1 className='md:text-sm text-xs font-bold'>Lesson Plan 1</h1>
                            <p className='text-xs text-slate-500'>01 Sep 2022</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='md:text-sm text-xs font-bold'>PASS</h1>
                        <p className='text-xs text-slate-500'>Grade</p>
                    </div>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex'>
                        <input onClick={()=>setCheck(check+1)} className='w-[20px]' style={{ accentColor: '#FF5956' }} type="checkbox" />
                        <div className='ml-3'>
                            <h1 className='md:text-sm text-xs font-bold'>Philosophy</h1>
                            <p className='text-xs text-slate-500'>01 Sep 2022</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='md:text-sm text-xs font-bold'>90/100</h1>
                        <p className='text-xs text-slate-500'>Grade</p>
                    </div>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex'>
                        <input onClick={()=>setCheck(check+1)} className='w-[20px]' style={{ accentColor: '#FF5956' }} type="checkbox" />
                        <div className='ml-3'>
                            <h1 className='md:text-sm text-xs font-bold'>Yoga Mudra</h1>
                            <p className='text-xs text-slate-500'>03 Sep 2022</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='md:text-sm text-xs font-bold'>0/100</h1>
                        <p className='text-xs text-slate-500'>To Do</p>
                    </div>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex'>
                        <input onClick={()=>setCheck(check+1)} className='w-[20px]' style={{ accentColor: '#FF5956' }} type="checkbox" />
                        <div className='ml-3'>
                            <h1 className='md:text-sm text-xs font-bold'>Mock Test</h1>
                            <p className='text-xs text-slate-500'>06 Sep 2022</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='md:text-sm text-xs font-bold'>0/100</h1>
                        <p className='text-xs text-slate-500'>To Do</p>
                    </div>
                </div>
            </div>
            <div className='md:w-[265px] h-[338px] rounded-lg border p-3 ml-4'>
                <div className='flex justify-between'>
                    <h1 className='md:text-xl text-sm font-bold'>Attendance</h1>
                    <p className='text-xs text-gray-400'>Filter</p>
                </div>

                <div className='flex justify-between mt-3'>
                    <div className='flex'>
                        <img style={{height:'25px'}} src={plus} alt="" />
                        <div className='ml-3'>
                            <h1 className='md:text-sm text-xs font-bold'>Total Classes</h1>
                            <p className='text-xs text-slate-500'>till 20 Jun 2023</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='md:text-sm text-xs font-bold'>20</h1>
                    </div>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex'>
                        <input className='w-[20px]' style={{ accentColor: 'green' }} type="checkbox" />
                        <div className='ml-3'>
                            <h1 className='md:text-sm text-xs font-bold'>Class Attended</h1>
                            <p className='text-xs text-slate-500'>till 20 Jun 2023</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='md:text-sm text-xs font-bold'>10</h1>
                        <p className='text-xs text-green-600'>81%</p>
                    </div>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex'>
                        <img style={{height:'25px'}} src={danger} alt="" />
                        <div className='ml-3'>
                            <h1 className='md:text-sm text-xs font-bold'>Class Missed</h1>
                            <p className='text-xs text-slate-500'>till 20 Jun 2023</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='md:text-sm text-xs font-bold'>11</h1>
                        <p className='text-xs text-green-600'>2%</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Assignments