import React from 'react'
import Managehubs from './Managehubs'
import Manageit from './Manageit'
import Smsc from './Smsc'
import Cr from './Cr'
import A2P from './A2P'
function Operator() {
  return (
    <div>
      <A2P/>
      <Manageit/>
      <Managehubs/>
      <Smsc/>
      <Cr/>
    </div>
  )
}

export default Operator
