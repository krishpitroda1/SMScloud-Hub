import React from "react";
import Logo from "../assets/SMSCH_Transparent-removebg-preview.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import { Link } from "react-router-dom";
function End() {
  return (
  
    <div className="footer-class absolute">
      <footer className="bg-gray-900 w-screen mb-0 pb-0">
        <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <div
                className="flex-none text-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                aria-label="Brand"
              >
                <img src={Logo} alt="SMSCloud Hub" />
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100 cursor-pointer">
                Services
              </h4>

              <div className="mt-3 grid space-y-3 ">
                <Link
                  className="inline-flex gap-x-2 text-gray-400 cursor-pointer hover:text-gray-200"
                  to="/Enterprise"
                >
                  Enterprise
                </Link>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 cursor-pointer hover:text-gray-200"
                  to="/Operator"
                >
                  Operator
                </Link>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 cursor-pointer hover:text-gray-200"
                  to="/Carrier"
                >
                  Carrier
                </Link>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 cursor-pointer hover:text-gray-200"
                  to="/Technology"
                >
                  Technology
                </Link>
              </div>
            </div>

            <div className="col-span-1">
              <h4
                className="font-semibold text-gray-100 cursor-pointer"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Company
              </h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                    to="/"
                  >
                    Home
                  </Link>
                </p>

                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                    to="/About"
                  >
                    About us
                  </Link>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                    to="/Blogs"
                  >
                    Blogs
                  </Link>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                    to="/Carrers"
                  >
                    Careers
                  </Link>{" "}
                  <span className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                    We're hiring
                  </span>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                    to="/Contacts"
                  >
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                    to="/Privacy"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-span-2">
              <h1 className="text-xl text-white cursor-pointer">Address</h1>
              <p className="inline-flex p-2  ps-0 gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer">
                6TH FLOOR, B-614, BLOCK-B, WORLD TRADE TOWER, OFF S.G
                ROAD,Ahmedabad, Gujarat,380058
              </p>
              <p className="inline-flex p-2 ps-0 gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer">
                (+91) 9924494266
              </p>
              <p className="p-2 ps-0 gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer">
                (+91) 9913439794
              </p>
              <p className="p-2 ps-0 gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer">
                info@smscloudhub.com
              </p>
            </div>
          </div>

          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400 cursor-text">
                ©All Rights Reserved by SMSCloud Hub.
              </p>
            </div>

            <div>
              <Link
                className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                to="https://m.facebook.com/smscloudhub?_rdr"
              >
                <FaFacebookSquare className="text-xl" />
              </Link>
              <Link
                className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                to="https://twitter.com/hub_sms?t=C2S_FCZlTT0OVUJxDgp-ug&s=09"
              >
                <FaXTwitter className="text-xl" />
              </Link>
              <Link
                className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                to="https://www.instagram.com/smscloudhub/?igshid=YmMyMTA2M2Y%3D"
              >
                <FaInstagram className="text-xl" />
              </Link>
              <Link
                className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                to="https://www.linkedin.com/company/smscloudhub/"
              >
                <FaLinkedin className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default End;
