import React from 'react'
import axios from 'axios'

const App = () => {

  // Two ways to make API calls in React:
  // 1. Using the fetch API
  // 2. Using Axios library

  // 1. Using the fetch API
  async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // const dataJson = data.json(); // this will return Promise {<pending>} cause it is an asynchronous operation
    const dataJson = await data.json(); // this will return the actual data cause we are using await to wait for the Promise to resolve
    console.log('fetch methos:',dataJson);
  }

  // 2. Using Axios library
  async function fetchDataAxios() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Axios method:', data.data); // Axios automatically parses the JSON response, so we can access the data directly
  }


  return (
    // To call both functions together, we used arrow function 
    <button onClick={() => {fetchData(); fetchDataAxios();}}>BUTTON</button>
  )
}

export default App