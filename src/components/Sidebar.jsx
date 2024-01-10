import React from 'react'
import './Sidebar.css'
import MenuIcon from '@mui/icons-material/Menu';
function Sidebar() {


// small screens open the side bar when the button is clicked
    const sidebarOpen = () => {
        const menu_toggle = document.querySelector('.menu-toggle')
        const sidebar = document.querySelector('.sidebar')
        menu_toggle.classList.toggle('is-active')
        sidebar.classList.toggle('is-active')
    }
    return (
        <>

            <div onClick={() => sidebarOpen()} className='menu-toggle hover:brightness-200'>
                <div className='hamburger'>
                    <span><MenuIcon className='mt-10' /></span>
                </div>
            </div>

            <div id='sidebar' className='sidebar border'>

                <div className='profile pt-5 '>
                    <div className='profilepic'></div>
                    <div className='mt-2'>
                        <h1>Kalyani Khona</h1>
                        <p className='text-slate-400 text-sm'>View Profile <i class="fa-solid fa-greater-than ml-3"></i></p>
                    </div>
                </div>
                <div className='options hover:text-red-600'>
                    <i class="mt-1 fa-solid fa-house"></i><p className='menu-item is-active'>Home</p>
                </div>
                <div className='options1  hover:text-red-600'>
                    <i class="mt-1 fa-regular fa-comment hover::text-red-600"></i><p className=''>Messages</p>
                </div>
                <div className='options1  hover:text-red-600'>
                    <i class="mt-1 fa-regular fa-file-lines hover::text-red-600"></i><p className=''>E-Library</p>
                </div>
                <div className='options1  hover:text-red-600'>
                    <i class="mt-1 fa-regular fa-calendar hover::text-red-600"></i><p className=''>Calendar</p>
                </div>
                <div className='options1  hover:text-red-600'>
                    <i class="mt-1 fa-regular fa-calendar hover::text-red-600"></i><p className=''>Settings</p>
                </div>
                <div className='options1  hover:text-red-600'>
                    <i class="mt-1 fa-regular fa-calendar hover::text-red-600"></i><p className=''>Support</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar