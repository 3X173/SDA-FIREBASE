import './../styles/styles.css';

import { initializeApp } from 'firebase/app';
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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
// inizjalizacja bazy danych
const db = getFirestore(app);

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
// const headerInfo = document.getElementById("myHeader");
// const fileNameInput = document.getElementById("myText");

// document.getElementById("myBtn").addEventListener("click", ()=> {
//   headerInfo.innerText = "Przesyłam zdjęcie...";

//   const file = document.getElementById("myFile").files[0];
//   let fileName = file.name;

//   if(fileNameInput.value){
//     fileName = fileNameInput.value;
//   }

//   const imageRef = ref(storage, fileName);

// uploadBytes(imageRef, file).then(() => {
//     headerInfo.innerText = "Zdjęcie przesłane!";

//     getDownloadURL(imageRef).then(url => {
//       const img = document.getElementById("myPhoto");
//       img.src = url;
//       img.style.width = "250px";
//     })
//   }) 
// })

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

// const myShowFileNameInput = document.getElementById("myShowFileName");
// const showFileBtn = document.getElementById("showPhotoBtn");

// showFileBtn.addEventListener("click", () => {
//   const imageRef = ref(storage, myShowFileNameInput.value);

// getDownloadURL(imageRef).then(url => {
//   const img = document.createElement("img");
//   img.src = url;
//   img.style.width = "250px";
//   document.body.appendChild(img);
// })
//   .catch(ex => {
//     headerInfo.innerText = "FOTO NIE ISTNIEJE!";
//   });
// });

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const myOl = document.getElementById("PhotoList");

//   for (let i = 0; i < res.items.length; i++) {
//     const myLi = document.createElement("li");
//     const myBtn = document.createElement("button");
//     const myDelBtn = document.createElement("button");

  
//     myBtn.addEventListener("click", () => {
//       const imageRef = ref(storage, res.items[i].name);
//       getDownloadURL(imageRef).then(url => {
//       const myPhotos = document.getElementById("myPhotos");
//       myPhotos.src = url;
//       myPhotos.style.width = "100px";
//       });
      
//     }) 

//     myDelBtn.addEventListener("click", () => {
//       const imageRef = ref(storage, res.items[i].name);

//       deleteObject(imageRef).then(() => {
//         console.log("Usunięto!")
//       });

//     })

//     myBtn.innerText = "Show photo!";
//     myLi.innerText = res.items[i].name;
//     myDelBtn.innerText = "Remove!";

//     myLi.appendChild(myBtn);
//     myOl.appendChild(myLi);
//     myLi.appendChild(myDelBtn);

//     console.log(res.items[i].name);
//   }
// });

// // tworzymy listę albumów
// const albumsList = document.getElementById("albumsList");
// // tworzymy przycisk
// const uploadPhotoBtn = document.getElementById("uploadPhoto");
// // tworzymy input
// const fileInput = document.getElementById("fileInput");
// // tworzymy drugi przycisk
// const showPhotoBtn = document.getElementById("showPhotos");

// // tworzymy event listener na przycisku
// uploadPhotoBtn.addEventListener("click", () => {
//   if (albumsList.value) {
//     // dodajemy file
//     const file = fileInput.files[0];
//     // tworzymy obraz i referancje do niego
//     const imageRef = ref(storage, `${albumsList.value}/${file.name}`);
//     // wysyłamy obraz do odpowiedniego miejsca w storage
//     uploadBytes(imageRef, file).then(() => console.log("Suckes!"));
//   }
// });

// showPhotoBtn.addEventListener("click", () => {
//   const albumRef = ref(storage, albumsList.value);
//   listAll(albumRef).then(res => {
//     res.items.forEach(item => {
//       const itemRef = ref(storage, item.fullPath);

//       getDownloadURL(itemRef).then(url => {
//         const img = document.createElement("img");
//         img.src = url;
//         img.style.width = "200px";
//         document.body.appendChild(img);
//       })
//     })
//   })
// })
// // listAll na referencji na album - const albumRef = ref(storage, albumsList.value);
// // Wewnatrz listAll - iterujemy po items
// // dla kazdego items tworzymy referencje - const itemRef = ref(storage, items[i].name);
// // korzystamy z getDownloadUrl
// // wewnatrz getDownloadUrl tworzymy IMG (za pomoca createElement) i dodaje src do img 
// // document.body.appendChild(img);

// // tworzymy referencje do storage
// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   res.prefixes.forEach(pref => {
//     // tworzymy opcje do select
//     const albumOption = document.createElement("option");
//     albumOption.innerText = pref.name;
//     albumsList.appendChild(albumOption);
//   })
// })

// // dodanie inputów
// const nameInput = document.getElementById("name");
// const surnameInput = document.getElementById("surname");
// const ageInput = document.getElementById("age");
// const addUserBtn = document.getElementById("addUser");

// addUserBtn.addEventListener("click", () => {
//   const jkDoc = doc(db, "users", `${nameInput.value}${surnameInput.value}${ageInput.value}`);
// setDoc(jkDoc, {
//     name: nameInput.value,
//     surname: surnameInput.value,
//     age: ageInput.value
//   });
// })

// const kamilDoc = doc(db, "users", "KamilAdamczyk28");
// getDoc(kamilDoc).then(resDoc => {
//   const kamil = resDoc.data();
//   nameInput.value = kamil.name;
//   surnameInput.value = kamil.surname;
//   ageInput.value = kamil.age;
// })

const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = document.getElementById("age");
const addUserBtn = document.getElementById("addUser");


addUserBtn.addEventListener("click", () => {
  const usersCollection = collection(db, "users");
  addDoc(usersCollection, {
    name: nameInput.value,
    surname: surnameInput.value,
    age: ageInput.value
  }) 
})