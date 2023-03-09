// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLiItX6MpLp6Hwj7j7yvNHb3SEZqMcBJE",
  authDomain: "quora-clone-f597d.firebaseapp.com",
  projectId: "quora-clone-f597d",
  storageBucket: "quora-clone-f597d.appspot.com",
  messagingSenderId: "988983405316",
  appId: "1:988983405316:web:cea5ac9a4f25f2ec427e51",
  measurementId: "G-ESH7N25TMH",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

export { auth, provider };
export default db;
