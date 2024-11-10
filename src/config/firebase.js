import  { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8ps4GVwPai46Npris5czgVKOzEN3GEAY",
    authDomain: "free-market-f7cfb.firebaseapp.com",
    projectId: "free-market-f7cfb",
    storageBucket: "free-market-f7cfb.firebasestorage.app",
    messagingSenderId: "435528590467",
    appId: "1:435528590467:web:033a4b1a11c4ca3182e7b6"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log(db);

export default db;
