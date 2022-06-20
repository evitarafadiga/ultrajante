// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCt0n5qYuj69f5utBG5Y3LlrRZr9D41Nio",
  authDomain: "ultrajante-676ec.firebaseapp.com",
  projectId: "ultrajante-676ec",
  storageBucket: "ultrajante-676ec.appspot.com",
  messagingSenderId: "273125186352",
  appId: "1:273125186352:web:037e1695c6229729ed06f5",
  measurementId: "G-WNTB9TVHP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);