import React from 'react'
import { Link } from 'react-router-dom';
// import JobDummyData from '../../JobDummyData';

function JobCard(props) {
//   const skills=[
//    'Communication','MS PowerPoint','MS Excel' 
//   ]
  const dayjs = require('dayjs');
  const date1=dayjs(Date.now());
  const diffDays=date1.diff(props.postedOn,'day')
  
  return (
    <div className='mx-40 mb-4 w-[85%] '>
      <div className='flex justify-between items-center px-6 py-7 bg-white text-black hover:bg-[#008080] rounded-md   border-black  border-2 shadow-lg hover:border-blue-500 hover:border-2 hover:translate-y-1 hover:scale-103 hover:cursor-pointer'>
        <div className=' flex-col lg:flex-col flex md:flex-row  items-start gap-3'>
             <h1 className='font-lg font-semibold'>{props.title}</h1>
            <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
            <div className=' flex-col lg:flex  md:flex-row items-center gap-2'>
                {props.skills.map((skill) =>(
                    <p className='flex-gary-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                ))}
            </div>
        </div>
        <div className='flex items-center gap-4'>   
            {/* <p className='text-gray-500'>Posted {diffDays} days ago</p> */}
          <Link to='https://forms.gle/NeyZ37EBj9yvJt6Q8'> 
            <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'>Apply</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JobCard
