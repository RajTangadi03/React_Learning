import React from 'react'

// Form Handling in React
// this stoppend form from refreshing the page when we submit the form

const App = () => {

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }
  
  return (
    <div className='App'>
      <form onSubmit={(e) => {
        submitForm(e)
      }}>
        <input type="text" placeholder='Enter your Name' />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default App