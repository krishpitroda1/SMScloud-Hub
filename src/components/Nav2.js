import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/SMSCH_Transparent-removebg-preview.png'
function Nav2() {
  return (
    <div>
         {/* <nav className="nav">
        <Link to="/" className="title">
          smsCloud
        </Link>
        <ul className="ul">
          <Link to="/Resources" className="menuTrigger">
            Resources
          </Link>
          <div className="dropdown">
            <Link to="/Blogs">blogs</Link>

            <Link to="/Test">test</Link>

            <Link to="/Stories">stories</Link>

            <Link to="/Apidoc">api documents</Link>
          </div>
          <Link to="/Products">Products</Link>
          <Link to="/Carrier">Carrier</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Contacts">contact Us</Link>
        </ul> 
       <div className='dropdown-menu'>
        <ul>
            <DropdownItem text={"blogs"}/>
            <DropdownItem text={"tests"}/>
            <DropdownItem text={"stories"}/>
            <DropdownItem text={"api documents"}/>

        </ul>
      </div> 
       </nav>  */}

      <nav className="bg-red-200">
        <div className="flex items-center font-medium justify-around">
          <div>
            <Link className="" to="/">
              <img
                src={Logo}
                alt="SMSCloud Hub"
                className="md:cursor-pointer h-14 w-24"
              />
            </Link>
          </div>
          <ul className="md:flex  items-center gap-8 font-[Poppins]">
            <li>
              <Link to="/About" className="py-7 px-3 inline-block">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Services" className="dropdown-link py-7 px-3 inline-block hover:block">
                Services
              </Link>
              <div className="dropdown hidden absolute p-12 pr-3 text-lg bg-slate-400">
                <ul>
                  <li className="flex gap-10">
                    <div className="horizontalLine relative pe-4">
                     <h1 className="text-emerald-200">Enterprise</h1>
                      <ul>
                        <li>WA for buisness</li>
                        <li>A2P SMS</li>
                        <li>Voice</li>
                        <li>CPaaS</li>
                      </ul>
                    </div>
                    <div className="horizontalLine relative pe-4">
                      <h1 className="text-emerald-200">
                        Operator
                        </h1>
                      <ul>
                        <li>A2P SMS</li>
                        <li>Manage Services for messaging Hubs</li>
                        <li>Managed Services for IT & Infra</li>
                        <li>SMSC Firewall</li>
                        <li>CR in Existing SMSC</li>
                      </ul>
                    </div>
                    <div className="horizontalLine relative pe-4">
                      <h1 className="text-emerald-200">       
                        Carrier
                        </h1>
                      <ul>
                        <li>A2P SMS</li>
                        <li>HLR</li>
                        <li>eSIM</li>
                        <li>VN</li>
                        Messagin Platform
                      </ul>
                    </div>
                    <div className="relative pe-4">
                      <h1 className="text-emerald-200">
                      Technology
                      </h1>
                      <ul>
                        <li>CloudSkool++</li>
                        <li>CPaaS Platform</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/Segments" className="dropdown-link py-7 px-3 inline-block">
                Segments
              </Link>
              <div className="dropdown hidden absolute p-5 pr-3 hover:block cursor-pointer bg-slate-400 ">
                <ul>
                  <li>
                    Enterprice
                  </li>
                  <li>
                    Education
                  </li>
                  <li>
                    Operator
                  </li>
                  <li>
                    Carrier
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/Carrers" className="dropdown-link py-7 px-3 inline-block">
                Careers
              </Link>
              <div className="dropdown hidden absolute p-2 pr-3 hover:block  bg-slate-400">
               <ul>
                <li>
                  Openings
                </li>
                <li>
                  Life at SMSCloud Hub
                </li>
               </ul>
               </div> 
            </li>
            <li>
              <Link to="/Events" className="py-7 px-3 inline-block">
                Events
              </Link>
            </li>
            <li>
              <Link to="/Blogs" className="py-7 px-3 inline-block">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/Contacts" className="py-7 px-3 inline-block">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="md:block hidden">
            <button className="bg-sky-500 text-white rounded-full w-22 px-6 py-2">
              Login
            </button>
          </div>
          <ul></ul>
        </div>
      </nav>
    </div> 

  )
}

export default Nav2
