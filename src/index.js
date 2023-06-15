import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw4K8i3vbFE6DBDKP-sXbYpYBGg1A4k0o",
  authDomain: "coderhouse-ecommerce-8dc12.firebaseapp.com",
  projectId: "coderhouse-ecommerce-8dc12",
  storageBucket: "coderhouse-ecommerce-8dc12.appspot.com",
  messagingSenderId: "871302077433",
  appId: "1:871302077433:web:58a737916f8d4b2cf13b28"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);

