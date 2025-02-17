import React from 'react'
import AComponent from './AComponent'

const BComponent = () => {
    const name = 'A component'
    const age = 25
  return (
    <div className='d-flex bg-dark text-light justify-content-center align-items-center vh-100 fw-bold fs-5 '>
       <AComponent props_name={name} props_age={age} />
        </div>
  )
}

export default BComponent