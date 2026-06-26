import React from 'react'
import RightCards from './RightCards'

const RightInfo = (props) => {
  return (
    <div className='h-full w-3/4 py-5 px-5 overflow-x-auto flex flex-nowrap gap-10'>
        {props.cards.map((card, index) => (
            <RightCards key={index} id={index} url={card.url} status={card.status} color={card.color} />
        ))}
    </div>
  )
}

export default RightInfo