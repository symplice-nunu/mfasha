import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Sections/Footer'
import Sidebar from './Sections/Sidebar'
import Navbar from './Sections/Navbar'

export default function PageLayout() {
  return (
    <>
      <div className='flex gap-2'>
        <div><Sidebar /></div>
        <div className='w-full'>
          <div><Navbar /></div>
          <div><Outlet/></div>
        </div>
      </div>
      <Footer/>
    </>
  )
}