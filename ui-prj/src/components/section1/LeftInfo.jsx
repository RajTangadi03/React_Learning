import React from 'react'
import HeroInfo from './HeroInfo'

const LeftInfo = () => {
  return (
    <div className='h-1/1 w-1/4 px-3.5 py-2 flex flex-col justify-between'>
        <HeroInfo />
        <div><i className="ri-arrow-right-up-line text-8xl"></i></div>
    </div>
  )
}

export default LeftInfo