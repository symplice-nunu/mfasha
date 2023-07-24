import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Sections/Footer'
import Sidebar from './Sections/Sidebar'

export default function PageLayout() {
  return (
    <>
      <div className='flex gap-2'>
      <div><Sidebar /></div>
      <div><Outlet/></div>
      </div>
      <Footer/>
    </>
  )
}