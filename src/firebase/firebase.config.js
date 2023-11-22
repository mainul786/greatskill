// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_8bnOOG2A6ywmOqOTu1kkFIdRbjTTn5w",
  authDomain: "greatskill.firebaseapp.com",
  projectId: "greatskill",
  storageBucket: "greatskill.appspot.com",
  messagingSenderId: "117569609385",
  appId: "1:117569609385:web:3c8cf337c880fa9de213b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;