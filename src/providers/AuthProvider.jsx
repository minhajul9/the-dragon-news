import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            // console.log(loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const authInfo = {
        user, 
        createUser, 
        signIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;