// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0PgYDgIatfJ2MNHBg8stHV_5Q4DFJk60",
  authDomain: "finteach-ed5ad.firebaseapp.com",
  projectId: "finteach-ed5ad",
  storageBucket: "finteach-ed5ad.firebasestorage.app",
  messagingSenderId: "599688029290",
  appId: "1:599688029290:web:396f30c96da094cbab5613",
  measurementId: "G-3X1TKHNN06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db,analytics}
