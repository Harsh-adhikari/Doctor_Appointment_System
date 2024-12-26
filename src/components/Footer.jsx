import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* -------Left Section ---------- */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt tempore repellat reiciendis eligendi quae itaque a commodi. Laboriosam, quisquam vitae deleniti cumque repudiandae ratione quod, quidem expedita voluptatibus aut non esse.</p>
        </div>

        {/* -------Center Section ---------- */}
        <div>
            <p className='text-x1 font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* -------Right Section ---------- */}
        <div>
            <p>GET IN TOUCH</p>
            <ul>
              <li>+1-212-456-7890</li>
              <li>greatstackdev</li>
            </ul>
        </div>
      </div>

      {/* --------- Copyright Text --------- */}
      <div>
       <hr />
       <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
