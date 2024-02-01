import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/manageit.png'
function Manageit() {
  return (
    <div>
      <div className=' w-screen pt-7 relative pb-8'>
    <h1 className="align-center text-sky-600  bg-[#EFE2BA] text-center p-5 font-serif font-bold text-3xl border-b">
    Managed Service For IT & Infra
    </h1>
    <div className="grid md:grid-cols-2 ">
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    <div className="flex flex-col justify-center">
      <p className="text-orange-600 font-bold text-3xl pt-10">
      Managed Service For IT & Infra
     </p>
      <h1 className="py-3 text-lg sm:text-xl md:text-xl pt-5 pl-0 pr-5">
      Managed service for IT and infrastructure is the practice of outsourcing some or all of the tasks related to the planning, implementation, maintenance, and upgrade of the IT systems and networks of an organization to a third-party vendor   </h1>
    <div className="flex pt-8">

      <div className="">
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl pb-5">
          Reduced costs and improved efficiency by leveraging the expertise and resources of the vendor
          </h1>
        </div>
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl pb-5">
        
          Increased scalability and flexibility to meet the changing needs and demands of the organization  </h1>
         </div>
      </div>
       
       <div className=''>
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl ">
          Improved security and compliance by adhering to the standards and regulations of the industry
          </h1>
          </div>
        <div className='flex pt-5 '>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl pb-5 pr-5">
          Focus on core business activities and innovation by freeing up the internal IT staff from routine tasks

           </h1>
        </div>
        </div> 

    </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Manageit
