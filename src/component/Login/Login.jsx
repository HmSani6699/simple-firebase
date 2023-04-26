// import React from 'react';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
    const auth=getAuth(app);
    const provider= new GoogleAuthProvider()
    return (
        <div>
            <button>Login</button>
        </div>
    );
};

export default Login;