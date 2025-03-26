// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoxcUcW3oVcQFAWvhmWh_pTuugr9rF0DQ",
  authDomain: "leaperstuff.firebaseapp.com",
  projectId: "leaperstuff",
  storageBucket: "leaperstuff.firebasestorage.app",
  messagingSenderId: "924724287800",
  appId: "1:924724287800:web:7c7fcd60a69ae13541c9cd",
  measurementId: "G-1H7328L9VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);