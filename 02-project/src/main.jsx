import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/Card.jsx'

var cards = [["https://plus.unsplash.com/premium_photo-1711217237364-827b31b57e92?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","Nature","Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
             ["https://images.unsplash.com/photo-1765873360315-b253774254eb?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","Cityscape","Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
             ["https://images.unsplash.com/photo-1619480782629-774eec5c1f06?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","Mountains","Ut enim ad minim veniam, quis nostrud ex ea commodo consequat."],
             ["https://images.unsplash.com/photo-1766946429232-ee5ad7f266be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","Ocean","Duis aute irure dolor in reprehenderit in eu fugiat nulla pariatur."]];

createRoot(document.getElementById('root')).render(
  
  // cards.map((card, index) => (
  //   <Card
  //     key={index}
  //     image={card[0]}
  //     name={card[1]}
  //     desc={card[2]}
  //   />
  // ))

  <div className="parent">
    {cards.map((card, index) => (
      <Card
        key={index}
        image={card[0]}
        name={card[1]}
        desc={card[2]}
      />
    ))}
  </div>

)
