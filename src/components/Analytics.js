import React from 'react'
import Laptop from '../assets/laptop.jpg'
function Analytics() {
  return (
    <div className='w-scree py-16 px-4 '>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

    <img className='w-[500px] mx-auto my-4 rounded-2xl' src={Laptop} alt="/" />
    <div className='flex flex-col justify-center'>
        <p className='text-sky-600 font-bold p-5 text-3xl'>SMS Dashboard</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold p-5'>Manage SMS Analytics Centrally</h1>
        <p className='pl-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque illo id delectus quae unde aut recusandae ex earum dolores, aliquid quod dolore tenetur consectetur, sint iste assumenda blanditiis perspiciatis laboriosam!</p>
    <button className='bg-sky-600 w-[260px] rounded-full h-[60px] font-medium my-6 mx-auto md:mx-0 px-auto p-5 text-black text-md hover:bg-white'>Get Start</button>
    </div>
    </div>
    </div>
  )
}

export default Analytics
