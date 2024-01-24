import React from 'react'
import Enterprise from './Enterprise'
import Operator from './Operator'
import Technology from './Technology'
import Carrier from './Carrier'
import End from './End'
function Services() {
  return (
    <div className='relative'>
      <Enterprise className=''/>
      <Operator/>
      <Technology/>
      <Carrier/>
      {/* <End/> */}
    </div>
  )
}

export default Services
