import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwg70-Cz2U0u0MHt1H541DlKFz9FUiDnQ",
  authDomain: "fb-clone-12e42.firebaseapp.com",
  projectId: "fb-clone-12e42",
  storageBucket: "fb-clone-12e42.appspot.com",
  messagingSenderId: "780819680369",
  appId: "1:780819680369:web:1f290aa5e6eaf196909fd0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();

export {auth, providerGoogle, db, storage};