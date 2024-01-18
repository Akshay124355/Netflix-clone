import React, { useRef, useState } from 'react'
import Header from '../layout/Header'
import { validateData } from "../utils/validateData"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null)
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignin = () => {
    const message = validateData(email.current.value, password.current.value)
    setError(message);
    if (message) return;

    if (!isSignIn) {
      //Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser(
              {
                uid: uid,
                email: email,
                displayName: displayName
              }
            ));
          }).catch((error) => {
            setError(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage)
        });

    } else {
      //Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  }
  const handleToggle = () => {
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
      </div>

      <form onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute bg-black p-12 my-32 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold py-4 text-2xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input type="text"
            ref={name}
            placeholder='Full name'
            className='p-3 my-4 w-full bg-gray-700 border-none'
          />
        )}
        <input type="email"
          ref={email}
          placeholder='Email or phone number'
          className='p-3 my-4 w-full bg-gray-700 border-none'
        />
        <input type="password"
          ref={password}
          placeholder='Password'
          className='p-3 my-4 w-full bg-gray-700 border-none'
        />
        <p className='text-red-500'>{error}</p>

        <button className='p-3 my-5 bg-red-500 w-full font-bold rounded-lg'
          onClick={handleSignin}
        >{isSignIn ? "Sign In" : "Sign Up"}</button>

        <p className='text-gray-500'>
          {isSignIn ? (
            <span>
              New to Netflix?{" "}
              <span className='text-white cursor-pointer' onClick={handleToggle}>
                Sign up now.
              </span>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <span className='text-white cursor-pointer' onClick={handleToggle}>
                Sign in.
              </span>
            </span>
          )}
        </p>
      </form>
    </div >
  )
}

export default Login