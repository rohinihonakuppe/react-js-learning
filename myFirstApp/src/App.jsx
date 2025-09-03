import { useState } from 'react'
import Databinding from '../Databinding.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h4> This is my first react peoject</h4>
     <Databinding></Databinding>
    </>
  )
}

export default App
