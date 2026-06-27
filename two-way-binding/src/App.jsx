import React from 'react'
import { useState } from 'react';

// In two way binding, we don't interact with dom directly
// insted we tell react to update dom by using hooks : such as useState, useEffect, etc

const App = () => {

  const [title, setTitle] = useState('')

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Hello,', title);
    setTitle('');
  }
  
  return (
    <div className='App'>
      <form 
        onSubmit={(e) => {
          submitForm(e)
        }}
      >
        {/* here we are telling react to update title by doing setTitle and setting value of input to title(useState) */}
        <input type="text" placeholder='Enter your Name' value={title} onChange={(e) => {setTitle(e.target.value)}} />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default App