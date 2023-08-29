import React, { useState } from 'react'

 const Doctor = () =>{
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  
  return (
    <div>
      <div >
        
          <button className='rounded bg-[#6E61E5] text-white px-5 py-2' onClick={handleButtonClick}>Add a New Doctor</button>
       
        {showForm && (
          <form action="" className='w-2/4 text-black bg-[#f8f8f8] border p-4'>
            <ul className='flex-col gap-2'>
              <li className='flex '>
                <label htmlFor="">Name</label>
                <input type="text" className=' bg-transparent border border-solid border-b-grey focus:border focus:border-grey' />
              </li>
              <li className='flex-col gap-4'>
                <label htmlFor="">Phone number</label>
                <input type="text" />
              </li>
              <li>
                <label htmlFor="">email</label>
                <input type="email" />
              </li>
              <li>
                <label htmlFor="">Title</label>
                <select name="" id="">
                  <option value="">Dr</option>
                  <option value="">Mr</option>
                  <option value="">Mrs</option>
                  <option value="">Ms</option>
                </select>
              </li>

            </ul>
            
          </form>
        )}
      </div>
    </div>
  )
}
export default Doctor
