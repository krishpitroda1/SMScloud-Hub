import React from 'react'
import single from '../assets/person.jpeg'

function Cards() {
  return (
    <div className='w-full py-[10rem] justify-center overflow-hidden'>
      <h1 className='text-center pt-0 pb-8 font-bold text-5xl'>Testimonials</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:bg-sky-600 duration-300 bg-slate-400'>
                <img src={single} className='w-20 mx-auto mt-[-3rem] bg-white rounded-full  h-20' alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
                 <p className='text-center text-4xl font-bold'>4 star</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>
                        500gb storage
                    </p>
                    <p className='py-2 border-b mx-8 '>very good</p>
                    <p className='py-2 border-b mx-8'>service</p>
                </div>
                {/* <button className='bg-red-300 w-[200px] rounded-md font-medium my-6 mx-6 ml-4 py-3 text-black text-md hover:bg-yellow-300 '>Start trial</button> */}

            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:bg-sky-600  bg-slate-400 duration-300'>
                <img src={single} className='w-20 mx-auto mt-[-3rem] bg-white rounded-full h-20' alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
                 <p className='text-center text-4xl font-bold'>4 star</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>
                        500gb storage
                    </p>
                    <p className='py-2 border-b mx-8 '>very good</p>
                    <p className='py-2 border-b mx-8'>service</p>
                </div>
                {/* <button className='bg-red-300 w-[200px] rounded-md font-medium my-6 mx-6 ml-4 py-3 text-black text-md hover:bg-yellow-300 '>Start trial</button> */}

            </div>   <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105  bg-slate-400 hover:bg-sky-600 duration-300'>
                <img src={single} className='w-20 mx-auto mt-[-3rem] bg-white rounded-full h-20' alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
                 <p className='text-center text-4xl font-bold'>4 star</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>
                        500gb storage
                    </p>
                    <p className='py-2 border-b mx-8 '>very good</p>
                    <p className='py-2 border-b mx-8'>service</p>
                </div>
            </div>
      </div>
     </div>
    
  )
}

export default Cards
