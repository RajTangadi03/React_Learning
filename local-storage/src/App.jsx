import React from 'react'


const App = () => {

  // use localStorage.clear to clear all data from localStorage
  localStorage.clear();

  // use localStorage.setItem to store a value for 'name' in localStorage
  localStorage.setItem('name', 'Anna');
  localStorage.setItem('age', '94');
  
  // use localStorage.getItem to retrieve the value of 'name' from localStorage
  const name = localStorage.getItem('name');
  const age = localStorage.getItem('age');
  console.log('name:',name);
  console.log('age:',age);

  // use localStorage.removeItem to remove the 'age' item from localStorage
  localStorage.removeItem('age');

  // to store the object in localStorage, we need to convert it to a string using JSON.stringify
  const user = {
    name: 'Anna',
    age: 94,
    city: 'New York'
  };
  localStorage.setItem('user', JSON.stringify(user));

  // to retrieve the object from localStorage, we need to parse it back to an object using JSON.parse
  const userFromStorage = JSON.parse(localStorage.getItem('user'));
  console.log('userFromStorage:', userFromStorage);


  return (
    <div>LOCAL-STORAGE</div>
  )
}

export default App