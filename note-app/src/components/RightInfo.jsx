import React from 'react'
import { useState } from 'react'
import Section2 from './Section2'

const RightInfo = (props) => {

    const {list, setList} = props;

    const [title, setTitle] = useState('')
    const [para, setPara] = useState('')

    const updateList = (e) => {
        e.preventDefault();
        setList(prevList => [...prevList, { title: title, content: para }]);
        setTitle('');
        setPara('');
    }

  return (
    <div 
        className='h-full w-2/4 m-16 flex justify-center items-center'
    >
        <form onSubmit={(e) => {updateList(e)}}
            className='h-[600px] w-[500px] bg-[#efecba] rounded-4xl flex flex-col justify-center items-center gap-5'
        >
            <input className='h-[100px] w-[400px] bg-[#faf36d] p-5 rounded-4xl border focus:border-amber-500 focus:outline-none' type="text" placeholder='Enter title'
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
            />
            <textarea className='h-[300px] w-[400px] bg-[#faf36d] p-5 rounded-4xl border focus:border-amber-500 focus:outline-none' placeholder='Enter description'
                value={para}
                onChange={(e) => {setPara(e.target.value)}}
            />
            <button className='h-[80px] w-[400px] text-2xl font-bold rounded-4xl p-2.5 bg-amber-500 active:bg-[#efecba]' type="submit"                
            >SUBMIT</button>
        </form>
    </div>
  )
}

export default RightInfo