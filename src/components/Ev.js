import React ,{ useState ,useEffect} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from '../assets/Events/p1.jpg'
import p2 from '../assets/Events/p2.jpg'
import p3 from '../assets/Events/p3.jpg'
import p4 from '../assets/Events/p4.jpg'
import p5 from '../assets/Events/p5.jpg'
import p6 from '../assets/Events/p6.jpg'
// import p7 from '../assets/Events/p7.jpg'
import p13 from '../assets/Events/p13.png'
import p8 from '../assets/Events/p8.jpg'
import p9 from '../assets/Events/p9.jpg'
import p10 from '../assets/Events/p10.jpg'
import p11 from '../assets/Events/p11.jpg'
import p12 from '../assets/Events/p12.png'

function Ev() {
  const[color,setColor]=useState('blue')
  const toggleColor = () => {
    color === 'blue' ? setColor('red') : setColor('blue')
  }
  useEffect(() => {
    const timer = setInterval(toggleColor, 1000)
    return () => clearInterval(timer)
  }, [color])
    const data=[
      {
        id:"1",
        src:{p1}
      },
      {
        id:'2',
        src:'.src/assests/Events/p2.jpg'
      }
    ]
    const settings = {
    
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 200,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
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
    <div className='relative bg-gray-800 shadow-slate-800 shadow-md p-5  w-screen'>
  <h1 className={`text-${color}-600 p-5 font-bold transition-colors duration-500 ease-in-out  hover:text-indigo-500 text-3xl  text-center pt-5 `}>Our Event Participations
    
    </h1>
     {/* <div className='carousel'> */}
      <div className='w-3/4 m-auto p-5'>
      <div className='p-5 '>
       <Slider {...settings}>
          <div className='p-3  rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p1} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3  rounded-xl'>
           <div className='flex justify-center items-center'>
              <img src={p2} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3  rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p3} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p4} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3  rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p5} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p6} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p8} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p9} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p10} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p11} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
    
 
       </Slider>
      </div> 

    </div>
      {/* </div> */}
    </div>
  )
}

export default Ev
