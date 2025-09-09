import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './Components/ProductList'  
import SearchProduct from './Components/SearchProduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <ProductList/> */}
        <SearchProduct/>
      </div>
    </>
  )
}

export default App
