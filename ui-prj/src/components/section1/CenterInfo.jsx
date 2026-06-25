import React from 'react'
import LeftInfo from './LeftInfo'
import RightInfo from './RightInfo'

const CenterInfo = (props) => {
  return (
    <div className='h-[85vh] flex items-center justify-between gap-30 px-8 py-2 m-5 pt-10'>
        <LeftInfo />
        <RightInfo cards={props.cards} />
    </div>
  )
}

export default CenterInfo