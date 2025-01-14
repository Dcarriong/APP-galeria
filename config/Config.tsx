// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAen6n4tGkO2OIotRvdQ6YYJ3Nu3FbOsVE",
  authDomain: "app-crud-b6cd7.firebaseapp.com",
  databaseURL: "https://app-crud-b6cd7-default-rtdb.firebaseio.com",
  projectId: "app-crud-b6cd7",
  storageBucket: "app-crud-b6cd7.firebasestorage.app",
  messagingSenderId: "552827156536",
  appId: "1:552827156536:web:4712d8d1abfb58657a0ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)