// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe6fim-tbdvEyaIIpeAyTJTNKN2OKk0jE",
  authDomain: "lingo-bingo-eb8a6.firebaseapp.com",
  projectId: "lingo-bingo-eb8a6",
  storageBucket: "lingo-bingo-eb8a6.firebasestorage.app",
  messagingSenderId: "15663581977",
  appId: "1:15663581977:web:b071061d41545d5ae99388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);