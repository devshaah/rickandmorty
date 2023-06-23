import React from 'react'
import '../style.css'

const Info = ({char}) => {
    console.log(char)
  return (
    <div className='page'>
    <div className='infopage'>
      <img src={char.image} className='infoimg'/>
      <div className='details'>
      <h1>Name: {char.name}</h1>
      <h3>{char.species} - {char.status}</h3>
      <h3>No of episode : {char.episode.length}</h3>
      </div>
    </div>
    </div>
  )
}

export default Info
