import React from 'react'

const RightCards = (props) => {
    console.log(props);
  return (
    <div className='h-full w-100 shrink-0 bg-pink-700 rounded-4xl relative overflow-hidden'>
        <img className='h-full w-full object-cover absolute' src={props.url} alt="" />
        <div className='h-full w-full px-10 py-10 absolute flex flex-col justify-between'>
            <h3 className='h-15 w-15 bg-white rounded-full left-0 top-0 flex justify-center items-center font-semibold text-2xl'>{props.id+1}</h3>
            <div>
                <p className='mb-2.5 text-white text-lg leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut iste suscipit nemo incidunt ex doloribus sequi voluptatibus dolorum vel ipsa!</p>
                <div className='flex justify-between'>
                    <button className='text-white px-15 py-2 bg-blue-700 rounded-full'>{props.status}</button>
                    <i className="ri-arrow-right-line text-white px-5 py-4 bg-blue-700 rounded-full"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCards