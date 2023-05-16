//biblioteca do firebase
import firebase from "firebase/compat/app";
//autenticação de email e senha
import "firebase/compat/auth";
//trabalha com o banco de dados criado no firebase
import "firebase/compat/database";

let firebaseConfig = {
  apiKey: "AIzaSyAwbnL4jpq9eF_n8-Lu6mo-VU4nqduWOZw",
  authDomain: "apploja-1acea.firebaseapp.com",
  projectId: "apploja-1acea",
  storageBucket: "apploja-1acea.appspot.com",
  messagingSenderId: "657494090040",
  appId: "1:657494090040:web:843ccc3f462b0c1f60e1cd",
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
