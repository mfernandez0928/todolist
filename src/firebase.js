import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPNqSrJaKl8tYpGPnw3vE3cK5abwAf0_k",
  authDomain: "todolist-55c5a.firebaseapp.com",
  projectId: "todolist-55c5a",
  storageBucket: "todolist-55c5a.firebasestorage.app",
  messagingSenderId: "121023998217",
  appId: "1:121023998217:web:42294b8e4cd1b246a30bd8",
  measurementId: "G-7C7KMZ6PCT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
