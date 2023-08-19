
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyB8cjbzit5k_jp4IjrsaZS3E29gxMoJZQQ",
    authDomain: "smit-hackathon-9ca46.firebaseapp.com",
    projectId: "smit-hackathon-9ca46",
    storageBucket: "smit-hackathon-9ca46.appspot.com",
    messagingSenderId: "247019362897",
    appId: "1:247019362897:web:1d8dd5bda31c1a30b3b670"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


var email = document.getElementById("email");
// createUserWithEmailAndPassword(auth, "aliyanrafiq@gmail.com", "123456")
//     .then((res) => {
    //         const user = res.user;
//         console.log("user", user)
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log("errorMessage", errorMessage)
//         console.log("errorCode", errorCode)
//     });

// var password = document.getElementById("password");
// function verificationPassword(){
//     if(errorMessage === "wrong password" && errorMessage === password){
//         console.log("password is incorrect")
//     }
// }import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


var emailValue = document.getElementById("email").value
console.log(emailValue)

signInWithEmailAndPassword(auth, emailValue, "123456")
  .then((userCredential) => {
      // Signed in 
    const user = userCredential.user;
    console.log("user", user);
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    console.log("error Code", errorCode);
    console.log("error Message", errorMessage);
});


onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log("user", user)
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const emailId = email.value;

let btn = document.getElementById("btn");

let emailCheck = () => {
    if(signInWithEmailAndPassword === onAuthStateChanged){
        console.log("email Id", emailId)
    }
    else{
        console.log("error")
    }
}




btn.addEventListener("click", emailCheck)