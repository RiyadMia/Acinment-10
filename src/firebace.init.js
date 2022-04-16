// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhu9PSMxT16aA3KbCHIjSaGYwagnkPyGs",
  authDomain: "acinment-1afa0.firebaseapp.com",
  projectId: "acinment-1afa0",
  storageBucket: "acinment-1afa0.appspot.com",
  messagingSenderId: "596016719620",
  appId: "1:596016719620:web:e9157d9bc5ee44a520d251",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
