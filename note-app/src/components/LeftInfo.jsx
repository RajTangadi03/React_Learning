import React from 'react'

const LeftInfo = () => {

  return (
    <div className='h-full w-1/4 p-10 m-10 flex flex-col justify-between'>
        <h1
            className='font-bold text-[150px] leading-36 pt-20'
        >
            <span className='text-black hover:text-[#FFFDD0]'>Let's</span><br/>
            <span className='text-black hover:text-[#FFFDD0]'>Create</span><br/>
            <span className='text-black hover:text-[#FFFDD0]'>Notes</span>
        </h1>
        <i className="ri-arrow-right-up-line text-[100px] text-[#FFFDD0]"></i>
    </div>
  )
}

export default LeftInfo