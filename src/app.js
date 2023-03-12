import './../styles/styles.css';

import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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


// ~~~~~~~~ZADANIE 1~~~~~~~~~~~~
// 1. Dodajemy input do HTML - typ file
// 2. Dodajemy przycisk do HTML
// 3. Do przycisku dodajemy obsługę kliknięcia
// 4. Jako call back wywołujemy linijki z prezentacji 

// const headerInfo = document.getElementById("myHeader");
// document.getElementById("myBtn").addEventListener("click", ()=> {
//   headerInfo.innerText = "Przesyłam zdjęcie...";

//   const file = document.getElementById("myFile").files[0];
//   const imageRef = ref(storage, "imageNew.jpg");

// uploadBytes(imageRef, file).then(() => {
//     headerInfo.innerText = "Zdjęcie przesłane!";
//   })
// })

// ~~~~~~~~ZADANIE 2~~~~~~~~~~~~
// 1. Dodać input do HTMLa
// 2. Pobrać wpisaną nazwę z inputa
// 3. Przekazać jako argument do funkcji
// 4. Callback do domyślnej nazwy pliku
const headerInfo = document.getElementById("myHeader");
const fileNameInput = document.getElementById("myText");

document.getElementById("myBtn").addEventListener("click", ()=> {
  headerInfo.innerText = "Przesyłam zdjęcie...";

  const file = document.getElementById("myFile").files[0];
  let fileName = file.name;

  if(fileNameInput.value){
    fileName = fileNameInput.value;
  }

  const imageRef = ref(storage, fileName);

uploadBytes(imageRef, file).then(() => {
    headerInfo.innerText = "Zdjęcie przesłane!";
  })
})

// POBIERANIE ZDJĘCIA

// const imageRef = ref(storage, "WTF.jpg");
// getDownloadURL(imageRef).then(url => {
//   const img = document.createElement("img");
//   img.src = url;
//   img.style.width = "250px";
//   document.body.appendChild(img);
// })

// ~~~~~~~~ZADANIE 3~~~~~~~~~~
// 1. Dodac Input do podawania nazwy obrazka
// 2. Dodac przycisk do wyswietlania obrazka
// 3. Na klikniecie przycisku wyswietlic zdjecie
// 4. Przekazac nazwe do refa
// 5. Wyswietlic blad w headerInfo

const myShowFileNameInput = document.getElementById("myShowFileName");
const showFileBtn = document.getElementById("showPhotoBtn");

showFileBtn.addEventListener("click", () => {
  const imageRef = ref(storage, myShowFileNameInput.value);

getDownloadURL(imageRef).then(url => {
  const img = document.createElement("img");
  img.src = url;
  img.style.width = "250px";
  document.body.appendChild(img);
})
  .catch(ex => {
    headerInfo.innerText = "FOTO NIE ISTNIEJE!";
  });
});