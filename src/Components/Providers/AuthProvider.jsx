import React, { Children, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import App from '../../App';
import app from '../../Fireebase/Firebase.config';

export const AuthContex = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const creatUser = (email, password) =>{
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        creatUser
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;