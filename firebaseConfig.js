// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLd8CeS9fOmQhkUOJOQ9yDeIchRMi0SX0',
  authDomain: 'v60app.firebaseapp.com',
  projectId: 'v60app',
  storageBucket: 'v60app.appspot.com',
  messagingSenderId: '721200563459',
  appId: '1:721200563459:web:7b8fd582916a283ea09536',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);
export const db = getFirestore(app);
