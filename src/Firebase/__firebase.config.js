// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_r-gQOTSaz8kikPgEeCKY4sjPcS8VfVs",
  authDomain: "recipes-tasty-food.firebaseapp.com",
  projectId: "recipes-tasty-food",
  storageBucket: "recipes-tasty-food.appspot.com",
  messagingSenderId: "879310066637",
  appId: "1:879310066637:web:3a80d6284c894eb4026a84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;