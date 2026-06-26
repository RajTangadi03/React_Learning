import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const arr = [
    {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'Satisfied',
      color: 'royalblue'
    },
    {
      url: 'https://images.unsplash.com/photo-1733348137613-90f1af8674fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'Underserved',
      color: 'lightcoral'
    },
    {
      url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'Unbanked',
      color: 'lightgreen'
    },
    {
      url: 'https://images.unsplash.com/photo-1734365294963-743f3ed421c1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'Underbanked',
      color: 'orange'
    },
  ]

  return (
    <div>
      <Section1 cards={arr} />
      <Section2 />
    </div>
  )
}

export default App