import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Card username='Raj Tangadi' image='https://images.unsplash.com/photo-1767865654598-430f977d28f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    <Card username='Balaji Khavane' image='https://images.unsplash.com/photo-1553255703-e8aa3b757463?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    <Card username='Rahul Kirtane' image='https://images.unsplash.com/photo-1654541451035-8349558149ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    <Card username='Shreyash Desai' image='https://plus.unsplash.com/premium_photo-1748350571467-382e6238df0e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  </>,
)
