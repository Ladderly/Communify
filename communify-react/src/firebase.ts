// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGRznM04tdiJgjdvGWdJ3Yt7Q9__ejBzM",
  authDomain: "communify-b2e04.firebaseapp.com",
  projectId: "communify-b2e04",
  storageBucket: "communify-b2e04.appspot.com",
  messagingSenderId: "56400528497",
  appId: "1:56400528497:web:8a620dd484018630b2c7d0",
  measurementId: "G-K8N39BNRHF",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();

export default firebase;
