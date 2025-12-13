// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-UWtK0pvF4YkH43ulWZ0uSAmTXpDKCxU",
  authDomain: "food-share-app-8f002.firebaseapp.com",
  projectId: "food-share-app-8f002",
  storageBucket: "food-share-app-8f002.firebasestorage.app",
  messagingSenderId: "564688503364",
  appId: "1:564688503364:web:9fccf9e270b07c055c3211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);