// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Use getAuth to get the auth object

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDyvg3SA-8Tbm7O_xhHZDx8I1bnmQPQBE",
  authDomain: "chat-application-39e11.firebaseapp.com",
  projectId: "chat-application-39e11",
  storageBucket: "chat-application-39e11.appspot.com",
  messagingSenderId: "312678314375",
  appId: "1:312678314375:web:b1d03be8e5fd0c755e6322",
  measurementId: "G-4VKJYX69R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Get the auth object

export { app, analytics, auth }; // Export app, analytics, and auth for use in other files
