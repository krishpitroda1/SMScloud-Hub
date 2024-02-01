import React from "react";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Companies from "./Companies";
import Test from "./Test";
import img2 from "../assets/hubs.jpeg";
// import ParticlesComponent from "./Particle";
import img3 from "../assets/easy.jpeg";
import videobg from '../assets/bgvideo.mp4';
import Divs from "./Divs";
import Ev from "./Ev";
function Home() {
  return (
    <div className="w-screen homediv relative overflow-hidden">
      <Navbar/> 
    <div className="relative">

      <video src={videobg} className="pt-3 blur-sm top-3 mt-2 absolute rounded-lg " autoPlay muted loop ></video>
       <div className="firstdiv relative pt-14 lg:pt-16 my-auto first max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-4xl flex flex-col justify-center text-sky-400  overflow-hidden">
        <h1 className="text-white  font-bold p-3  md:text-7xl sm:text-6xl text-4xl md:py-6" >
        Smart, Simple & Effective <br/> <span className="text-3xl pt-0 mt-0">Communication on the GO!</span></h1>
        <TypeAnimation
          className="font-bold"
          sequence={["SMS", 1000, "Voice", 1000, "CPaaS", 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <p className="md:text-2xl text-xl font-bold text-white py-6">Monitor your data to increase revenue  for B2B</p>
      </div>
      </div>
      {/* <Analytics/> */}
      <Divs/>
      <Ev/>
     <div className="">
        <Companies/>
     </div>
     {/* <div>
     <h1 className="align-center text-sky-400 text-center p-5 font-serif font-bold text-4xl ">
        Why Choose Us
      </h1>
      <div className="grid md:grid-cols-2 ">
        <img src={img2} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-sky-600  p-5 font-bold text-3xl">
            Advantages for Choosing Us
          </p>
          <h1 className="py-3 p-5 text-lg sm:text-xl md:text-xl">
            {" "}
            Even in the age of digital advertising, tapping into SMS, or simply
            texting, is considered as the personalized, fastest, and…
          </h1>
        <div className="grid grid-cols-1 p-5">

          <div className="grid grid-cols-3 gap-5 pt-5">
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
      </div> */}
      <div>
        <h1 className="text-sky-400 text-center p-5 pb-1 font-serif font-bold text-3xl">
          Benifitis Of SMS Hubbing
        </h1>
        <p className="text-center text-gray-500 text-xl">Benifits of SMS Hubbing with SMSCloud Hub</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 p-5">
            <div className="rounded-lg p-5 h-32 pl-8 bg-gray-800 hover:bg-gray-400  text-white">
            <h1 className="font-bold text-lg">Scalable Platform</h1>
            <p>Platform with burstable capacity upto 1000 TPS</p>
            </div>
            <div className="rounded-lg h-32 p-5 pl-8 bg-gray-800 hover:bg-gray-400 text-white">
            <h1 className="font-bold text-lg">High Quality</h1>
            <p>Global high quality routes with fall back</p>
            </div>
            <div className="rounded-lg p-5 h-32 pl-8 bg-gray-800 hover:bg-gray-400 text-white">
            <h1 className="font-bold text-lg">Seamless Broadcast</h1>
            <p>Post-paid billing model for the MNOs/MVNOs and Aggregators</p>
            </div>
            <div className="rounded-lg p-5 h-32 pl-8 bg-gray-800 hover:bg-gray-400 text-white">
            <h1 className="font-bold text-lg">Carrier Grade Feature</h1>
            <p>High availability, 99.95% uptime backed by SLA.</p>
            </div>
            <div className="rounded-lg p-5 h-32  pl-8 bg-gray-800 hover:bg-gray-400 text-white">
            <h1 className="font-bold text-lg">Cloud Based Services</h1>
            <p>Cloud connectivity with no down time & no CAPEX.</p>
            </div>
            <div className="rounded-lg p-5 h-32 pl-8 bg-gray-800 hover:bg-gray-400 text-white">
            <h1 className="font-bold text-lg">World Wide Reach</h1>
            <p>Flawless termination in more then 180 Countries.</p>
            </div> 
        </div>
      </div>
      <div className="p-5">
      <Test/>
     </div>
    {/* <Cards/> */}
      {/* <End/> */}
    </div>
  ); 
} 

export default Home;
