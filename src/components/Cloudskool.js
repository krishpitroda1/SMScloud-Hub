import React,{useRef} from 'react';
import img3 from "../assets/circle.png";
import img1 from '../assets/cskool.jpeg'
import emailjs from '@emailjs/browser';

function Cloudskool() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sf5lyrk', 'template_0tl3o4j', form.current, '-5PwbfIUXfNKA7-Sv')
      .then((result) => {
          console.log(result.text);
          alert("email send successfully ")
      }, (error) => {
          console.log(error.text);
      });
  };
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
  <div className='mr-10 ml-10 bg-sky-200 '>
    <h1 className='p-5 text-3xl text-center font-serif font-bold'>Contact Us For Demo</h1>
  <form ref={form} onSubmit={sendEmail} className='h-full p-10  bg-gray-600 align-middle '>
          <div class="">
             <div class="p-3">
              <div>
                <p className='pl-1 pb-1 text-lg'>Name</p>
                <input type="text" name="user_name" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder=" Name" required/>
              </div> 
             </div>

             <div className='p-3'>
              <p className='pl-1 pb-1 text-lg'>Email</p>
              <input type="email" name="user_email" autocomplete="email" className="py-3 px-4 p-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" required/>
            </div> 

            <div className='p-3'>
              <label className='pl-1 pb-1 text-lg'>Phone Number</label>
              <input type='tel' name="phone_no" id="hs-phone-number-1" class="py-3 px-4 p-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Phone Number"  pattern="[0-9]{10}" required/>
            </div> 

             <div className='p-3'> 
              <label className='pl-1 pb-1 text-lg'>Details</label>
              <textarea  name="details" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Details" required></textarea>
            </div>
          </div>
          <div class="mt-4  p-3">
            <input type="submit" value='Send Inquiry' class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none" />
          </div>

          <div class="mt-3 text-center">
            <p class="text-lg text-white">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
  </div>
    </div>
  )
}

export default Cloudskool
