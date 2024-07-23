import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGUNYOu_n6yGtqPWW14rr28uZfU667Iy8",
  authDomain: "translateapp-4d5e4.firebaseapp.com",
  projectId: "translateapp-4d5e4",
  storageBucket: "translateapp-4d5e4.appspot.com",
  messagingSenderId: "386583585484",
  appId: "1:386583585484:web:69cb9387faf49a582fd869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
