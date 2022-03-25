import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBeBF1Cv9v3Myyg_SaJHhS35d2EK5QrCY4",
    authDomain: "botogram-9facd.firebaseapp.com",
    projectId: "botogram-9facd",
    storageBucket: "botogram-9facd.appspot.com",
    messagingSenderId: "868813481053",
    appId: "1:868813481053:web:acbd32e533cc9fe0e459b4"
}).auth();