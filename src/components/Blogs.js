import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/ai.jpg'
import img2 from '../assets/msme.png'
import img3 from '../assets/sms.jpeg'

function Blogs() {
  return (
    <div className='relative pt-8' >
    <h1 className="align-center text-sky-600  w-screen text-center p-5 pt-14 font-serif font-bold text-3xl border-b">
          Blogs
        </h1>
    <div class=" w-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto justify-center ">
      <div class="mx-auto md:flex-col gap-6 pt-5 p-5">
        <a class="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-full sm:w-[250px] sm:h-[350px]">
            <img class="w-full h-full   top-0 start-0 object-cover" src={img} alt="Image Description" />
          </div>
    
          <div class="grow">
            <div class="p-4 flex flex-col h-full sm:p-6">
              <div class="mb-3">
                <p class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Business
                </p>
              </div>
              <h3 class="text-lg sm:text-2xl font-semibold text-black group-hover:text-blue-600 dark:group-hover:text-sky-600">
              A2P MESSAGING & AI(Artificial Intelligence)
              </h3>
              <p class="mt-2 text-gray-800 ">
              A2P SMS is plain and simple, yet most widely used due to it simplicity.  Many a times it is chosen ...
                </p>
              <Link to='/Aiblog'>
              <button className='bg-gray-800 text-white rounded-md font-medium text-md p-3 mt-5'>Read more</button>
              </Link>
              <div class=" mt-10 pt-6 sm:mt-auto">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img class="h-[2.875rem] w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                  </div>
                  <div class="ms-2.5 sm:ms-4">
                    <h4 class="font-semibold text-gray-800">
                      Ashish Bavishi
                    </h4>
                    <p class="text-xs text-gray-500">
                      Feb 15, 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a class="group sm:flex rounded-xl pt-5  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
            <img class="w-full h-full absolute top-0 start-0 object-cover" src={img3} alt="Image Description" />
          </div>
    
          <div class="grow">
            <div class="p-4 flex flex-col h-full sm:p-6">
              <div class="mb-3">
                <p class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Business
                </p>
              </div>
              <h3 class="text-lg sm:text-2xl font-semibold text-black group-hover:text-blue-600 dark:group-hover:text-sky-600">
              A2P Promotional Best Practice
              </h3>
              <p class="mt-7 text-gray-800 ">
              When we talk about Messaging A2P, MMS and RCS are the major format of sending Short Messages. After RCS ...
                </p>
              <Link to='/A2pblog'>
              <button className='bg-gray-800 text-white rounded-md font-medium text-md p-3 mt-5'>Read more</button>
              </Link>
              <div class=" mt-10 pt-6 sm:mt-auto">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img class="h-[2.875rem] w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                  </div>
                  <div class="ms-2.5 sm:ms-4">
                    <h4 class="font-semibold text-gray-800">
                      Ashish Bavishi
                    </h4>
                    <p class="text-xs text-gray-500">
                      Feb 15, 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      <a class="group sm:flex rounded-xl pt-7 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
            <img class="w-full h-full absolute top-0 start-0 object-cover" src={img2} alt="Image Description" />
          </div>
    
          <div class="grow">
            <div class="p-4 flex flex-col h-full sm:p-6">
              <div class="mb-3">
                <p class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Business
                </p>
              </div>
              <h3 class="text-lg sm:text-2xl font-semibold text-black group-hover:text-blue-600 dark:group-hover:text-sky-600">
              Digital Transformation for MSME in India
              </h3>
              <p class="mt-2 text-gray-800 ">
              India has a rich hi story of the Industrial Revolution, and many were founded, expanded upon, and ...
                </p>
              <Link to='/Digitalblog'>
              <button className='bg-gray-800 text-white rounded-md font-medium text-md p-3 mt-5'>Read more</button>
              </Link>
              <div class=" mt-10 pt-6 sm:mt-auto">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img class="h-[2.875rem] w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                  </div>
                  <div class="ms-2.5 sm:ms-4">
                    <h4 class="font-semibold text-gray-800">
                      Ashish Bavishi
                    </h4>
                    <p class="text-xs text-gray-500">
                      Feb 15, 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        
     
      
     
      
      </div>
    </div>
    </div>
    )
}

export default Blogs
