import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/rickandmorty')}>Rick And Morty</button>
      <button onClick={()=>navigate('/todo')}>Drag & Drop to-do</button>
    </div>
  )
}

export default Home
