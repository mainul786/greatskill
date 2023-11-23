import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
    
    const [user, setUser] = useState();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const authInfo = { user, createUser, logIn, googleLogin };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;