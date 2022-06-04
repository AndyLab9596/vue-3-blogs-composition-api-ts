import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // ENTER YOUR CONFIG HERE
    apiKey: "AIzaSyAkmsYBai5jxgDm7cDQGbOvcNRUjBQqp1c",
    authDomain: "vue3-blogs.firebaseapp.com",
    databaseURL: "https://vue3-blogs-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vue3-blogs",
    storageBucket: "vue3-blogs.appspot.com",
    messagingSenderId: "969934363762",
    appId: "1:969934363762:web:c2124a917b6f3e6eedf6eb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp, firebaseApp };
export default firebaseApp.firestore();
