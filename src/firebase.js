// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCliCes0OLNx87vYI_H5hLbq6M1qJeZpM8",
  authDomain: "dashboard2-d676b.firebaseapp.com",
  projectId: "dashboard2-d676b",
  storageBucket: "dashboard2-d676b.appspot.com",
  messagingSenderId: "926007754851",
  appId: "1:926007754851:web:ca09e4bbaac92d4746f856",
  measurementId: "G-7JYQ8NBC60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();