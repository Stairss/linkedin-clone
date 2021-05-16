import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAGBUg6k-cK4GypEyaGYKHo0YUTtnyPYXs",
    authDomain: "linkedin-clone-f7c63.firebaseapp.com",
    projectId: "linkedin-clone-f7c63",
    storageBucket: "linkedin-clone-f7c63.appspot.com",
    messagingSenderId: "717697035953",
    appId: "1:717697035953:web:bb5f8b0c3142d1a4483c90",
    measurementId: "G-LDM2T00W0F"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };