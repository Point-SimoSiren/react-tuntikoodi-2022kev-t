import './App.css'
import React, {useState} from 'react'
import CustomerService from './services/Customer'

// Propsit otetaan vastaan nimellä
const Customer = ({customer, setShowMessage, setMessage, setIsPositive, reloadNow, reload}) => {

  const [showDetails, setShowDetails] = useState(false)

  const deleteCustomer = (customer) => {
    let vastaus = window.confirm(`Remove Customer ${customer.companyName}`)

    if (vastaus === true) {
    CustomerService.remove(customer.customerId)
    .then(res => {
        if (res.status === 200) {
        setMessage(res.data)
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)

        // Ilmoituksen piilotus
        setTimeout(() => {
        setShowMessage(false)},
        5000
        )
        reloadNow(!reload)
        }
        
            }
        )
        .catch(error => {
            setMessage(error.response.data)
            setIsPositive(false)
            setShowMessage(true)
            window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)
    
            setTimeout(() => {
              setShowMessage(false)
             }, 6000)
          })

    } // Jos poisto halutaankin perua
    else {
    setMessage('Poisto peruttu onnistuneesti.')
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)

        // Ilmoituksen piilotus
        setTimeout(() => {
        setShowMessage(false)},
        5000
        )
    }
}


  return (
    <div className='customerDiv'>
            <h4 onClick={() => setShowDetails(!showDetails)}>
            {customer.companyName} from {customer.country}</h4>

            {
                showDetails && 
                <div className="customerDetails">
                    <h5>{customer.companyName}</h5>
                    <button onClick={() => deleteCustomer(customer)}>Delete</button>
                    <button>Edit</button>
                    <table>
                        <thead>
                            <tr>
                                <td>Contact person</td>
                                <td>City</td>
                                <td>Address</td>
                                <td>Phone</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{customer.contactName}</td>
                                <td>{customer.city}</td>
                                <td>{customer.address}</td>
                                <td>{customer.phone}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            }

        </div>
  )

}

export default Customer