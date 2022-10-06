// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";

import {
    getFirestore,
    collection,
    getDocs,
} from 'firebase/firestore/';

import {
    getAuth
} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCF8mF-dvZt_FBv3GCqZGF0ntyc7QRXHPw",
    authDomain: "vampire-linkedin.firebaseapp.com",
    projectId: "vampire-linkedin",
    storageBucket: "vampire-linkedin.appspot.com",
    messagingSenderId: "368956926396",
    appId: "1:368956926396:web:ed2d898c9ad76f33eea3b9",
    measurementId: "G-RLTPLTY3JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth,
    analytics
};