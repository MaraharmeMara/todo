import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATBkRKjUjKLDU3idA6qgObN_U3ay8KDo0",
  authDomain: "todo-app-7aaea.firebaseapp.com",
  projectId: "todo-app-7aaea",
  storageBucket: "todo-app-7aaea.appspot.com",
  messagingSenderId: "770162634407",
  appId: "1:770162634407:web:7d78cefede82cf5d623582",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default firebase;
