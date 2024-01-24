import React from 'react'

function Buttons() {
  return (
    <div>
      <button className='button bg-primary text-white px-6 py-2 rounded-full'>
        Login
      </button>
      <input type="submit" className='bg-red' style={{'backgroundColor':'red'}}/>
    </div>
  )
}

export default Buttons
