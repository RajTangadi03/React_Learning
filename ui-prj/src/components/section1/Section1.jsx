import React from 'react'
import Navbar from './Navbar'
import CenterInfo from './CenterInfo'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
        <Navbar />
        <CenterInfo cards={props.cards} />
    </div>
  )
}

export default Section1