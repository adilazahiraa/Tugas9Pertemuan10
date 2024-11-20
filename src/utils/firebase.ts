// src/utils/firebase.ts

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Tambahkan ini
import { getFirestore } from 'firebase/firestore';


// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB6zB4ZxYywjeuLfuHNbS9cLuuJzTT3ejY",
  authDomain: "vue-firebase-10dae.firebaseapp.com",
  projectId: "vue-firebase-10dae",
  storageBucket: "vue-firebase-10dae.firebasestorage.app",
  messagingSenderId: "734153292704",
  appId: "1:734153292704:web:aaae10cd22b8e1071502c5",
  measurementId: "G-KR2C4WLF9G",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Inisialisasi Auth
const googleProvider = new GoogleAuthProvider();  

const db = getFirestore(app);


export { auth, googleProvider, db }; // Ekspor auth untuk digunakan di seluruh aplikasi

