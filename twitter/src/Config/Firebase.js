import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC328AipF70ZvKL8JlE-kYrLx6g8_8cKpw",
  authDomain: "twitter-clone-eba62.firebaseapp.com",
  projectId: "twitter-clone-eba62",
  storageBucket: "twitter-clone-eba62.appspot.com",
  messagingSenderId: "911460395121",
  appId: "1:911460395121:web:a18896963d2da13a4093d0",
  measurementId: "G-LVXJJTFZ72",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
