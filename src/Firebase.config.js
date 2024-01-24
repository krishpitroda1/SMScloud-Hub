// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjyrSB0Ewew0w5Rz1Vs1aiC3uvxGH5K4Y",
  authDomain: "smscloudhub-fe3d5.firebaseapp.com",
  projectId: "smscloudhub-fe3d5",
  storageBucket: "smscloudhub-fe3d5.appspot.com",
  messagingSenderId: "562553560968",
  appId: "1:562553560968:web:2bb7204845794dc152643d",
  measurementId: "G-J948Z8M6E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db=getFirestore(app);
export {db};