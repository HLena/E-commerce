import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSuL-Co3mWcw3kTkWnHppsuR5wKj5GVLg",
  authDomain: "e-commerce-89140.firebaseapp.com",
  projectId: "e-commerce-89140",
  storageBucket: "e-commerce-89140.appspot.com",
  messagingSenderId: "93336343420",
  appId: "1:93336343420:web:6b53361a42602757f5caf9",
  measurementId: "G-D5X9NJBL3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app)

export { db, storage, auth };