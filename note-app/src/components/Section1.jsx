import React from 'react'
import NavBar from './NavBar'
import CenterInfo from './CenterInfo'

const Section1 = (props) => {
  return (
    <div className='bg-[#E0AC69] h-screen w-full flex flex-col'>
        <NavBar />
        <CenterInfo list={props.list} setList={props.setList} />
    </div>
  )
}

export default Section1