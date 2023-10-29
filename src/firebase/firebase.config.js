// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk8zsNaOrU1lbaomsuVXRSbuWaXqao0V8",
  authDomain: "news-portal-client-543d9.firebaseapp.com",
  projectId: "news-portal-client-543d9",
  storageBucket: "news-portal-client-543d9.appspot.com",
  messagingSenderId: "854953082204",
  appId: "1:854953082204:web:3c357ec9d65ddcadf25599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;