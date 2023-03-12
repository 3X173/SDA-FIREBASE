import './../styles/styles.css';

import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from "firebase/storage";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// const url ="https://firebasestorage.googleapis.com/v0/b/sda-firebase-kamil.appspot.com/o/1643667975347.jpg?alt=media&token=d25c51ee-ae76-48a3-aabf-31237e6511c4";

// const img = document.createElement("img");
// img.src = url;
// document.body.appendChild(img);

// function mojaFunkcja(callback) {
//   callback();
// }

// document.body.addEventListener("click", () => {
//   console.log("callback");
// }

// const mojaPupaJson = fetch().then((pupa123) => pupa123.json());
// mojaPupaJson.then((data) => console.log(data))

// fetch("https://reqres.in/api/users")
// .then((pupa123) => pupa123.json())
// .then((data) => console.log(data));

// fetch("https://reqres.in/api/users")
// .then((daneeZPromisa) => daneeZPromisa.json())
// .then((daneZJson) => console.log(daneZJson.data));

// 1. Dodajemy input do HTML - typ file
// 2. Dodajemy przycisk do HTML
// 3. Do przycisku dodajemy obsługę kliknięcia
// 4. Jako call back wywołujemy linijki z prezentacji 

document.getElementById("myBtn").addEventListener("click", ()=> {
const file = document.getElementById("myFile").files[0];
const imageRef = ref(storage, "imageNew.jpg");

uploadBytes(imageRef, file).then(() => {
    console.log("Sukces!");
  })
})

