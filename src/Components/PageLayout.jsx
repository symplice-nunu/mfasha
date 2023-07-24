import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Sections/Footer'
import Sidebar from './Sections/Sidebar'

export default function PageLayout() {
  return (
    <>
      <Sidebar />
      <Outlet/>
      <Footer/>
    </>
  )
}