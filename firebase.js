// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8TpRrHkNHMU4EguAg7R1CZ437I-f_G3w",
  authDomain: "saiteja-blog.firebaseapp.com",
  projectId: "saiteja-blog",
  storageBucket: "saiteja-blog.firebasestorage.app",
  messagingSenderId: "128353002472",
  appId: "1:128353002472:web:6dd41cd753319a9fef3a5d",
  measurementId: "G-XDXYGEY3NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);