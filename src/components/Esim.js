import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/esim.jpg'
function Esim() {
  return (
  <div className=' w-screen relative pt-7 pb-8'>
    <h1 className="align-center text-sky-600  bg-[#EFE2BA]  text-center p-5 font-serif font-bold text-3xl border-b">
      ESIM
    </h1>
    <div className="grid md:grid-cols-2">
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    <div className="flex flex-col justify-center">
      <p className="text-orange-600 p-5 font-bold text-3xl">
        ESIM
      </p>
      <div className="flex pt-8 p-5">

      <div className="pr-10">
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          An eSIM (electronic SIM) is a digital SIM that allows you to activate a cellular plan from your carrier without the need for a real nano-SIM</h1>
        </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          All of this technology can be connected to a mobile network remotely by business.
          </h1>
         </div>
      </div>
    </div>

    </div>
  </div>
</div>
  )
}

export default Esim
