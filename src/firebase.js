// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfFpxz6_0D52yDle30INEBlgszZPcpp0Y",
    authDomain: "astra-industries-b53c2.firebaseapp.com",
    projectId: "astra-industries-b53c2",
    storageBucket: "astra-industries-b53c2.firebasestorage.app",
    messagingSenderId: "1066233556198",
    appId: "1:1066233556198:web:436a1aef6ed78b7a965f27"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
