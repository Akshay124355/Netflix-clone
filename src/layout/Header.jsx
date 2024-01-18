import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../redux/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser(
                    {
                        uid: uid,
                        email: email,
                        displayName: displayName
                    }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
        // it will call the funtion when component unmount
        return () => unsubscribe();
    }, [])

    return (
        <div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-30'>
            <div>
                <img className='w-44' src={LOGO} alt="logo" />
            </div>
            {user && (
                <div>
                    <button
                        onClick={handleSignOut}
                        className='p-3 m-3 text-white bg-red-500 w-full font-bold rounded-lg'>
                        Sign Out</button>
                </div>
            )}
        </div>
    )
}

export default Header