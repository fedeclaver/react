// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGj_xTgqJzcBJbvoTVhcDcws0O5fKx3D0",
  authDomain: "coderhouse-ecomerce-a0a54.firebaseapp.com",
  projectId: "coderhouse-ecomerce-a0a54",
  storageBucket: "coderhouse-ecomerce-a0a54.appspot.com",
  messagingSenderId: "195708008018",
  appId: "1:195708008018:web:4a9071216dd5c72269918b",
  measurementId: "G-E79VBZN31N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//para escalar, pasar parámetros, etc.
export const getFirestoreApp = () =>{
    return app
}