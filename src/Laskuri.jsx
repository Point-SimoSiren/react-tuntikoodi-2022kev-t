import './App.css'
import React, { useState } from 'react'

const Laskuri = () => {

const [luku, setLuku] = useState(0)

  return (
    <>
        <h2>Laskuri</h2>

        <h3>{luku}</h3>

        <button onClick={() => setLuku(luku + 1)}>+</button>
        
    </>
  )
}

export default Laskuri
