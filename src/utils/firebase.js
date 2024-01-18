// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2G8L-95nX-lLplqe-h64T6mKkGQUtdNE",
  authDomain: "netflix-clone-e8b74.firebaseapp.com",
  projectId: "netflix-clone-e8b74",
  storageBucket: "netflix-clone-e8b74.appspot.com",
  messagingSenderId: "611943167040",
  appId: "1:611943167040:web:1264d10ffadae43d691ba5",
  measurementId: "G-BQ63E8Q7V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
