import React from 'react';
import Profile from '../../images/profile.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Navbar() {
  return (
    <div className='my-6 mx-7'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <div className='border-2 border-[#6e62e5] rounded-full p-[2px]'>
            <img src={Profile} className='rounded-full h-12' alt='User Profile' />
          </div>
          <div>
            <div className='font-bold text-[22px] font-[Times New Roman]'>Hello Noella</div>
            <div className='text-[8px] text-[#c9ccd1] font-[Times New Roman]'>Have a look at the Admin dashboard</div>
          </div>
        </div>
        <div className='flex gap-12'>
          <div className='flex gap-3'>
            <div className='bg-[#f3f4f8] p-2 rounded-full h-8 w-8'>
              <AiOutlineSearch />
            </div>
            <div className='pt-2'>
              <IoMdNotificationsOutline />
            </div>
          </div>
          <div className=' pt-2'>
            <div className='flex gap-1 border px-1 rounded-full py-1 shadow'>
              <div>
                <img src={Profile} className='rounded-full h-4' alt='User Profile' />
              </div>
              <div className='text-[11px] font-bold font-[Times New Roman]'>Noella</div>
              <div>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
