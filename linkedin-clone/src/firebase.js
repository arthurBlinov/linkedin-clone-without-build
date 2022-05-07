// import * as firebase from 'firebase/app';
// import'firebase/firestore';
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBV86SBRKPxBiX3jQ2RZFzNc9-3FJ4pWtQ",
    authDomain: "linkedin-clone-84f70.firebaseapp.com",
    projectId: "linkedin-clone-84f70",
    storageBucket: "linkedin-clone-84f70.appspot.com",
    messagingSenderId: "343269728540",
    appId: "1:343269728540:web:8698b121576ccf70bedad9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
export {db, auth};