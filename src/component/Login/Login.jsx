// import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const heandlGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser)
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handalGoogleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <button onClick={heandlGoogleSignIn}>Login</button>
            <button onClick={handalGoogleSignOut}>Log Out</button>
            {user &&
                <div>
                    <h2>User {user.displayName}</h2>
                    <p>Email {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;