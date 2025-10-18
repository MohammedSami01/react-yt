import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
   <div className='parent'>
    <Card user='Sami' age={21} img="https://images.unsplash.com/photo-1760497925596-a6462350c583?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"/>
    <Card user='Samay Raina' age={20} img="https://images.unsplash.com/photo-1760509684262-4501bacfdcc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"/>
    <Card user='Virat Kohli' age={18} img="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"/>

   </div>
    
   )
}

export default App