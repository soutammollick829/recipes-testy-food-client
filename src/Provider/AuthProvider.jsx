/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/__firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})


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
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;