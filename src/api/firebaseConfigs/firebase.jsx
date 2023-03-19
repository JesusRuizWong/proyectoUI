// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import {getStorage, ref, uploadBytes} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl0dTcwx-S25axV2NCXnXhE2YHJ33X_Ws",
  authDomain: "travesia-465c3.firebaseapp.com",
  projectId: "travesia-465c3",
  storageBucket: "travesia-465c3.appspot.com",
  messagingSenderId: "959270942910",
  appId: "1:959270942910:web:b6fbd9a980aa47f24986ef"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app) ;

