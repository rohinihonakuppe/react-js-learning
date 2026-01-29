import React, { createContext, use, useState } from 'react';
import { useNavigate } from 'react-router-dom';

 export const UserContext = createContext();

export function UserProvider({ children }) {
    const [currentUser, setUser] = useState(sessionStorage.getItem('auth'));
    const navigate = useNavigate();

    const loginClick =(data)=>{
        sessionStorage.setItem('auth',data);
        setUser(data);
    }

    const logoutclick=()=>{
        setUser(null);
        sessionStorage.removeItem('auth');
        navigate('/Login');
    }

    return (<>


        <UserContext.Provider value={{ currentUser, loginClick, logoutclick }}>



            {children}
        </UserContext.Provider>



    </>)

}
