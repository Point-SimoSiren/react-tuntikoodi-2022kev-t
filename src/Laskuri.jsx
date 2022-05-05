import './App.css'
import React, { useState } from 'react'

const Laskuri = () => {

const [luku, setLuku] = useState(0)

  return (
    <>
        <h2>Laskuri</h2>

        <h3>{luku}</h3>

        <button onClick={() => setLuku(luku + 1)}>+</button>
        <button onClick={() => setLuku(luku - 1)}>-</button>
        <button onClick={() => setLuku(0)}>reset</button>
        
    </>
  )
}

export default Laskuri
