import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATBkRKjUjKLDU3idA6qgObN_U3ay8KDo0",
    authDomain: "todo-app-7aaea.firebaseapp.com",
    projectId: "todo-app-7aaea",
    storageBucket: "todo-app-7aaea.appspot.com",
    messagingSenderId: "770162634407",
    appId: "1:770162634407:web:7d78cefede82cf5d623582"
};

const app = initializeApp(firebaseConfig);

export default firebase;