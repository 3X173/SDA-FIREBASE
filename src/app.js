import './../styles/styles.css';

import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore"
import { getDatabase, onChildAdded, onValue, push, ref as rdbRef, set } from "firebase/database";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: "AIzaSyA24_50LO4dJ58Q9CAB39GYvTXYMWN-AGs",
  authDomain: "sda-firebase-kamil.firebaseapp.com",
  databaseURL: "https://sda-firebase-kamil-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sda-firebase-kamil",
  storageBucket: "sda-firebase-kamil.appspot.com",
  messagingSenderId: "584729761029",
  appId: "1:584729761029:web:2e1c8c7d9bdf12b21bd36",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
// Inicjalizacja Relative DB
const rdb = getDatabase(app);
// Inicjalizacja Firestore Auth
const auth = getAuth(app);
const ui = new firebaseui.auth.AuthUI(auth);

// const url = "https://firebasestorage.googleapis.com/v0/b/sda-firebase-21.appspot.com/o/Zdj%C4%99cieCV.png?alt=media&token=8debca9e-3f19-49d2-b5dd-74f23ba75890";

// const img = document.createElement("img");
// img.src = url;
// document.body.appendChild(img);


// // const mojaPupaJson = fetch().then((pupa123) => {
// //   return pupa123.json()
// // });
// const mojaPupaJson = fetch().then((pupa123) => pupa123.json());
// mojaPupaJson.then((data) => console.log(data))

// fetch("https://reqres.in/api/users")
// .then((pupa123) => pupa123.json())
// .then((data) => console.log(data));

// async function mojAsynchronicznaFunkcja() {
//   const pupa123 = await fetch();
//   const data = await pupa123.json();
//   console.log(data);
// }

// fetch("https://reqres.in/api/users")
// .then((daneZPromisa) => daneZPromisa.json())
// .then((daneZJson) => console.log(daneZJson.data));

// async function myFunc () {
//   const data = await fetch("https://reqres.in/api/users")
//   const users = await data.json();
//   console.log(users.data);
// }

//1. Dodajemy input do HTMLu - typ file
//2. Dodajemy przycisk do HTML 
//3. Do przycisku obsluga klikniecia 
//4. Jako callback wywolujemy linijki z prezentacji

// const headerInfo = document.getElementById("myHeader");
// document.getElementById("myBtn").addEventListener("click", () => {
//   headerInfo.innerText = "Przesyłam zdjęcię....!";

//   const file = document.getElementById("myFile").files[0];
//   const imageRef = ref(storage, file.name);

//   uploadBytes(imageRef, file).then(() => {
//     headerInfo.innerText = "Zdjęcie przesłano!";
//   })
// })


// 1. Dodać input do HTMLa
// 2. Pobrac wpisana nazwe z inputa
// 3. Przekazac jako argument do funckji
// 4. Fallback do domyślnej nazwy pliku
// const headerInfo = document.getElementById("myHeader");
// const fileNameInput = document.getElementById("myFileName");

// document.getElementById("myBtn").addEventListener("click", () => {
//   headerInfo.innerText = "Przesyłam zdjęcię....!";

// const file = document.getElementById("myFile").files[0];
// let fileName = file.name;

// if (fileNameInput.value) {
//   fileName = fileNameInput.value;
// }

// const imageRef = ref(storage, folderName ,fileName);

// uploadBytes(imageRef, file).then(() => {
//   headerInfo.innerText = "Zdjęcie przesłano!";

//     getDownloadURL(imageRef).then(url => {
//       const img = document.getElementById("myPhoto");
//       img.src = url;
//       img.style.width = "250px";
//     })
//   })
// })

//1. Dodac Input do podawania nazwy obrazka
//2. Dodac przycisk do wyswietlania obrazka
//3. Na klikniecie przycisku wyswietlic zdjecie
//4. Przekazac nazwe do refa
//5. Wyswietlic blad w headerInfo

// const myShowFileNameInput = document.getElementById("myShowFileName");
// const showFileBtn = document.getElementById("showPhotoBtn");
// const img = document.createElement("img");

// showFileBtn.addEventListener("click", () => {
//   const imageRef = ref(storage, myShowFileNameInput.value);

//   headerInfo.innerText = "";

// getDownloadURL(imageRef).then(url => {
//   img.src = url;
//   img.style.width = "250px";
//   document.body.appendChild(img);
// })
//     .catch(ex => {
//       headerInfo.innerText = "FOTO NIE ISTNIEJE!!!";
//     });
// });


// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const myOl = document.getElementById("photoList");

//   for (let i = 0; i < res.items.length; i++) {
//     const myLi = document.createElement("li");
//     const myBtn = document.createElement("button");
//     const myRemoveBtn = document.createElement("button");

//     myBtn.addEventListener("click", () => {
//       const imageRef = ref(storage, res.items[i].name);

//       getDownloadURL(imageRef).then(url => {
//         const myImg = document.getElementById("myImg");
//         myImg.src = url;
//         myImg.style.width = "200px";
//       });
//     })

//     myRemoveBtn.addEventListener("click", () => {
//       const imageRef = ref(storage, res.items[i].name);

//       deleteObject(imageRef).then(() => {
//         myOl.removeChild(myLi);
//         console.log("USUNIĘTO!");
//       });
//     })

//     myRemoveBtn.innerText = "Delete";
//     myBtn.innerText = "Show photo!";
//     myLi.innerText = res.items[i].name;

//     myLi.appendChild(myBtn);
//     myLi.appendChild(myRemoveBtn);
//     myOl.appendChild(myLi);
//   }
// });

// const albumsList = document.getElementById("albumsList");
// const uploadPhotoBtn = document.getElementById("uploadPhoto");
// const fileInput = document.getElementById("fileInput");
// const showPhotosBtn = document.getElementById("showPhotos");

// uploadPhotoBtn.addEventListener("click", () => {
//   if (albumsList.value) {
//     const file = fileInput.files[0];
//     const imageRef = ref(storage, `${albumsList.value}/${file.name}`);
//     uploadBytes(imageRef, file).then(() => console.log("SUKCES"));
//   }
// });

// showPhotosBtn.addEventListener("click", () => {
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

// document.body.appendChild(img);

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   res.prefixes.forEach(pref => {
//     const albumOption = document.createElement("option");
//     albumOption.innerText = pref.name;
//     albumsList.appendChild(albumOption);
//   })
// })

// const nameInput = document.getElementById("name");
// const surnameInput = document.getElementById("surname");
// const ageInput = document.getElementById("age");
// const addUserBtn = document.getElementById("addUser");

// addUserBtn.addEventListener("click", () => {
//   const jkDoc = doc(db, "users", `${nameInput.value}${surnameInput.value}${ageInput.value}`);
//   setDoc(jkDoc, {
//     name: nameInput.value,
//     surname: surnameInput.value,
//     age: ageInput.value
//   }).then(() => console.log("SUKCES"))
// })

// const szymonDoc = doc(db, "users", "SzymonRoszyk29");
// getDoc(szymonDoc).then(resDoc => {
//   const szymon = resDoc.data();
//   nameInput.value = szymon.name;
//   surnameInput.value = szymon.surname;
//   ageInput.value = szymon.age;
// })

// const nameInput = document.getElementById("name");
// const surnameInput = document.getElementById("surname");
// const ageInput = document.getElementById("age");
// const addUserBtn = document.getElementById("addUser");
// const usersList = document.getElementById("usersList");
// const usersCol = collection(db, "users");
// const editUserBtn = document.getElementById("editUser");
// const userIdHeader = document.getElementById("userId");

// addUserBtn.addEventListener("click", () => {
//   addDoc(usersCol, {
//     name: nameInput.value,
//     surname: surnameInput.value,
//     age: ageInput.value
//   }).then(() => {
//     generateUsersList();
//   });
// })

// function generateUsersList() {
//   getDocs(usersCol).then(docs => {
//     usersList.innerHTML = "";
//     docs.forEach(myDoc => {
//       const editBtn = document.createElement("button");
//       const deleteBtn = document.createElement("button");
//       const myLi = document.createElement("li");

//       const myUser = myDoc.data();

//       myLi.innerText = `${myUser.name} ${myUser.surname} ${myUser.age}`;
//       editBtn.innerText = "Edit";
//       deleteBtn.innerText = "Delete";

//       editBtn.addEventListener("click", () => {
//         nameInput.value = myUser.name;
//         surnameInput.value = myUser.surname;
//         ageInput.value = myUser.age;
//         addUserBtn.style.display = "none";
//         editUserBtn.style.display = "inline-block";
//         userIdHeader.innerText = myDoc.id;
//       })

//       deleteBtn.addEventListener("click", () => {
//         const userDocRef = doc(db, "users", myDoc.id);
//         deleteDoc(userDocRef).then(() => {
//           console.log("USUNIETO!");
//           generateUsersList();
//         });
//       })

//       myLi.appendChild(editBtn);
//       myLi.appendChild(deleteBtn);
//       usersList.appendChild(myLi);
//     });
//   })
// }
// generateUsersList();

// editUserBtn.addEventListener("click", () => {
//   const userDoc = doc(db, "users", userIdHeader.innerText);
//   updateDoc(userDoc, {
//     name: nameInput.value,
//     surname: surnameInput.value,
//     age: ageInput.value
//   }).then(() => {
//     userIdHeader.innerText = "";
//     nameInput.value = "";
//     surnameInput.value = "";
//     ageInput.value = "";
//     addUserBtn.style.display = "inline-block";
//     editUserBtn.style.display = "none";
//     generateUsersList();
//   })
// });

// const nameInput = document.getElementById("name");
// const searchBtn = document.getElementById("search");
// const usersList = document.getElementById("usersList");

// searchBtn.addEventListener("click", () => {
//   const users = collection(db, "users");
//   const usersQuery = query(users, where("name", "==", nameInput.value))

//   getDocs(usersQuery).then(docs => {
//     usersList.innerHTML = "";
//     docs.forEach(myDoc => {
//       const myUser = myDoc.data();
//       const myLi = document.createElement("li");
//       myLi.innerText = `${myUser.name} ${myUser.surname} ${myUser.age}`;
//       usersList.appendChild(myLi);
//     })
//   })
// })

// const janRef = ref(rdb,"users/JanId");
// set(janRef, {
//   name: "Jan",
//   surname: "Kowalski",
// })

// const usersRef = rdbRef(rdb, "users");
// const janRef = push(usersRef);

// set(janRef, {
//   name: "NowyJan",
//   surname: "NowyKowalski"
// })

// ************** SNAPSHOT

// const usersRef = rdbRef(rdb, "users");
// onValue(usersRef, snapshot => {
//   console.log(snapshot);
//   const myUsers = snapshot.val();

//   for(let prop in myUsers){
//     console.log(prop);
//   }
// })

// const usersRef = rdbRef(rdb, "users");
// onChildAdded(usersRef, snapshot => {
  
//   const myUsers = snapshot.val();
//   console.log(myUsers);

//   for(let prop in myUsers){
//     console.log(prop);
//   }
// })


// *********** ROBIMY MINI CHAT Z UZYCIEM onCHILDAdded
const sendBtn = document.getElementById("send");
const messageTextInput = document.getElementById("message");
const messageContainer = document.getElementById("messageContainer");

const messagesRef = rdbRef(rdb, "messages");

onChildAdded(messagesRef, (messageSnapshot) => {
  const mySpan = document.createElement("span");
  const message = messageSnapshot.val();

  mySpan.innerText = `${message.timestamp} --- ${message.text}`;

  messageContainer.appendChild(mySpan);
})

sendBtn.addEventListener("click", () => {
  const messageRef = push(messagesRef);

  set(messageRef, {
    text: messageTextInput.value,
    timestamp: new Date().toISOString()
  })
})

ui.start('#firebaseui-auth-container', {
  signInOptions: [
      EmailAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: "http://localhost:8080/"
});