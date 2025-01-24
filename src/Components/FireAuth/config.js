import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfU6Uo1AWzvm-iY4kCQEi-Q1tr15CXLb4",
  authDomain: "chat-app-7560c.firebaseapp.com",
  projectId: "chat-app-7560c",
  storageBucket: "chat-app-7560c.firebasestorage.app",
  messagingSenderId: "71546478901",
  appId: "1:71546478901:web:a6709a58162f3a48e9ec7c",
  measurementId: "G-9PJCJF9JCH"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };