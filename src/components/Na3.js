import React from 'react'
import Logo from "../assets/SMSCH_Transparent-removebg-preview.png";
import { Link } from 'react-router-dom';
function Na3() {
  return (
    <div className='bg-red-200 items-center text-center rounded-b-full'>
        <div className='items-center'>

           <Link className="" to="/">
              <img
                src={Logo}  
                alt="SMSCloud Hub"
                className="md:cursor-pointer h-14 w-24"
                />
            </Link>
                </div>
    </div>
  )
}

export default Na3
