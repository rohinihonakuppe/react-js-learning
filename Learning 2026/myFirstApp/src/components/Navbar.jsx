import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

const Navbar = () => {
    const {currentUser, logoutclick} = useContext(UserContext);
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {currentUser !== null ? 
                        <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/databinding">Databinding</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/search">Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/Uncontrolled">Uncontrolled</NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink className='nav-link' to="/Controlled">Controlled</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/FormikForm">FormikForm</NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink className='nav-link' to="/Login">Sign in</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink className='nav-link' to="/Product">Product List</NavLink></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li>
                            <h3>welcome {currentUser}</h3>
                            <a className='nav-link' onClick={logoutclick}>Logout</a>
                        </li>
                        </> 
                        : <li className="nav-item">
                            <NavLink className='nav-link' to="/Login">Login</NavLink>
                        </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    </>)
}

export default Navbar;