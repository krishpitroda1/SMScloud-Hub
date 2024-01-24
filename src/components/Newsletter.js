import React from 'react'

function Newsletter() {
  return (
    <div className='w-screen py-16 text-black px-4'>
      <div className='max-w-[1240px]  mx-auto grid  lg:grid-col-3'>
      <div className='lg:col-span-2 my-4'>
        <h1 className='md:text-4xl sm:text-3xl text-xl'>Want tips & tricks to</h1>
        <p>Sign up to our Newsletter and stay up to date</p>
      </div>
      <div className='my-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full  rounded-md text-black' type="email" placeholder='Enter Email'/>
    <button className='bg-sky-600 w-[200px] rounded-md font-medium my-6 mx-6 md:mx-0 ml-4 px-6 py-3 text-black text-md'>Notify Me</button>
        </div>
      <p>We care about the protaction of your data.Read our <span className='text-sky-600'>Privacy Policy.</span></p>
      </div>
      </div>
    </div>
  )
}

export default Newsletter
 