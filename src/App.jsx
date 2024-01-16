import './App.css'
import app from './firebase.init'
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";
import { useState } from 'react';





const auth = getAuth(app);


function App() {
  
  const [user, setUser] = useState({});

  // authentication wirh google---------------------------------------------------------
  const googleProvider = new GoogleAuthProvider();
  const handelelogin = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      console.log(result.user)
      setUser(result.user);
    })
    .catch(error =>{
      console.error("error", error)
    })
  }


  // Authentication with GitHub-------------------------------------------------------------------
  const gitHubProvider = new GithubAuthProvider();

  const handeleloginGit = ()=>{
    signInWithPopup(auth, gitHubProvider)
    .then(result =>{
      console.log(result.user)
      setUser(result.user);
    })
    .catch(error =>{
      console.error("error", error)
    })
  }

  // signout hendle----goto signIn page----------------------------------------------
  const goToSignIn = () =>{
    setUser({});
  }

  return (
    <>
      {
        user.uid ? 
        <div>
          <button onClick={goToSignIn}>Sign Out</button>
          <h3>Your Name  : {user.displayName}</h3>
        </div> :
        <div>
          <h2>Welcome to Akil Authentication site</h2>
          <button onClick={handelelogin}>Sign in with GOOGLE</button>
          <button onClick={handeleloginGit}>Sign in with GitHub</button>
        </div>
      }
      
      
    </>
  )
}

export default App
