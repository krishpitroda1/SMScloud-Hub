import React,{useRef} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

function Contacts() {
  // const notify = () => toast("Wow so easy!");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "9f994ad8-f4b7-40ea-aadd-a57423b242cc");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: json
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     console.log("Success", res);
  //   }
  // };
  // const alert=()=>{
  //   alert("mail send successfully")
  // }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohjjt5j', 'template_z9f9epe', form.current, 'W3evK8uD8UteOGZvp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  
    <div className='w-screen pt-7 relative justify-items-center'>
      <h1 class="align-center text-center text-3xl font-bold text-sky-800 bg-slate-400 sm:text-4xl h-20 p-5 w-screen">
        Contact us
      </h1>
    <div>
<div class="sm:px-6">
  <div class="">
    <div class="align-cennter w-screen text-center">
      
      <p class="mt-5 text-3xl">
        We'd love to talk about how we can help you.
      </p>
    </div>

    <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16 pb-10">
      <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
        <h2 class="mb-8 text-xl font-semibold text-sky-600 ">
          Fill in the form
        </h2>

        <form ref={form} onSubmit={sendEmail}>
          <div class="grid gap-4">
             <div class="">
              <div>
                <label>Name</label>
                <input type="text" name="user_name" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder=" Name" required/>
              </div> 
             </div>

             <div>
              <label>Email</label>
              <input type="email" name="user_email" autocomplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" required/>
            </div> 

            <div>
              <label>Phone Number</label>
              <input type='tel' name="phone_no" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Phone Number"  pattern="[0-9]{10}" required/>
            </div> 

             <div>
              <label>Details</label>
              <textarea  name="details" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Details" required></textarea>
            </div>
          </div>
          <div class="mt-4 grid">
            <input type="submit" value='Send Inquiry' class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none" />
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-gray-500">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div> 
      <div class="divide-y divide-gray-200 dark:divide-gray-800">
     
        <div class="flex gap-x-7 py-6">
         <FaWhatsapp className='flex-shrink-0 w-6 h-6 mt-1.5 text-green-600' />
          <div class="grow">
            <h3 class="font-semibold text-sky-600">Whatsapp</h3>
            <p class="mt-1 text-sm text-gray-500">Do Whatsapp for answers to anything you might ask.</p>
            <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Visit Our Whatsapp
           
            </a>
          </div>
        </div>
        <div class=" flex gap-x-7 py-6">
        <FaLinkedin className='flex-shrink-0 w-6 h-6 mt-1.5 text-sky-600'/>
          <div class="grow">
            <h3 class="font-semibold text-sky-600">Linkedin</h3>
            <p class="mt-1 text-sm text-gray-500">Connnect With our company on Linkedin</p>
            <Link class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="https://www.linkedin.com/company/smscloudhub/">
              Connect Us on Linkedin
              <svg class="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
        </div>
        <div class=" flex gap-x-7 py-6">
         <SiGmail className='flex-shrink-0 w-6 h-6 mt-1.5 text-red-600'/>
          <div class="grow">
            <h3 class="font-semibold text-sky-600">Contact us by email</h3>
            <p class="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p>
            <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              info@smscloudhub.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
<div className=''>

     <h1 className="align-center text-sky-600 w-screen bg-[#EFE2BA] text-center p-5 font-serif font-bold text-3xl border-b">
          Our Location
        </h1>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.30011784394395!2d72.49662934555259!3d22.989018459114877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bf4765fe993%3A0xa21cf89753936894!2sSMSCloud%20Hub!5e0!3m2!1sen!2sin!4v1704867816876!5m2!1sen!2sin"height={'600px'} className='b-0 block justify-center items-center rounded-xl w-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" key={"g"}></iframe>
</div>
    
    </div>
  )
}

export default Contacts
