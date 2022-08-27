import React from 'react'

const Restart = () => {
  return (
    <div className='restart'>
        <h3 className='restart-title'>
            restart game??
        </h3>
        <div className='restart-btn'>
            <button className='btn' onClick>yes</button>
            <button className='btn bg-yellow shadow-yellow'>no</button>
        </div>
    </div>
  )
}

export default Restart