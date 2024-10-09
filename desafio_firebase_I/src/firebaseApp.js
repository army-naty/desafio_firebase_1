// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeIyIGimYe-QWplkq49_gbthpmIYWn1h0",
  authDomain: "desafio-b9fc2.firebaseapp.com",
  projectId: "desafio-b9fc2",
  storageBucket: "desafio-b9fc2.appspot.com",
  messagingSenderId: "328917808139",
  appId: "1:328917808139:web:d2dc5e0071a78d4b13c30e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const $db = getFirestore(app)

export { $db }