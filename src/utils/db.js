import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy5Y8AkzpYXT4LxDbf_qe5n8VP0K7LJs",
  authDomain: "contactbookapp-1ed19.firebaseapp.com",
  projectId: "contactbookapp-1ed19",
  storageBucket: "contactbookapp-1ed19.appspot.com",
  messagingSenderId: "968127476156",
  appId: "1:968127476156:web:13f0bd14390da4418a7bb9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
