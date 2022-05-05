import './App.css'
import React, {useState, useEffect} from 'react'
import CustomerService from './services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'

const CustomerList = ({setShowMessage, setMessage, setIsPositive}) => {

  // Customers komponetin tila eli state
  const [customers, setCustomers] = useState([])
  const [showCustomers, setShowCustomers] = useState(false)
  const [lisäystila, setLisäystila] = useState(false)
  // Tätä käytetään asiakastietojen lataamiseen uudelleen
  const [reload, reloadNow] = useState(false)

  useEffect(() => {
   CustomerService.getAll()
   .then(data => setCustomers(data))
  }
    , [reload]
    )

  return (
        <>

              <h1><nobr style={{ cursor: 'pointer' }}
                onClick={() => setShowCustomers(!showCustomers)}>Customers</nobr>

                {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h1>

       {lisäystila && <CustomerAdd setLisäystila={setLisäystila} reloadNow={reloadNow} reload={reload}
       setShowMessage={setShowMessage} setMessage={setMessage} setIsPositive={setIsPositive} /> }

        {customers && showCustomers && customers.map(cust =>
            <Customer key={cust.customerId} customer={cust} reloadNow={reloadNow} reload={reload}
            setShowMessage={setShowMessage} setMessage={setMessage} setIsPositive={setIsPositive} />
        )
        }
   
        </>
  )
}

export default CustomerList