import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import App from '../../App';
import app from '../../Fireebase/Firebase.config';

export const AuthContex = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState('')

    const creatUser = (email, password) =>{
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    const logUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect( ()=>{
        const unsubsCribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return () =>{
            return unsubsCribe
        }
    },[])

    const authInfo = {
        user,
        creatUser,
        logUser,
        logOut
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;