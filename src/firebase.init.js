// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhP-RA3UGCVlaiZujaX_--yFr8u8bxt7w",
  authDomain: "auto-parts-manufacturer.firebaseapp.com",
  projectId: "auto-parts-manufacturer",
  storageBucket: "auto-parts-manufacturer.appspot.com",
  messagingSenderId: "423287558657",
  appId: "1:423287558657:web:f0f1c7f18a302bc22a6600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;