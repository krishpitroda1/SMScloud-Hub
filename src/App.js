import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
// import Resources from "./components/Resources";
import Blogs from "./components/Blogs";
import A2pblog from "./components/A2pblog";
// import Particles from "./components/Particle";
import Aiblog from "./components/Aiblog";
import Digitalblog from "./components/Digitalblog";
import Stories from "./components/Stories";
import Test from "./components/Test";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Smsc from "./components/Smsc";
import Privacy from "./components/Privacy";
import Services from "./components/Services";
import Carrers from "./components/Carrers";
import End from './components/End';
import WA from "./components/WA";
import A2P from "./components/A2P";
import Esim from "./components/Esim";
import Technology from "./components/Technology";
import Navbar2 from "./components/Navbar2";
import Hlr from "./components/Hlr";
import Error from "./components/Error";
import Cpas from "./components/Cpas";
import Cr from "./components/Cr";
import Jobs from "./components/Jobs";
import Life from "./components/Life";
import Voice from "./components/Voice";
import Manageit from "./components/Manageit";
import Operator from "./components/Operator";
import Vn from "./components/Vn";
// import Particles from "./components/Particle";
import Cloudskool from "./components/Cloudskool";
import Managehubs from "./components/Managehubs";
import { Route, Routes } from "react-router-dom";
import Nav3 from "./components/Nav3";
import Carrier from "./components/Carrier";
import Events from "./components/Events";
import Na3 from "./components/Na3";
import Analytics from "./components/Analytics";
import Enterprise from "./components/Enterprise";
// import Particles from "react-tsparticles";
 import { loadFull } from "tsparticles";
import { useCallback } from "react";
 import ParticleBackground from "./components/ParticlesBackground";


function App() {
  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);

  // }, []);
  // const options = {
  //   particles: {
  //     number: {
  //       value: 80,
  //       density: {
  //         enable: true,
  //         area: 800
  //       }
  //     },
  //     color: {
  //       value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
  //     },
  //     shape: {
  //       type: "circle"
  //     },
  //     opacity: {
  //       value: 1
  //     },
  //     size: {
  //       value: { min: 1, max: 8 }
  //     },
  //     links: {
  //       enable: true,
  //       distance: 150,
  //       color: "#808080",
  //       opacity: 0.4,
  //       width: 1
  //     },
  //     move: {
  //       enable: true,
  //       speed: 5,
  //       direction: "none",
  //       random: false,
  //       straight: false,
  //       outModes: "out"
  //     }
  //   },
  //   interactivity: {
  //     events: {
  //       onHover: {
  //         enable: true,
  //         mode: "grab"
  //       },
  //       onClick: {
  //         enable: true,
  //         mode: "push"
  //       }
  //     },
  //     modes: {
  //       grab: {
  //         distance: 140,
  //         links: {
  //           opacity: 1
  //         }
  //       },
  //       push: {
  //         quantity: 4
  //       }
  //     }
  //   }
  // };
  return (
    <div>
      <Navbar />
     <ParticleBackground/>
      <div className="container mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          {/* <Route path="/Products" element={<Products/>}></Route> */}
          {/* <Route path="/Resources" element={<Resources />} /> */}
          <Route path="/Carrier" element={<Carrier/>} />
          <Route path="/Test" element={<Test/>} />
          {/* <Route path="/Apidoc" element={<Apidoc/>} /> */}
          <Route path="/Stories" element={<Stories/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          <Route path="/Services" element={<Services/>}  />
          <Route path="/Carrers" element={<Carrers/>}/>
          <Route path="/A2P" element={<A2P/>}/> 
          <Route path="/WA" element={<WA/>} />
          <Route path="/Jobs" element={<Jobs/>} />
          <Route path="/Life" element={<Life/>} />
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Managehubs" element={<Managehubs/>}/>
          <Route path="/Manageit" element={<Manageit/>} />
          <Route path="/Voice" element={<Voice/>} />
          <Route path="/Hlr" element={<Hlr/>} />
          <Route path="/Technology" element={<Technology/>} />
          <Route path="/Aiblog" element={<Aiblog/>} />
          <Route path="/A2pblog" element={<A2pblog/>} />
          <Route path="/Digitalblog" element={<Digitalblog/>} />
          <Route path="/Privacy" element={<Privacy/>} />
          <Route path="/Smsc" element={<Smsc/>} />
          <Route path="/Esim" element={<Esim/>} />
          <Route path="/Cpas" element={<Cpas/>}/>
          <Route path="/Cr" element={<Cr/>}></Route>
          <Route path="/Vn" element={<Vn/>}/>
          <Route path="/Enterprise" element={<Enterprise/>}/>
          <Route path="/Operator" element={<Operator/>}/>
          <Route path="/Carrier" element={<Carrier/>}/>
          <Route path="/Cloudskool" element={<Cloudskool/>}/>
          <Route path="*" element={<Error/>} />
           </Routes>
      </div>
      <End className="absolute"/>
    </div>
  );
}

export default App;
