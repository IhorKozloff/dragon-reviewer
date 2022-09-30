import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwN6cfHIJZz7VX7q8wVSZujWZIIiKqt1Q",
  authDomain: "eyeshield21-auth-example.firebaseapp.com",
  projectId: "eyeshield21-auth-example",
  storageBucket: "eyeshield21-auth-example.appspot.com",
  messagingSenderId: "352632770396",
  appId: "1:352632770396:web:015852a267e9769218fb99"
};


export const app = initializeApp(firebaseConfig);
export default getFirestore();