import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currUser)=>{
        console.log(currUser);
        setUser(currUser);
        setLoading(false);

    });
     
    return() =>{
        unsubscribe();
    };
    },[]);
    
    

   


    return <AuthContext value={authInfo}>{children}</AuthContext>
    
};

export default AuthProvider;