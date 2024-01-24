import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/cpaas.jpeg'

function Cpas() {
  return (
    <div className=' w-screen pt-7 relative pb-8'>
    <h1 className="align-center text-sky-600  bg-[#EFE2BA] text-center p-5 font-serif font-bold text-3xl border-b">
    Communications Platform as a Service
    </h1>
    <div className="grid md:grid-cols-2">
    <div className="flex flex-col justify-center">
      <p className="p-5 text-orange-600 font-bold text-3xl">
        CPaas platform
      </p>
      <h1 className="py-3 text-lg p-5 sm:text-xl md:text-xl ">
      Communications Platform as a Service, or CPaaS, is one of the fastest-growing communication industries today
   </h1>
    <div className="flex pt-8 p-5">

      <div className="">
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          Great for customer service and client engagement
          </h1>
        </div>
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          Easy integration with existing apps.
          </h1>
         </div>
      </div>
       
       <div className=''>
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl pr-5">
          Customizable and specific to your needs</h1>
         </div>
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
            Scalable and cost efficient
           </h1>
        </div>
        </div> 
                
    </div>

    </div>
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
   
  </div>
</div>
  )
}

export default Cpas
