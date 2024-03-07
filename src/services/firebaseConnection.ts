import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt74BSAz_dVNXcuBXDI4xgHuxjulm1eDQ",
    authDomain: "webcarros-6e523.firebaseapp.com",
    projectId: "webcarros-6e523",
    storageBucket: "webcarros-6e523.appspot.com",
    messagingSenderId: "343661936709",
    appId: "1:343661936709:web:c44c1feb4e42ef7aff632c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage}