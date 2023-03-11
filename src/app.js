import './../styles/styles.css';

import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA24_50LO4dJ58Q9CAB39GYvTXYMWN-AGs",
  authDomain: "sda-firebase-kamil.firebaseapp.com",
  projectId: "sda-firebase-kamil",
  storageBucket: "sda-firebase-kamil.appspot.com",
  messagingSenderId: "584729761029",
  appId: "1:584729761029:web:2e1c8c7d9bdf12b21bd36c"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const url ="https://firebasestorage.googleapis.com/v0/b/sda-firebase-kamil.appspot.com/o/1643667975347.jpg?alt=media&token=d25c51ee-ae76-48a3-aabf-31237e6511c4";

const img = document.createElement("img");
img.src = url;
document.body.appendChild(img);