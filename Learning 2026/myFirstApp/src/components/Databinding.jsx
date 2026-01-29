import React, { useRef, useState } from 'react'
import '../index.css';
import { NavLink, Outlet } from 'react-router-dom';
function Databinding() {

    let name = "John Doe";
    const [firstName, setFirstName] = useState("John Smith") // State variable for two-way binding, useState hook is used to create state variables in functional components.
    const addressref = useRef(); // useRef hook is used to create a reference to a DOM element.
    const handelClick = (e) => {
        e.target.value = "Clicked";
        alert("Button Clicked");
        addressref.current.style.backgroundColor = "yellow";
        addressref.current.value = "123 Main St, Springfield";
        setTimeout(() => { e.target.value = "Click Me"; }, 2000);
    }

    const handleChange = (e) => {
        setFirstName(e.target.value);
    }

    const useEffect = (() => {
        // it is a hook that is exicuted when component is mounted or updated and it is executed everytime when shate or props is changed.
        console.log("Comphonent triggered");
    }, []);


    return (<>
        <h4>Name of Employee: {name} </h4>
        <input type="button" className='btn btn-primary' value="Click Me" onClick={(e) => handelClick(e)} />
        <div>
            Enter Name:<input type="text" value={firstName} onChange={(e) => handleChange(e)} />

            <h3>Your name is: {firstName}</h3>
        </div>
        <div>
            Address : <input type="text" ref={addressref} />
        </div>
        <hr />
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className="nav-link" to="personal">Personal</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="professional">Professional</NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
        </ul>
        <Outlet />
    </>)
}

export default Databinding;

//What is databinding in React?
//Databinding in React refers to the process of connecting the data in the component's state or props to the user interface (UI).
// React primarily uses one-way data binding, meaning that data flows from the parent component to the child component through props.
// When the state of a component changes, React automatically updates the UI to reflect those changes.
// This ensures that the UI is always in sync with the underlying data model.
//In addition to one-way data binding, React also allows for two-way data binding through controlled components, where the component's state is updated based on user input, and the UI reflects those changes. This is commonly used in forms where input fields are bound to state variables.