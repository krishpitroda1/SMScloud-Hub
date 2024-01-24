import React from 'react'
import img1 from '../assets/wa.jpeg'
import img3 from "../assets/circle.png";

const WA = () => {
  return (
    <div className=' w-screen relative pt-8 pb-8'>
  
        <h1 className="align-center text-sky-600  bg-[#EFE2BA]  text-center p-5 font-serif font-bold text-3xl border-b">
          Whatsapp for Business
        </h1>
        <div className="grid md:grid-cols-2">
        <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-orange-600  p-5
           font-bold text-3xl">
            WA For Business
          </p>
          <h1 className="py-3 p-5 text-lg sm:text-xl md:text-xl pr-5">
          WHATSAPP for business helps to connect with your target group with the help of Text, Multimedia, Video, Audio, etc.  </h1>
        <div className="flex p-5 gap-3 ">

          <div className="">
            <div className='flex'>
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
              Genrate quick replies 
              </h1>
            </div>
            <div className='flex'>
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
                Most Accepted Channel 
              </h1>
             </div>
          </div>
           
           <div className=''>
            <div className='flex'>
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
                    Automatic Greeting Message
              </h1>
            </div>
            <div className='flex'>
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
               Contacts can be labelled
               </h1>
            </div>
            </div> 
          <div className="">
            <div className='flex'> 
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
              Create Catalogs and Collection of your products 
              </h1>
            </div>
            <div className='flex'>
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
              WhatsApp Message API
              </h1>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default WA
