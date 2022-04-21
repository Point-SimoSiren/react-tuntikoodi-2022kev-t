import './App.css'

// Propsit otettu vastaan suoraan nimellä, jolloin propsit pitää olla aaltosulkeissa
const Viesti = ({sanoma, numero}) => {

  return (
    <>
        <p>{sanoma}</p>
        <p>10 x 10 = {numero}</p>
    </>
  )
}

export default Viesti


/*

const Viesti = (props) => (
   <p>{props.sanoma}</p>
  )

export default Viesti

*/