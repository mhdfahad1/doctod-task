import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Courses from '../components/Courses'
import Assignments from '../components/Assignments'
import Calendar from '../Calendar'

function Home() {
  return (
    <div>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div>
          <Dashboard />
          <div className='md:flex'>
            <div>
              <Courses />
              <Assignments />
            </div>
            <div>
              <Calendar />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home