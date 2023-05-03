/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/__firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    const handelSignIn = () =>{
        signInWithPopup(auth, provider)
        
    }


    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword (auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(loggedInUser)=>{
            setUser(loggedInUser)
        });
        return ()=>{
            unSubscribe();
        };
    },[])

    const authInfo ={
        user,
        createUser,
        logOut,
        loginUser,
        handelSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;