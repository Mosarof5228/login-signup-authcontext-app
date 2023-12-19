// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCintad6P6zE-kicEzldKwbwiwecR1ofCA",
  authDomain: "car-service-rent.firebaseapp.com",
  projectId: "car-service-rent",
  storageBucket: "car-service-rent.appspot.com",
  messagingSenderId: "809984441334",
  appId: "1:809984441334:web:540aea6359c83380b3a5d7",
  measurementId: "G-B343CM3SGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;