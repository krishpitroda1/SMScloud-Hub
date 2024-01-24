import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/SMSCH_Transparent-removebg-preview.png";
import NavLinks from "./NavLinks";
import Buttons from "./Buttons";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidQuoteSingleLeft } from "react-icons/bi"
function Navbar2() {
  const [nav,setNav]=useState(true)
  const handlenav=()=>{
    setNav(!nav)
  }
  return (
    <div className="fixed top-0 w-full z-50">
       <nav className=" bg-[#f6f1f1]  w-screen flex justify-between items-center mx-auto">
      <div className="md:static absolute md:min-h-fit bg-[#f6f1f1] text-black min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center  px-5">
        <div className="md:static flex items-center font-medium justify-around lg:px-48">
          <div className="">
          <div className="">
            <Link className="" to="/">
              <img
                src={Logo}
                alt="SMSCloud Hub"
                className="md:cursor-pointer h-14 w-24"
              />
            </Link>
          </div>
        <ul className="md:flex-row flex flex-col md:items-center md:gap-[4vw] gap-8 font-[Poppins]">
        
            <li>
              <Link to="/About" className="py-3 px-2 inline-block  hover:text-orange-400">
                About Us
              </Link>
            </li>
            <li className="">
            
              <Link className="dropdown-link  py-7 px-3 inline-block hover:block  hover:text-orange-400" to='/Services'>
                Services
              </Link>
              <div className="dropdown hidden absolute p-12 pr-3 text-lg bg-[#afd3e2] rounded-lg">
                <ul>
                  <li className="flex gap-10">
                    <div className="horizontalLine relative pe-4">
                     <h1 className="text-[#146c94] hover:text-orange-400">
                      <Link to='/Enterprise'>
                      Enterprise
                      </Link>
                      </h1>
                      <ul>
                        <li className="hover:text-white">
                        <Link to='/WA'>WA for buisness</Link>  
                        </li>
                        <li className="hover:text-white">
                        <Link to="/A2P"> 
                        A2P SMS
                        </Link> 
                        </li>
                        <li className="hover:text-white">
                          <Link to="/Voice">
                          Voice
                          </Link>
                          </li>
                        <li className="hover:text-white">  
                          <Link to="/Cpas">
                          CPaaS 
                          </Link>

                        </li>
                      </ul>
                    </div>
                    <div className="horizontalLine relative pe-4">
                      <h1 className="text-[#146c94] hover:text-orange-400">
                     <Link to='/Operator'>
                        Operator
                     </Link>
                        </h1>
                      <ul>
                        <li className="hover:text-white">
                         <Link to='/A2P'>
                         
                         A2P SMS
                         </Link>  
                          </li>
                        <li className="hover:text-white">
                         <Link to='/Managehubs'>
                          Manage Services for messaging Hubs
                         </Link>
                          </li>
                        <li className="hover:text-white">
                          <Link to='/Manageit'>
                          Managed Services for IT & Infra
                          </Link>
                          </li>
                        <li className="hover:text-white">
                          <Link to='/Smsc'>
                          SMSC Firewall
                          </Link>
                          </li>
                        <li className="hover:text-white">
                          <Link to='/Cr'>
                          CR in Existing SMSC
                          </Link>
                          </li>
                      </ul>
                    </div>
                    <div className="horizontalLine relative pe-4">
                      <h1 className="text-[#146c94]  hover:text-orange-400">       
                      <Link to="/Carrier">
                        Carrier
                      </Link>
                        </h1>
                      <ul>
                        <li className="hover:text-white"> 
                        <Link to='/A2P'>
                          A2P SMS
                         </Link>
                         </li>
                        <li className="hover:text-white">
                          <Link to='/Hlr'>
                          HLR
                          </Link>
                          </li>
                        <li className="hover:text-white">
                          <Link to="Esim">
                          eSIM
                          </Link>
                          </li>
                        <li className="hover:text-white">
                        <Link to="/Vn">
                          VN
                        </Link>  
                        </li>
                
                    </ul>
                    </div>
                    <div className="relative pe-4">
                      <h1 className="text-[#146c94] hover:text-orange-400">
                      <Link to='/Technology'>
                      Technology
                      </Link>
                      </h1>
                      <ul>
                        <li className="hover:text-white">
                         <Link to="/Cloudskool">
                          CloudSkool++
                         </Link> 
                          </li>
                        <li className="hover:text-white">
                          <Link to='/Cpas'>
                          CPaaS Platform
                          </Link>
                          </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/Carrers" className="dropdown-link py-7 px-3 inline-block  hover:text-orange-400">
                Careers
              </Link>
              <div className="dropdown hidden absolute p-2 pr-3 hover:block rounded-lg  bg-slate-400">
               <ul>
                <li className="hover:text-white">
                  Openings
                </li>
                <li className="hover:text-white">
                  Life at SMSCloud Hub
                </li>
               </ul>
               </div> 
            </li>
            <li>
              <Link to="/Events" className="py-7 px-3 inline-block  hover:text-orange-400">
                Events
              </Link>
            </li>
            <li>
              <Link to="/Blogs" className="py-7 px-3 inline-block  hover:text-orange-400">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/Contacts" className=" inline-block  hover:text-orange-400">
                Contact Us
              </Link>
            </li>
          <div className="lg:p-6  flex items-center gap-6">
            <button className="bg-sky-500 text-white rounded-full w-22 px-6 py-2">
              Login
            </button>
            <AiOutlineMenu className="text-3xl  cursor-pointer md:hidden lg:hidden"/>
          </div>
          </ul>
        </div>
        </div>
        </div>
      </nav>
    </div> 
    
  );
}

export default Navbar2;
