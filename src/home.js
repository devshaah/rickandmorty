import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='homepage'>
      <button onClick={()=>navigate('/rickandmorty')} className='homebtn'>Rick And Morty</button>
      <button onClick={()=>navigate('/todo')} className='homebtn'>Drag & Drop to-do</button>
    </div>
  )
}

export default Home
