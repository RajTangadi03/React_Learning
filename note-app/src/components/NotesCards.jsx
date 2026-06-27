import React from 'react'

const NotesCards = (props) => {
  return (
    <div className='bg-[#E0AC69] w-[300px] h-[200px] m-4 rounded-lg shadow-lg p-4 overflow-x-auto overflow-y-auto'>
        <h2 className='text-2xl font-bold mb-2 border-b-2 border-amber-500'>{props.title}</h2>
        <p className='text-gray-700'>{props.content}</p>
    </div>
  )
}

export default NotesCards