import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/SMSCH_Transparent-removebg-preview.png";
import NavLinks from "./NavLinks";
import Buttons from "./Buttons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handlenav = () => {
    setNav(!nav);
  };
  const[showMenu,setShowMenu]=useState(false);
  const[showRes,setShowRes]=useState(false);
  const[showEnterPrise,setShowEnterPrise]=useState(false);
  const[showOperator,setShowOperator]=useState(false);
  const[showCarrier,setShowCarrier]=useState(false);
  const[showTech,setShowTech]=useState(false);
  
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 740) setNav(true);
    });
  });

  return (
    <div className="w-screen top-0 fixed  z-50 ">
      {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer=""></script> */}
      <div className="navbar shadow-lg w-full px-14 md:px-0 justify-between text-black">
        <div className="hidden md:flex md:justify-around w-full text-black">
          {/* Your content goes here */}
          <Link className="py-7" to="/About">
            <p>About Us</p>
          </Link>

          <Link
            className="dropdown-link py-7 px-3 hidden md:block "
            to="/Services"
          >
            <p className="flex droptext relative ">
              Services
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <div className="dropdown hidden absolute p-12 pr-3 text-lg bg-[#afd3e2]  rounded-lg">
                <ul className="">
                  <li className="flex gap-10">
                    <div className="horizontalLine relative pe-4">
                      <h1 className="text-[#146c94] text-xl font-bold hover:text-white">
                        <Link to="/Enterprise">Enterprise</Link>
                      </h1>
                      <ul>
                        <li className="hover:text-white">
                          <Link to="/WA">WA for buisness</Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="/A2P">A2P SMS</Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="/Voice">Voice</Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="/Cpas">CPaaS</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="horizontalLine relative pe-4">
                      <h1 className="text-[#146c94] text-xl font-bold hover:text-white">
                        <Link to="/Operator">Operator</Link>
                      </h1>
                      <ul>
                        <li className="hover:text-white">
                          <Link to="/A2P">A2P SMS</Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="/Managehubs">
                            Manage Services for messaging Hubs
                          </Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="/Manageit">
                            Managed Services for IT & Infra
                          </Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="/Smsc">SMSC Firewall</Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="/Cr">CR in Existing SMSC</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="horizontalLine relative pe-4">
                      <h1 className="text-[#146c94] text-xl font-bold hover:text-white">
                        <Link to="/Carrier">Carrier</Link>
                      </h1>
                      <ul>
                        <li className="hover:text-white">
                          <Link to="/A2P">A2P SMS</Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="/Hlr">HLR</Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="Esim">eSIM</Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="/Vn">VN</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="relative pe-4">
                      <h1 className="text-[#146c94] text-xl font-bold hover:text-white">
                        <Link to="/Technology">Technology</Link>
                      </h1>
                      <ul>
                        <li className="hover:text-white">
                          <Link to="/Cloudskool">CloudSkool++</Link>
                        </li>
                        <li className="hover:text-white">
                          <Link to="/Cpas">CPaaS Platform</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </p>
          </Link>

          {/* Add more content as needed */}
        </div>
        <div className="logo p-5">
          {/* Your logo component or image goes here */}
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="p-5 text-black justify-around w-full hidden md:flex">
          <div className="dropdown-link py-7 px-3 hidden md:block hover:text-orange-400">
            <p className="flex droptext relative">
              Resources
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <div className="dropdown hidden absolute hover:block rounded-lg p-8 w-12 text-md bg-[#afd3e2]">
                <ul>
                  <li className="hover:text-white py-2  block ">
                    <Link to="/Carrers">Carrers</Link>
                  </li>
                  <li className="hover:text-white   py-2 block">
                    <Link to="/Blogs">Blogs</Link>
                  </li>
                  {/* <li className="hover:text-white">
                    <Link to="/Events">Events</Link>
                  </li> */}
                </ul>
              </div>
            </p>
          </div>

          <Link to="/Contacts" className="py-7 hidden md:block">
            <p>Contact Us</p>
          </Link>
        </div>
        {/* <button className="">

        <AiOutlineMenu size={"20px"} className=" block md:hidden" />
        </button> */}
        <div onClick={handlenav} className="block hover:cursor-pointer lg:hidden">
          {!nav ? <></> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* -----------------------------------------------------------------mobile view ----------------------------------------------------------------------------- */}

      {/* <div className={!nav ? 'fixed left-0 top-0 w-[50%] border-r h-full border-r-gray-900  ease-in-out duration-500' : "fixed left-[-150%]"}>*/}
      <div
        className={
          !nav
            ?  "fixed left-0 top-0 w-[90%] border-r h-full  overflow-y-scroll border-r-gray-900 bg-white ease-in-out duration-500 "
            : "fixed left-[-150%]"
        }
      >
        <div className="flex flex-row justify-between items-center pe-5">
          <Link to="/">
            <img
              src={Logo}
              alt="SMSCloud Hub"
              className="lg:cursor-pointer h-14 m-4 w-24"
            />
          </Link>
          <div onClick={handlenav} className=" hover:cursor-pointer block lg:hidden ">
            <AiOutlineClose size={20} />
          </div>
        </div>
        <ul className="lg:flex pt-24items-center gap-8 p-2 font-[Poppins]">
          <li className="border-b  border-gray-600">
            <Link
              to="/About"
              className="py-7 inline-block hover:text-orange-600"
            >
              About Us
            </Link>
          </li>
          <li className="border-b  border-gray-600 py-7">
            <Link
              className="dropdown-link py-7   md:block hover:text-orange-400"
              to="/Services" onClick={()=>setShowMenu(!showMenu)}
            >
              <p className="flex droptext relative">
                Services
                <svg className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24"    viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                         
              </p>
            </Link>
          </li>
          <div className={`relative ml-10 ${showMenu ? "block" : "hidden"}`}>
                  <li className="border-b  border-gray-600">
                    <Link
                      to="/Enterprise"
                      className="py-7 dropdown-link inline-block hover:text-orange-600"
                      onClick={()=>setShowEnterPrise(!showEnterPrise)}
                   >
                    <p className="flex">
                       Enterprise
                       <svg className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24"    viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                     </p>  
                    </Link>
                  </li>
                  <div className={`relative ml-14 ${showEnterPrise ? "block" : "hidden"}`}>
                  <li className="border-b relative  border-gray-600">
                  <Link to="/WA" className="py-7  inline-block hover:text-orange-600">
                  WA for Buisness
                  </Link>
                 </li>
                 <li className="border-b  border-gray-600">
                  <Link to="/A2P" className="py-7  inline-block hover:text-orange-600">
                  A2P SMS
                  </Link>
                 </li>
                 <li className="border-b  border-gray-600">
                  <Link to="/Voice" className="py-7  inline-block hover:text-orange-600">
                  Voice
                  </Link>
                 </li>
                 <li className="border-b  border-gray-600">
                  <Link to="/WA" className="py-7  inline-block hover:text-orange-600">
                  CPaas
                  </Link>
                 </li>
                  </div>
                  <li className="border-b  border-gray-600">
                    <Link
                      to="/Carrers"
                      className="py-7 inline-block dropdown-link hover:text-orange-600"
                      onClick={()=>setShowOperator(!showOperator)} 
                  >
                     <p className="flex droptext relative">

                      Operator
                      <svg className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24"    viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                     
                     </p>
                    </Link>
                  </li>
                  <div className={`relative ml-14 ${showOperator ? "block" : "hidden"}`}>
                  <li className="border-b border-gray-600">
                          <Link to="/A2P"     className="py-7 inline-block hover:text-orange-600">A2P SMS</Link>
                   </li>
                        <li className="border-b border-gray-600">
                          <Link to="/Managehubs"   className="py-7 inline-block hover:text-orange-600"
                  >
                            Manage Services for messaging Hubs
                          </Link>
                        </li>
                        <li className="border-b border-gray-600">
                          <Link to="/Manageit"   className="py-7 inline-block hover:text-orange-600"
                  >
                            Managed Services for IT & Infra
                          </Link>
                        </li>
                        <li className="border-b border-gray-600">
                          <Link to="/Smsc"   className="py-7 inline-block hover:text-orange-600"
                  >SMSC Firewall</Link>
                        </li>
                        <li className="border-b border-gray-600">
                          <Link to="/Cr"   className="py-7 inline-block hover:text-orange-600"
                   >CR in Existing SMSC</Link>
                        </li>
                  </div>
                  <li className="border-b  border-gray-600">
                    <Link
                      to="/Carrier"
                      className="py-7  dropdown-link inline-block hover:text-orange-600"
                      onClick={()=>setShowCarrier(!showCarrier)}  
                    >
                      <p className="flex droptext relative"> Carrier
                      <svg className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24"    viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                          
                      </p>
                    </Link>
                  </li>
                  <div className={`relative ml-14 ${showCarrier ? "block" : "hidden"}`}>
                  <li className="border-b  border-gray-600">
                          <Link to="/A2P"   className="py-7  inline-block hover:text-orange-600"
                   >A2P SMS</Link>
                        </li>
                        <li className="border-b  border-gray-600">
                          <Link to="/Hlr"   className="py-7  inline-block hover:text-orange-600"
                   >HLR</Link>
                        </li>
                        <li className="border-b  border-gray-600">
                          <Link to="Esim"   className="py-7  inline-block hover:text-orange-600"
                   >eSIM</Link>
                        </li>
                        <li className="border-b  border-gray-600">
                          <Link to="/Vn"   className="py-7  inline-block hover:text-orange-600"
                   >VN</Link>
                        </li>
                  </div>
                  <li className="border-b  border-gray-600">
                    <Link
                      to="/Technology"
                      className="py-7 dropdown-link  inline-block hover:text-orange-600"
                      onClick={()=>setShowTech(!showTech)} >
                      <p className="flex droptext relative">Technology
                      <svg className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24"    viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      </p>
                    </Link>
                  </li>
                    <div className={`relative ml-14 ${showTech ? "block" : "hidden"}`}>
                    <li className="border-b  border-gray-600">
                          <Link to="/Cloudskool" className="py-7  inline-block hover:text-orange-600">CloudSkool++</Link>
                        </li>
                        <li className="border-b  border-gray-600">
                          <Link to="/Cpas"     className="py-7  inline-block hover:text-orange-600">CPaaS Platform</Link>
                        </li>
                    </div>
                </div>
          <li className="border-b  border-gray-600">
            <div className="dropdown-link py-7 md:block hover:text-orange-400">
              <p className="flex droptext relative" onClick={()=>setShowRes(!showRes)}>
                Resources
                <svg className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24"    viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                     
              </p>
            </div>
          </li>
          <div className={`relative ml-10 ${showRes ? "block" : "hidden"}`}>
            <li className="border-b  border-gray-600">
              <Link
                to="/Carrers"
                className="py-7  inline-block hover:text-orange-600"
              >
                Carrers
              </Link>
            </li>
            <li className="border-b  border-gray-600">
              <Link
                to="/Events"
                className="py-7 inline-block hover:text-orange-600"
              >
                Events
              </Link>
            </li>

            <li className="border-b  border-gray-600">
              <Link
                to="/Blogs"
                className="py-7 inline-block hover:text-orange-600"
              >
                Blogs
              </Link>
            </li>
          </div>
          <li className="border-b  border-gray-600">
            <Link
              to="/Contacts"
              className="py-7 inline-block hover:text-orange-600"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
    //  </div>
  );
}

export default Navbar;
