import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import React, {useState} from 'react'
import Posts from './Posts'
import CustomerList from './CustomerList'
import Message from './Message'

const App = () => {

  // App komponetin tila eli state
  const [showLaskuri, setShowLaskuri] = useState(false)
  // Statet messagen näyttämistä varten
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')
  const [isPositive, setIsPositive] = useState(false)

  const numero = 100

  return (
    <div className="App">
      <h1>Northwind Traders</h1>

      {showMessage && <Message message={message} isPositive={isPositive} />}

      <CustomerList setShowMessage={setShowMessage} setMessage={setMessage} setIsPositive={setIsPositive} />

      {showLaskuri && <Laskuri />}

      {showLaskuri && <button onClick={() => setShowLaskuri(false)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setShowLaskuri(true)}>Näytä laskuri</button>}

      <Viesti sanoma="Tervehdys App komponentista." numero={numero} />

      <Posts />

    </div>
  )
}

export default App
