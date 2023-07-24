import React from 'react'
import { SidebarData } from '../../Data/SidebarData'
import { Link, useLocation } from 'react-router-dom'
import { BsHospitalFill } from 'react-icons/bs'
export default function Sidebar() {
  const location = useLocation();
  const active = location.pathname
  return (
    <div className=' ml-5'>
      <div className='flex'>
      <div>
        <div className='flex gap-3 my-7'>
          <div><BsHospitalFill className='text-[30px] text-[#6e61e5]' /></div>
          <div className='mt-1 font-bold'>Mfasha</div>
        </div>
        <div className='w-[165px]'>
          {
            SidebarData.map((item) => {
              return(
                <Link to={item.Path}>
                  <div className={`${active === item.Path ? "bg-[#6e61e5] text-white" : null} flex gap-1 mb-[1px] hover:text-white py-[8px] px-4 hover:bg-[#6e61e5] rounded`}>
                    <div className='pt-1'>{item.icon}</div>
                    <div className='text-[14px] '>{item.Name}</div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
      <div>
        <div className='bg-gray-300 w-[1px] h-screen mx-2'></div>
      </div>
      </div>
    </div>
  )
}
