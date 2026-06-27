import React from 'react'
import LeftInfo from './LeftInfo'
import RightInfo from './RightInfo'

const CenterInfo = (props) => {
  return (
    <div
        className='flex-1 flex justify-around items-center bg-amber-500'
    >
      <LeftInfo />
      <RightInfo list={props.list} setList={props.setList} />
    </div>
  )
}

export default CenterInfo