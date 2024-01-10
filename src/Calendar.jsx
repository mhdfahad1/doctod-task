import React from 'react'

function Calendar() {
    return (
        <div className='md:w-[255px] w-[360px] border h-[710px] rounded-lg md:-ml-2 ml-6 p-2'>
            <div className='md:w-[236px] h-[127px] bg-[#FFF8F8] rounded-lg p-2'>
                <h1 className='md:text-xl text-sm font-bold'>September 2023</h1>
                <div className='flex '>
                    <div className='justify-center mt-2 md:ml-2 ml-7'>
                        <p className='text-sm ml-1'>3</p>
                        <p className='text-xs text-gray-400'>mon</p>
                    </div>
                    <div className='justify-center mt-2 md:ml-4 ml-7 bg-[#FF5956] w-[25px] rounded-md'>
                        <p className='text-sm ml-1'>4</p>
                        <p className='text-xs text-white ml-1'>tue</p>
                    </div>
                    <div className='justify-center mt-2 md:ml-4 ml-7'>
                        <p className='text-sm ml-1'>5</p>
                        <p className='text-xs text-gray-400'>wed</p>
                    </div>
                    <div className='justify-center mt-2 md:ml-4 ml-7'>
                        <p className='text-sm ml-1'>6</p>
                        <p className='text-xs text-gray-400'>thu</p>
                    </div>
                    <div className='justify-center mt-2 md:ml-4 ml-7'>
                        <p className='text-sm ml-1'>7</p>
                        <p className='text-xs text-gray-400'>fri</p>
                    </div>
                    <div className='justify-center mt-2 md:ml-4 ml-7'>
                        <p className='text-sm ml-1'>8</p>
                        <p className='text-xs text-gray-400'>sat</p>
                    </div>

                </div>

                <div>


                </div>

            </div>

            <div className='flex mt-3 pl-1'>
                <p className='text-xs text-gray-400'>09:00</p>
                <hr className='md:w-[150px] w-[350px] ml-3 mt-2' />
            </div>
            <div className='flex mt-8 pl-1'>
                <p className='text-xs text-gray-400'>10:00</p>
                <hr className='md:w-[150px] w-[350px] ml-3 mt-2' />
            </div>
            <div className='flex mt-8 pl-1'>
                <div>
                    <p className='text-xs text-gray-400'>11:00</p>
                    <p className='text-xs text-gray-400 mt-9'>12:00</p>

                </div>
                <div className='w-[250px] h-[113px] bg-[#FAEBF0] md:ml-3 ml-7 rounded-lg -mt-4 p-2'>
                    <button style={{ fontSize: '9px' }} className='bg-black text-white rounded-sm p-1 w-[80px]'>LIVE SESSION</button>
                    <p className='text-sm text-black font-semibold mt-1'>Swadhyay with Dr. Athul</p>
                    <p className='text-xs text-slate-400 mt-9'>10:00AM - 12:00PM</p>

                </div>

            </div>
            <div className='flex mt-6 pl-1'>
                <p className='text-xs text-gray-400'>13:00</p>
                <hr className='md:w-[150px] w-[350px] ml-3 mt-2' />
            </div>
            <div className='flex mt-9 pl-1'>
                <p className='text-xs text-gray-400'>14:00</p>
                <hr className='md:w-[150px] w-[350px] ml-3 mt-2' />
            </div>
            <div className='flex mt-9 pl-1'>
                <p className='text-xs text-gray-400'>15:00</p>
                <hr className='md:w-[150px] w-[350px] ml-3 mt-2' />
            </div>
            <div className='flex mt-9 pl-1'>
                <p className='text-xs text-gray-400'>16:00</p>
                <hr className='md:w-[150px] w-[350px] ml-3 mt-2' />
            </div>
            <div className='flex mt-9 pl-1'>
                <p className='text-xs text-gray-400'>17:00</p>
                <hr className='md:w-[150px] w-[350px] ml-3 mt-2' />
            </div>
            <div className='flex mt-9 pl-1'>
                <p className='text-xs text-gray-400'>18:00</p>
                <hr className='md:w-[150px] w-[350px] ml-3 mt-2' />
            </div>
        </div>
    )
}

export default Calendar