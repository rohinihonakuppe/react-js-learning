import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Components/Users'
import User from './Components/User'
import Student from './Components/Student'
function App() {
  const [count, setCount] = useState(0)
  // var num = 10;
  // var sty = {
  //   font : "bold",
  //   color : "red",
  //   fontSize : "20px"
  //}
  return (
    <>
      {/* <h1>Hello React</h1>
      <p>this is my root components</p>
      <p>{num > 0 ?"positive":"negative"}</p> */}
      <div className='App'>
        {/* Statefull components - class components */}
        {/* <Users name="Rohini Mali" age="29"></Users>
        <Users name="Ash Mali"></Users>
        <Users age="23"></Users> */}


        {/* Stateless components - function components */}

        {/* <User name="Adi H">34</User>
        <User name="Adiya H"></User>
        <User name="Adi Honakuppe">34</User> */}
          <Users></Users>
          <Student></Student>



      </div>
    </>
  )
}

export default App
