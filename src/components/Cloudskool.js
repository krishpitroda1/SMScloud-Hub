import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/cskool.jpeg'
function Cloudskool() {
  return (
     <div className=' w-screen relative pt-7 pb-8'>
    <h1 className="align-center text-sky-600  bg-[#EFE2BA]  text-center p-5 font-serif font-bold text-3xl border-b">
    CloudSkool++
    </h1>
    <div className="grid md:grid-cols-2">
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    <div className="flex flex-col justify-center">
      <p className="p-5 text-orange-600 font-bold text-3xl">
    CloudSkool++
      </p>
      <div className="flex">

      <div className="pr-10 p-5">
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          CloudSkool++ is a cloud based ED-Tech solution. From Managing student records to HR and Payroll, Income and Expense, Transport, SMS and Notification, Academics and Examination, Absence, Discipline all can be managed from one platform.
          </h1>
        </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          It can help you scale your communications and connect with your audience seamlessly with wider messaging reach.
          </h1>
        </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          It can provide you with futuristic solutions using new-age technologies and cloud connectivity.
          </h1>
        </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          It can offer you low total cost of ownership with competitive pricing and no CAPEX.
          </h1>
        </div>
    </div>
    </div>

    </div>
  </div>
    </div>
  )
}

export default Cloudskool
