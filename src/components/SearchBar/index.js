import React, { useState } from 'react'

function SearchBar(props) {
    const [jobCriteria,setJobCriteria]=useState({
        title:"",
        location:"",
        experience:"",
        type:""
    })
    const handleChange =(e)=>{
        setJobCriteria((prevstate)=>({
            ...prevstate,
            [e.target.name]:e.target.value
        }))
    }
    console.log(jobCriteria)
    const search=async()=>{
            await props.fetchJobsCustom(jobCriteria)
    }
  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
      <select onChange={handleChange} name='title' value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-400 font-bold rounded-md' >
      <option value="" disabled hidden selected>Job Role</option>
        <option value="Carrier Relationship Executive">Carrier Relationship Executive</option>
        <option value="Digital Marketing Executive">Digital Marketing Executive</option>
        <option value="Technical Support Executive">Technical Support Executive</option>
      </select>
      <select name='type' onChange={handleChange} value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-400 font-bold rounded-md'>
      <option value="" disabled hidden selected>Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Contract">Contract</option>
        <option value="Part Time">Part Time</option>
      </select>
      <select name='location'onChange={handleChange} value={jobCriteria.location}  className='w-64 py-3 pl-4 bg-zinc-400 font-bold rounded-md'>
      <option value="" disabled hidden selected>Location</option>
        <option value="Remote">Remote</option>
        <option value="In-offiec">In-office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select name='experience'onChange={handleChange} value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-400 font-bold rounded-md'>
      <option value="" disabled hidden selected>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="High Leval">High Leval</option>
        <option value="Mid Leval">Mid Leval</option>
        <option value="Senior Level">Senior Level</option>
      </select>
    <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar
