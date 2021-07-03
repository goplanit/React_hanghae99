import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXYkgx5cMTPWcLq30kd75502RSAE2rOzo",
  authDomain: "image-comunity.firebaseapp.com",
  projectId: "image-comunity",
  storageBucket: "image-comunity.appspot.com",
  messagingSenderId: "496606175717",
  appId: "1:496606175717:web:0f33a9644866122a3b8f0c",
  measurementId: "G-74RLFKQ72C",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export { auth, apiKey };
