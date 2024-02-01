import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/managehubs.jpg'
function Managehubs() {
  return (
    <div>
      <div className=' w-screen pt-8 relative pb-8'>
    <h1 className="align-center text-sky-600  bg-[#EFE2BA]  text-center p-5 font-serif font-bold text-3xl border-b">
    Managed Service For Messaging Hubs
    </h1>
    <div className="grid md:grid-cols-2">
    <img src={img1} className="w-[700px] mx-auto my-4 rounded-2xl h-[500px]" alt="" />
    <div className="flex flex-col justify-center">
      <p className="text-orange-600 font-bold text-3xl pt-10">
      Managed Service For Messaging Hubs    
      </p>
     <div className="flex pt-8">

      <div className="">
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl pb-5 pr-5">
          Messaging hubs are platforms or services that enable communication between different applications, devices, or systems using messages or events.  </h1>

          
        </div>
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl pb-5">
           Messages are raw data that contain the information that triggered the message pipeline, while events are lightweight notifications of a condition or a state change. </h1>
         </div>
      </div>
       
       <div className=''>
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl ">
          Messages and events can be delivered using various protocols, such as AMQP, MQTT, HTTP, or WebSockets.      </h1>
          </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl pb-5 pr-5">
          There are different messaging services available on Azure, such as Service Bus, Event Grid, Event Hubs, and others
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

export default Managehubs
