import React, { useState } from "react";
import { useRef } from "react";

function Databinding() {
   const fullName = "Rohini Mali";
   const addressref = useRef(null);
   const [name, setName] = useState("test"); // it is a hook which destructuring the things available in it.
   const clickedme = (e, msg) => {
      console.log("Button Clicked", e);
      e.target.innerText = "clicked"
      alert(`Button Clicked ${msg}`);
      setTimeout(() => {
         e.target.innerText = "click Me"
      }, 2000);

      addressref.current.value = "Pune";
      addressref.current.style.color = "blue";
   }
   const handlechange = (e) => {
      setName(prev => e.target.value);
   }

   return (
      <>
         <h3>Welcome In React</h3>
         <h1>My Name is {fullName} Started React Learning</h1>
         <button onClick={(e) => clickedme(e, `by ${fullName}`)}>Click Me</button>
         <div>
            Enter Name:<input type="text" onChange={(e) => handlechange(e)} />
            <b>{name}</b>
         </div>
         <div>
            Enter Address: <input type="text" ref={addressref} />
         </div>
      </>
   )
}

export default Databinding;