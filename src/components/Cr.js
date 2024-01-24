import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/smsc2.jpeg'
function Cr() {
  return (
    <div className=' w-screen relative pt-7 pb-8'>
  <h1 className="align-center text-sky-600  bg-[#EFE2BA]  text-center p-5 font-serif font-bold text-3xl border-b">
  CR
  </h1>
  <div className="grid md:grid-cols-2">
  <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
  <div className="flex flex-col justify-center">
    <p className="text-orange-600  p-5 font-bold text-3xl pt-10">
   Change Request(CR)
    </p>
    
  <div className="flex  pr-5 p-5">

    <div className="">
      <div className='flex'>
        <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
        <h1 className="align-center text-sky-600 font-serif text-xl pb-5">
        A change request in an existing Short Message Service Center (SMSC) refers to a request to modify, update or improve an existing SMSC system. This can be due to various reasons such as new business requirements, technological advancements, or to resolve system issues.
        </h1>
      </div>
      <div className='flex'>
        <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
        <h1 className="align-center text-sky-600 font-serif text-xl pb-5">
      
         We ensures that the system is updated and improved to meet the evolving needs of Your business.
         </h1>
       </div>
    </div>

  </div>

  </div>
</div>
</div>

  )
}

export default Cr
