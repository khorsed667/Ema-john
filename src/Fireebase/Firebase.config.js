// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWuo3FzsddOQza-fxTY-CWu5SRTa0HPeQ",
  authDomain: "ema-john-firebase-auth-62256.firebaseapp.com",
  projectId: "ema-john-firebase-auth-62256",
  storageBucket: "ema-john-firebase-auth-62256.appspot.com",
  messagingSenderId: "419979230148",
  appId: "1:419979230148:web:9d31f759bcfcb41f8f4291",
  measurementId: "G-HSYTFGFET9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;