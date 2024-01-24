import React from "react";
import { TypeAnimation } from "react-type-animation";
import Analytics from "./Analytics";
import Newsletter from "./Newsletter";
import Navbar2 from "./Navbar2";
import Navbar from "./Navbar";
import Nav2 from "./Nav2";
import Cards from "./Cards";
import End from "./End";
import { Link } from "react-router-dom";
import Companies from "./Companies";
import Test from "./Test";
import img2 from "../assets/hubs.jpeg";
// import ParticlesComponent from "./Particle";
import ParticleBackground from "./ParticlesBackground";
import img3 from "../assets/easy.jpeg";
import Nav3 from "./Nav3";
import Na3 from "./Na3";
function Home() {
  return (
    <div className="w-screen homediv relative overflow-hidden">
      <Navbar/> 
       <div className="firstdiv  first max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-4xl flex flex-col justify-center text-sky-400  overflow-hidden">
        <h1 className="text-white  font-bold p-3  md:text-7xl sm:text-6xl text-4xl md:py-6" >
          Delight Your Customers With intelligent Conversation
        </h1>
        <TypeAnimation
          className="font-bold"
          sequence={["At Scale", 1000, "Global", 1000, "Securley", 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <p className="md:text-2xl text-xl font-bold text-gray-500 py-6">Monitor your data to increase revenue  for BTB</p>
      {/* <Link to='/Services' className='cursor-pointer'>
      <button className='bg-sky-600 w-[260px] rounded-full h-[60px] font-medium my-4 mx-auto  py-3 text-black text-md hover:bg-gray-600 hover:text-white'>Get Started</button>
      </Link>
    */}
    {/* <ParticleBackground/> */}
      </div>
      <Analytics/>
     <div className="">

      <Companies/>
     </div>

     <h1 className="align-center text-white  text-center p-5 font-serif font-bold text-4xl ">
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
      <div className="p-5">
      <Test/>
     </div>
    {/* <Cards/> */}
      {/* <End/> */}
    </div>
  ); 
} 

export default Home;
