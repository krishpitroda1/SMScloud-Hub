import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/voice.jpeg'
const Voice = () => {
  return (
    <div className=' w-screen relative pt-7 pb-8'>
    <h1 className="align-center text-sky-600  bg-[#EFE2BA]  text-center p-5 font-serif font-bold text-3xl border-b">
      Voice Messaging
    </h1>
    <div className="grid md:grid-cols-2 ">
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    <div className="flex flex-col justify-center">
      <p className="text-orange-600 p-5 font-bold text-3xl">
        Voice Messaging
      </p>
      <h1 className="text-lg p-5 sm:text-xl md:text-xl  pr-6 ">
      A voice message is a type of message that you can send or receive using your voice. It is different from a voice call, which is a live conversation between two or more people.   </h1>
    <div className="flex p-5">

      <div className="">
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          Voice messages are useful when you want to communicate something quickly, easily, or privately, without having to type or call. 
          </h1>
        </div>
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          You can also listen to voice messages at your convenience, and reply with another voice message or a text message.
          </h1>
         </div>
      </div>
       
       <div className=''>
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          They can convey more emotion, tone, and personality than text messages, and can also save time and effort   </h1>
        </div>
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600 font-serif text-xl">
          Some voice messages also have transcripts, which are written versions of what was said in the message
           </h1>
        </div>
        </div> 

    </div>

    </div>
  </div>
</div>
  )
}

export default Voice
