import React from 'react'
import users from '../images/users.png'
import patient from '../images/patient.png'
import comment from '../images/comment.png'
import follow_up from '../images/follow_up.png'
import transfer from '../images/transfer.png'
import hospitals from '../images/hospitals.png'
import doctor from '../images/doctor.png'

export default function Dashboard() {
  return (
    <div className='mx-7 font-[Timenewromans]'>
      <div className='grid grid-cols-4 gap-2'>
        <div className='bg-[#6e62e5] p-4 rounded-xl flex gap-3'>
          <div className='mt-1 border-2 border-red-500 rounded-full p-2 bg-teal-100'><img src={users} className='h-8 w-8' alt='all users' /></div>
          <div>
            <div className='text-[10px] text-[#a199ee]'>Users</div>
            <div className='text-white'>5000 <span className='bg-white py-[2px] px-[6px] rounded-full text-[#968cec] text-[10px]'>23%</span> </div>
            <div className='text-[10px] text-[#a199ee]'>Active Users <b className='text-white'>2134</b></div>
          </div>
        </div>
        <div className='bg-[#6e62e5] p-4 rounded-xl flex gap-3'>
          <div className='mt-1 border-2 border-red-500 rounded-full p-2 bg-teal-100'><img src={transfer} className='h-8 w-8' alt='all users' /></div>
          <div>
            <div className='text-[10px] text-[#a199ee]'>Transfers</div>
            <div className='text-white'>5000 <span className='bg-white py-[2px] px-[6px] rounded-full text-[#968cec] text-[10px]'>23%</span> </div>
            <div className='text-[10px] text-[#a199ee]'>Today Transfers <b className='text-white'>2134</b></div>
          </div>
        </div>
        <div className='bg-[#6e62e5] p-4 rounded-xl flex gap-3'>
          <div className='mt-1 border-2 border-red-500 rounded-full p-2 bg-teal-100'><img src={transfer} className='h-8 w-8' alt='all users' /></div>
          <div>
            <div className='text-[10px] text-[#a199ee]'>Completed Transfers</div>
            <div className='text-white'>5000 <span className='bg-white py-[2px] px-[6px] rounded-full text-[#968cec] text-[10px]'>23%</span> </div>
            <div className='text-[10px] text-[#a199ee]'>Today Completed Transfers <b className='text-white'>2134</b></div>
          </div>
        </div>
        <div className='bg-[#6e62e5] p-4 rounded-xl flex gap-3'>
          <div className='mt-1 border-2 border-red-500 rounded-full p-2 bg-teal-100'><img src={hospitals} className='h-8 w-8' alt='all users' /></div>
          <div>
            <div className='text-[10px] text-[#a199ee]'>Hospitals</div>
            <div className='text-white'>5000 <span className='bg-white py-[2px] px-[6px] rounded-full text-[#968cec] text-[10px]'>23%</span> </div>
            <div className='text-[10px] text-[#a199ee]'>Today Transfers by Hospital <b className='text-white'>2134</b></div>
          </div>
        </div>
        <div className='bg-[#6e62e5] p-4 rounded-xl flex gap-3'>
          <div className='mt-1 border-2 border-red-500 rounded-full p-2 bg-teal-100'><img src={patient} className='h-8 w-8' alt='all users' /></div>
          <div>
            <div className='text-[10px] text-[#a199ee]'>Patient</div>
            <div className='text-white'>5000 <span className='bg-white py-[2px] px-[6px] rounded-full text-[#968cec] text-[10px]'>23%</span> </div>
            <div className='text-[10px] text-[#a199ee]'>Active Patient <b className='text-white'>2134</b></div>
          </div>
        </div>
        <div className='bg-[#6e62e5] p-4 rounded-xl flex gap-3'>
          <div className='mt-1 border-2 border-red-500 rounded-full p-2 bg-teal-100'><img src={follow_up} className='h-8 w-8' alt='all users' /></div>
          <div>
            <div className='text-[10px] text-[#a199ee]'>Patient Follow up</div>
            <div className='text-white'>5000 <span className='bg-white py-[2px] px-[6px] rounded-full text-[#968cec] text-[10px]'>23%</span> </div>
            <div className='text-[10px] text-[#a199ee]'>next patient <b className='text-white'>2134</b></div>
          </div>
        </div>
        <div className='bg-[#6e62e5] p-4 rounded-xl flex gap-3'>
          <div className='mt-1 border-2 border-red-500 rounded-full p-2 bg-teal-100'><img src={doctor} className='h-8 w-8' alt='all users' /></div>
          <div>
            <div className='text-[10px] text-[#a199ee]'>Doctor</div>
            <div className='text-white'>5000 <span className='bg-white py-[2px] px-[6px] rounded-full text-[#968cec] text-[10px]'>23%</span> </div>
            <div className='text-[10px] text-[#a199ee]'>Today Active Doctor <b className='text-white'>2134</b></div>
          </div>
        </div>
        <div className='bg-[#6e62e5] p-4 rounded-xl flex gap-3'>
          <div className='mt-1 border-2 border-red-500 rounded-full p-2 bg-teal-100'><img src={comment} className='h-8 w-8' alt='all users' /></div>
          <div>
            <div className='text-[10px] text-[#a199ee]'>Comment</div>
            <div className='text-white'>5000 <span className='bg-white py-[2px] px-[6px] rounded-full text-[#968cec] text-[10px]'>23%</span> </div>
            <div className='text-[10px] text-[#a199ee]'>Negative Comment <b className='text-white'>2134</b></div>
          </div>
        </div>
      </div>
      <div className='border-[1px] p-4 rounded-xl my-6 border-gray-100'>
        <div>
          <h1 className='font-bold '>Total Transfers and Hospital</h1>
          <span className='text-[10px] text-gray-400'>Last 20 days</span>
        </div>
        <div>
          <div>
            <span className='text-[#6255e3] font-bold text-[25px]'>900.26</span>
            &nbsp; &nbsp;
            <span className='bg-[#c3f9d9] px-3 rounded-full text-[10px] py-[2px] text-[#6cd98c] font-bold'>+5.4%</span>
          </div>
          <div className='text-[10px] text-gray-400'> 
            <span className='text-[#6cd98c]'>+2.1k</span> 
            &nbsp; Per Day
          </div>
        </div>
      </div>
    </div>
  )
}
