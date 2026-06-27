import React, { useState } from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2';

const App = () => {
  const [list, setList] = useState([]);

  return (
    <div 
      className='bg-[#E0AC69]'
    >
      <Section1 list={list} setList={setList} />
      <Section2 cards={list} />
    </div>
  )
}

export default App