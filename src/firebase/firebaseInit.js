import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9iRpZNhKezYBAMkSUX2pK-3HTtleShss",
    authDomain: "fireblogs-f5c62.firebaseapp.com",
    projectId: "fireblogs-f5c62",
    storageBucket: "fireblogs-f5c62.appspot.com",
    messagingSenderId: "355918102983",
    appId: "1:355918102983:web:323ecbb07a8b409c1c19e2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const  timestamp = firebase.firestore.FieldValue.serverTimestamp;

export{ timestamp };
export default firebaseApp.firestore();