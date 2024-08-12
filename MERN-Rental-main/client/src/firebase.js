// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-999f4.firebaseapp.com",
  projectId: "mern-estate-999f4",
  storageBucket: "mern-estate-999f4.appspot.com",
  messagingSenderId: "1070922706582",
  appId: "1:1070922706582:web:0331189e48ba47200e9cb7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);