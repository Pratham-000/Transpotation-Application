import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAJzbUVekdxK_lnD5OPKJKIBeLjaBRBbM",
  authDomain: "transportation-website-34af8.firebaseapp.com",
  projectId: "transportation-website-34af8",
  storageBucket: "transportation-website-34af8.appspot.com",
  messagingSenderId: "394812145879",
  appId: "1:394812145879:web:caac689c320b4087eb7092",
  measurementId: "G-4RLZQQ08ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, createUserWithEmailAndPassword, collection, addDoc, analytics };
