// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-df159.firebaseapp.com",
  projectId: "mern-auth-df159",
  storageBucket: "mern-auth-df159.appspot.com",
  messagingSenderId: "392928751113",
  appId: "1:392928751113:web:a5b15c5b20252c8b6052d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);