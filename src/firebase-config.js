
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID
//   };
const firebaseConfig = {
    apiKey: "AIzaSyDpeyqNb0TFAhBzPDaPvvsmjWyzH4fJ300",
    authDomain: "yeneride-project.firebaseapp.com",
    projectId: "yeneride-project",
    storageBucket: "yeneride-project.appspot.com",
    messagingSenderId: "186725317664",
    appId: "1:186725317664:web:838abbd86c3e4be1a89045"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

// Initialize Authentication
const auth = getAuth(app);

export { db, storage, auth };
