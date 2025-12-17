import React from 'react';
import { AuthContext } from './AuthContext';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const authInfo = {
        user,
        setUser,
    }

    onAuthStateChanged(auth, (currUser)=>{
        console.log(currUser);
        setUser(currUser);

    });


    return <AuthContext value={authInfo}>{children}</AuthContext>
    
};

export default AuthProvider;