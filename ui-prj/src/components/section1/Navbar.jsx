import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-16 py-8 items-center justify-between'>
        <h4 className='uppercase px-8 py-2 rounded-full bg-black text-white'>target audience</h4>
        <button className='uppercase px-8 py-2 rounded-full bg-gray-200 text-black tracking-wide text-sm'>Digital banking platform</button>
    </div>
  )
}

export default Navbar