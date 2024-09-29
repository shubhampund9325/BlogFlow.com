// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogproject-b0d57.firebaseapp.com",
  projectId: "blogproject-b0d57",
  storageBucket: "blogproject-b0d57.appspot.com",
  messagingSenderId: "192847716076",
  appId: "1:192847716076:web:afe0b6885858a26f5a0fc9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);