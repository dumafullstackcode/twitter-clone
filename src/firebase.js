import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDNdeWgYWQC9NJlEq6R4JknlNLQ0tKdRws",
  authDomain: "twitter-clone-69419.firebaseapp.com",
  databaseURL: "https://twitter-clone-69419-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-69419",
  storageBucket: "twitter-clone-69419.appspot.com",
  messagingSenderId: "1070266204339",
  appId: "1:1070266204339:web:f1bb65a681284ee544f0c6",
  measurementId: "G-M3QR0FJXWR",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
