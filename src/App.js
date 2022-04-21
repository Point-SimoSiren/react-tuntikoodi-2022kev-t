import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import React, {useState} from 'react'
import Posts from './Posts'

const App = () => {

  // App komponetin tila eli state
  const [showLaskuri, setShowLaskuri] = useState(false)

  const numero = 100

  return (
    <div className="App">
      <h1>Hello world</h1>

      {showLaskuri && <Laskuri />}

      {showLaskuri && <button onClick={() => setShowLaskuri(false)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setShowLaskuri(true)}>Näytä laskuri</button>}

      <Viesti sanoma="Tervehdys App komponentista." numero={numero} />

      <Posts />

    </div>
  )
}

export default App
