// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAGRznM04tdiJgjdvGWdJ3Yt7Q9__ejBzM",
    authDomain: "communify-b2e04.firebaseapp.com",
    projectId: "communify-b2e04",
    storageBucket: "communify-b2e04.appspot.com",
    messagingSenderId: "56400528497",
    appId: "1:56400528497:web:8a620dd484018630b2c7d0",
    measurementId: "G-K8N39BNRHF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebase.firestore()

  export {auth, provider}
  export default db