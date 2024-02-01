import React, { useState } from "react";
import Laptop from "../assets/laptop.jpg";
import img from "../assets/services.png";
import { Link } from "react-router-dom";
import WA from "./WA";
import img1 from "../assets/wa.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import img3 from "../assets/circle.png";
import Wap from "./Popup/Wap";
import A2p from "./Popup/A2p";
import Voicep from "./Popup/Voicep";
import Cpaasp from "./Popup/Cpaasp";
import Msp from "./Popup/Msp";
import Mitp from "./Popup/Mitp";
import Esimp from "./Popup/Esimp";
import Hlrp from "./Popup/Hlrp";
import Vnp from "./Popup/Vnp";
import Smscp from "./Popup/Smscp";
import Crp from "./Popup/Crp";
import Cloudp from "./Popup/Cloudp";
function Analytics() {
  // const [showWa, setshowWa] = useState(false);
  // Current Popup

  const [currentPopup, setCurrentPopup] = useState(<></>);

  // Which popup to render
  const setPopup = (popupName) => {
    switch (popupName) {
      case "Wap":
        setCurrentPopup(<Wap  getClick={getCloseClick} />);
        break;
      case "A2p":
        setCurrentPopup(<A2p getClick={getCloseClick} />);
        break;
      case "Voicep":
        setCurrentPopup(<Voicep getClick={getCloseClick} />);
        break;
      case "Cpaasp":
        setCurrentPopup(<Cpaasp getClick={getCloseClick} />);
        break;
      case "Crp":
        setCurrentPopup(<Crp getClick={getCloseClick} />);
        break;
      case "Hlrp":
        setCurrentPopup(<Hlrp getClick={getCloseClick} />);
        break;
      case "Smscp":
        setCurrentPopup(<Smscp getClick={getCloseClick} />);
        break;
      case "Vnp":
        setCurrentPopup(<Vnp getClick={getCloseClick} />);
        break;
      case "Mitp":
        setCurrentPopup(<Mitp getClick={getCloseClick} />);
        break;
      case "Msp":
        setCurrentPopup(<Msp getClick={getCloseClick} />);
        break;
      case "Crp":
        setCurrentPopup(<Crp getClick={getCloseClick} />);
        break;
      case "Esimp":
        setCurrentPopup(<Esimp getClick={getCloseClick} />);
        break;
      case "Smscp":
        setCurrentPopup(<Smscp getClick={getCloseClick} />);
        break;
      case "Cloudp":
        setCurrentPopup(<Cloudp getClick={getCloseClick} />);
        break;
      default:
      // code block
    }
  };

  const getCloseClick = (closeClicked) => {
    if (closeClicked) {
      console.log("Back: ", closeClicked);
      setCurrentPopup(<></>);
    }
  };

  return (
    <div>

    <div className="w-screen mb-24 pt-14 overflow-x-hidden grid gap-6 ">
      <h1 className="text-white w-screen text-center bg-sky-400 p-5 font-bold text-3xl">
        Our Services
      </h1>

      <div className="justify-between lg:pl-32 md:pl-0  md:flex mx-auto gap-6">
        <div className="flex-col gap-5 ">
          <ul className="list-disc text-red-400 text-lg p-5">
            <p className="text-sky-700 font-bold text-xl">EnterPrise</p>
            <div className="pl-9 lg:pl-9 md:pl-0 ">
              {/* className={`dropdown-link hover text-sky-400 hover:${()=>setshowWa(!show)}`} */}
              <li className=" hover:text-sky-400 hover:scale-110" onClick={() => setPopup("Wap")}>
                WA for Buisness
              </li>
              <li className="  hover:text-sky-400 hover:scale-110" onClick={() => setPopup("A2p")}>
                A2P SMS
              </li>
              <li className="  hover:text-sky-400 hover:scale-110" onClick={() => setPopup("Voicep")}>
                Voice
              </li>
              <li className=" hover:text-sky-400 hover:scale-110" onClick={() => setPopup("Cpaasp")}>
                CPaas
              </li>
              {currentPopup}
            </div>
          </ul>
          <ul className="list-disc text-red-400 text-lg p-5">
            <p className="text-sky-700 font-bold text-xl">Carrier</p>
            <div className="pl-9">
              <li className="hover:text-sky-400 hover:scale-110 " onClick={() => setPopup("A2p")} >
                A2P SMS
               </li>
              <li
                className="hover:text-sky-400 hover:scale-110" 
                onClick={() => setPopup("Hlrp")}>
                HLR
              </li>
              <li
                className="hover:text-sky-400 hover:scale-110 "
                onClick={() => setPopup("Esimp")}
              >
                ESIM
              </li>
              <li className="hover:text-sky-400 hover:scale-110 " onClick={() => setPopup("Vnp")}>
                VN
              </li>
             
             </div>
          </ul>
        </div>
        <div className="content-center pt-7 ">
          <img src={img} className="h-96 w-auto" alt="" />
        </div>
        <div className="flex-col gap-5">
          <div className="flex-col gap-5">
            <ul className="list-disc text-red-400 text-lg p-5">
              <p className="text-sky-700 font-bold text-xl">Operator</p>
              <div className="pl-9">
                <li
                  className="hover:text-sky-400 hover:scale-110"
                  onClick={() => setPopup("A2p")}
                >
                  A2P SMS
                </li>
                <li
                  className="hover:text-sky-400 hover:scale-110 "
                  onClick={() => setPopup("Msp")}>
                  Managed services for Messaging Hubs
                </li>

                <li
                  className="hover:text-sky-400 hover:scale-110 "
                  onClick={() => setPopup("Mitp")}   >
                  Managed services For IT & Infra
                </li>
                <li
                  className="hover:text-sky-400 hover:scale-110"
                  onClick={() => setPopup("Smscp")} >
                  SMSC Firewall
                </li>
                <li
                  className="hover:text-sky-400 hover:scale-110 "
                  onClick={() => setPopup("Crp")} >
                  CR in Existing SMSC
                </li>
              </div>
            </ul>

            <ul className="list-disc text-red-400 text-lg p-5">
              <p className="text-sky-700 font-bold text-xl">Technology</p>
              <div className="pl-9">
                <li
                  className="hover:text-sky-400 hover:scale-110 "
                  onClick={() => setPopup("Cloudp")} >
                  
                  Cloudskool++
                </li>
                <li
                  className="hover:text-sky-400 hover:scale-110 "
                  onClick={() => setPopup("Cpaasp")} >
                
                  CPaas
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      </div>
      {/* --------------------------------------------mobile view---------------------------------------- */}
      <div className="w-screen lg:hidden hidden bg-black mb-24 pt-14 overflow-x-hidden">
   <h1 className="text-white w-screen text-center bg-sky-400 p-5 font-bold text-3xl">
        Our Services
      </h1>

      <div className="justify-between pl-32 lg:pl-32 md:pl-4 md:grid-cols-1 mx-auto flex gap-6">
        <div className="flex-col gap-5">
          <ul className="list-disc text-red-400 text-lg p-5">
            <p className="text-sky-700 font-bold text-xl">EnterPrise</p>
            <div className="pl-9 ">
              {/* className={`dropdown-link hover text-sky-400 hover:${()=>setshowWa(!show)}`} */}
              <li className=" hover:text-sky-400 hover:scale-110" onClick={() => setPopup("Wap")}>
                WA for Buisness
              </li>
              <li className="  hover:text-sky-400 hover:scale-110" onClick={() => setPopup("A2p")}>
                A2P SMS
              </li>
              <li className="  hover:text-sky-400 hover:scale-110" onClick={() => setPopup("Voicep")}>
                Voice
              </li>
              <li className=" hover:text-sky-400 hover:scale-110" onClick={() => setPopup("Cpaasp")}>
                CPaas
              </li>
              {currentPopup}
            </div>
          </ul>
          <ul className="list-disc text-red-400 text-lg p-5">
            <p className="text-sky-700 font-bold text-xl">Carrier</p>
            <div className="pl-9">
              <li className="dropdown-link " onClick={() => setPopup("A2p")} >
                A2P SMS
               </li>
              <li
                className="dropdown-link "
                onClick={() => setPopup("Hlrp")}>
                HLR
              </li>
              <li
                className="dropdown-link "
                onClick={() => setPopup("Esimp")}
              >
                ESIM
              </li>
              <li className="dropdown-link " onClick={() => setPopup("Vnp")}>
                VN
              </li>
             
             </div>
          </ul>
        </div>
        <div className="content-center pt-7">
          <img src={img} className="h-96 w-auto" alt="" />
        </div>
        <div className="">
          <div className="flex-col gap-5">
            <ul className="list-disc text-red-400 text-lg p-5">
              <p className="text-sky-700 font-bold text-xl">Operator</p>
              <div className="pl-9">
                <li
                  className="dropdown-link "
                  onClick={() => setPopup("A2p")}
                >
                  A2P SMS
                </li>
                <li
                  className="dropdown-link "
                  onClick={() => setPopup("Msp")}>
                  Managed services for Messaging Hubs
                </li>

                <li
                  className="dropdown-link "
                  onClick={() => setPopup("Mitp")}   >
                  Managed services For IT & Infra
                </li>
                <li
                  className="dropdown-link "
                  onClick={() => setPopup("Smscp")} >
                  SMSC Firewall
                </li>
                <li
                  className="dropdown-link "
                  onClick={() => setPopup("Crp")} >
                  CR in Existing SMSC
                </li>
              </div>
            </ul>

            <ul className="list-disc text-red-400 text-lg p-5">
              <p className="text-sky-700 font-bold text-xl">Technology</p>
              <div className="pl-9">
                <li
                  className="dropdown-link "
                  onClick={() => setPopup("Cloudp")} >
                  
                  Cloudskool++
                </li>
                <li
                  className="dropdown-link "
                  onClick={() => setPopup("Cpaasp")} >
                
                  CPaas
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>  
    
    
    </div>
    </div>
   
    
  );
}

export default Analytics;
