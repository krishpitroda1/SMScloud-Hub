import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Ev from './Ev';
function Events() {
  // const data=[
  //   {
  //     name:'abc',
  //     img:'https://media.licdn.com/dms/image/D4D03AQFm0iO0GGhXbA/profile-displayphoto-shrink_800_800/0/1689083752439?e=1712188800&v=beta&t=ajLcqon4GmavLbNk-0ZmPcjeh1DeutV1zUYaaqFGv4w',
  //     review:"SMSCloud Hub provides one of if not the best school platform that we ever saw being provided with 24/7 support in the Mozambican Market allowing our growth in the school software segment"
  //      },
  //      {
  //       name:'abc',
  //       img:'https://media.licdn.com/dms/image/D4D03AQFm0iO0GGhXbA/profile-displayphoto-shrink_800_800/0/1689083752439?e=1712188800&v=beta&t=ajLcqon4GmavLbNk-0ZmPcjeh1DeutV1zUYaaqFGv4w',
  //       review:"SMSCloud Hub provides one of if not the best school platform that we ever saw being provided with 24/7 support in the Mozambican Market allowing our growth in the school software segment"
  //        },
  //        {
  //          name:'abc',
  //         img:'https://media.licdn.com/dms/image/D4D03AQFm0iO0GGhXbA/profile-displayphoto-shrink_800_800/0/1689083752439?e=1712188800&v=beta&t=ajLcqon4GmavLbNk-0ZmPcjeh1DeutV1zUYaaqFGv4w',
  //         review:"SMSCloud Hub provides one of if not the best school platform that we ever saw being provided with 24/7 support in the Mozambican Market allowing our growth in the school software segment"
  //          }
  // ]
  const settings = {
    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
       <div class="w-screen relative px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pb-8">
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-black">Events</h2>
    <p class="mt-1 text-gray-600 dark:text-gray-400">Learn How to Celebrate the Most Amazing and Unique Days of the Year with Style and Fun</p>
  </div>
    {/* <div className='w-3/4 m-auto bg-black'>
      <div className='mt-20 bg-black'>
    <Slider {...settings}> 
        {data.map((d)=>(
          <div key={d.name} className='bg-white h-[450px] text-black rounded-xl'>
            <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center'>

            <img src={d.img} alt="h-44 w-44 rounded-full"/>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <p className='text-xl font-semibold'> {d.name}</p>
              <p>{d.review}</p>
            </div>
          </div>
           ))}
     </Slider>
      </div> 

     </div>  */}
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          Amazing celebration
        </h3>
        <p class="mt-5 text-gray-600 dark:text-gray-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
    
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80" alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          How Google Assistant now helps you record stories for kids
        </h3>
        <p class="mt-5 text-gray-600 dark:text-gray-400">
          Google is constantly updating its consumer AI, Google Assistant, with new features.
        </p>
      </div>
     
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80" alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          Front accounts - let's work together
        </h3>
        <p class="mt-5 text-gray-600 dark:text-gray-400">
          Are you an accountant? Are you a company formation advisor?
        </p>
      </div>
       </a>
       <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          Amazing celebration
        </h3>
        <p class="mt-5 text-gray-600 dark:text-gray-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
    
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          Amazing celebration
        </h3>
        <p class="mt-5 text-gray-600 dark:text-gray-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
    
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          Amazing celebration
        </h3>
        <p class="mt-5 text-gray-600 dark:text-gray-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
    
    </a>
  </div>
  </div>
  <Ev/>
   </div>
  )
}

export default Events
