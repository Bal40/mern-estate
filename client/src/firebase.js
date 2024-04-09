// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6a289.firebaseapp.com",
  projectId: "mern-estate-6a289",
  storageBucket: "mern-estate-6a289.appspot.com",
  messagingSenderId: "876535292519",
  appId: "1:876535292519:web:b7841d94b116b3521d2ac2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);