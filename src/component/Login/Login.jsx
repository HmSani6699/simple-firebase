// // import React from 'react';
// import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
// import app from "../../firebase/firebase.init";
// import { useState } from "react";


// const Login = () => {


//     const [user, setUser] = useState(null)
//     const auth = getAuth(app);
//     const googleProvider = new GoogleAuthProvider();
//     const githubProvider = new GithubAuthProvider();

//     const heandlGoogleSignIn = () => {
//         signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 const loginUser = result.user;
//                 console.log(loginUser);
//                 setUser(loginUser)
//             })
//             .catch(error => {
//                 console.log('error', error.message);
//             })
//     }

//     const heandlGithubSignIn = () => {
//         signInWithPopup(auth, githubProvider)
//             .then(result => {
//                 const loginUser = result.user;
//                 setUser(loginUser)
//             })
//             .then(error => {
//                 console.log(error);
//             })
//     }

//     const handalGoogleSignOut = () => {
//         signOut(auth)
//             .then(result => {
//                 console.log(result);
//                 setUser(null)
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }
//     return (
//         <div>
//             {
//                 user ?
//                     <button onClick={handalGoogleSignOut}>Log Out</button> :
//                     <div>

//                         <button onClick={heandlGoogleSignIn}>Google Login</button>
//                         <button onClick={heandlGithubSignIn}>Github Login</button>
//                     </div>
//             }
//             {user &&
//                 <div>
//                     <h2>User {user.displayName}</h2>
//                     <p>Email {user.email}</p>
//                     <img src={user.photoURL} alt="" />
//                 </div>
//             }
//         </div>
//     );
// };

// export default Login;


import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const [user,setUser]=useState(null)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setUser(loggedUser)
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>GoogleLogin</button>
            {
                user&&
                <div>
                    <h2>User : {user.displayName}</h2>
                    <p>Email : {user.email}</p>
                    <p><small>ID : {user.uid}</small></p>
                    <img src={user.photoURL} alt="ami nai" />
                </div>
            }
        </div>
    );
};

export default Login;

