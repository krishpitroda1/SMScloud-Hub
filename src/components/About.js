import React,{useEffect} from "react";
import End from "./End";

import img from "../assets/img1.jpeg";
import img2 from "../assets/hubs.jpeg";
import img3 from "../assets/easy.jpeg";
import Faq from "./Faq";
function About() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-screen pb-0 relative pt-8 " >
      <div className="pt-8">
        <h1 className="align-center text-sky-600  w-screen  h-20  text-center p-5 font-serif font-bold text-3xl border-b">
          About Us
        </h1>
       </div>
      <div className="w-screen py-16  px-4 ">
        <div className="max-w-[1240px] mx-auto  pt-8  grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4 rounded-2xl"
            src={img}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-4xl sm:text-3xl text-red-600 text-2xl font-bold p-5">
              Messaging is our business!
            </h1>
            <p className="p-5 text-xl text-black">
              SMSCloud Hub provides solutions for better customer engagement
              through a cloud-based platform. We empower businesses to engage
              with their people through a variety of channels, making their
              communication conversational, more personalized, fun, meaningful,
              and with ease. With an innovative suite of Cloud based solutions,
              WebPanels & APIs, SMSCloud Hub delivers communication solutions
              that have been used by almost everyone around the world
            </p>
            <p className="p-5 text-xl">
              When the messaging is the central to the business, we solve
              today’s unique customer challenges by bridging business to the
              world by using complex communication channels. And we thrive with
              A2P Messaging for India and International Market providing
              solutions with the right mix of Cloud Technlogy &
              Telecommunications.
            </p>
            <p className="p-5 text-xl">
              Our global team and Partner network consists of the best and the
              brightest in the industry.
            </p>
          </div>
        </div>
      </div>
     <div className="pt-8">

      <h1 className="align-center text-sky-600  bg-[#EFE2BA] h-20  text-center p-5 font-serif font-bold text-3xl border-b">
        Why Choose Us
      </h1>
      <div className="grid md:grid-cols-2">
        <img src={img2} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-sky-600 font-bold text-3xl p-5">
            Advantages for Choosing Us
          </p>
          <h1 className="p-5 text-lg sm:text-xl md:text-xl">
            {" "}
            Even in the age of digital advertising, tapping into SMS, or simply
            texting, is considered as the personalized, fastest, and…
          </h1>
        <div className="grid grid-cols-1 p-5">

          <div className="grid grid-cols-3 gap-5">
            <div>
              <img src={img3} className="h-16 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
                Easy to integrate
              </h1>
              <p>Adaptive platform to connect with your existing clients</p>
            </div>
            <div>
              <img src={img3} className="h-16 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
                Global Reach
              </h1>
              <p>World Wide Connectivity</p>
            </div>
            <div>
              <img src={img3} className="h-16 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
                Cloud Scalable
              </h1>
              <p>Burstable capacity in the cloud to support your business.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <div>
              <img src={img3} className="h-16 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
               Responsive Team
               </h1>
              <p>Friendly and always available business & support team.</p>
            </div>
            <div>
              <img src={img3} className="h-16 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
                Low TCO
              </h1>
              <p>Adaptive platform to connect with your existing clients</p>
            </div>
            <div>
              <img src={img3} className="h-16 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 font-serif text-xl">
                Futuristic Solution
              </h1>
              <p>Using new-age technologies we bring 360-degree Digital. Transformation for companies of all sizes.</p>
            </div>
          </div>
        </div>

        </div>
     </div>
      </div>
        <div>
          {/* <End/> */}
    </div>
  
    </div>
  )
}

export default About;
