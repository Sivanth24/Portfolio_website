import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcLtQCYsWYzAeDaddtkSA83GJWsQ_iz20",
  authDomain: "portfolio-website-2403.firebaseapp.com",
  projectId: "portfolio-website-2403",
  storageBucket: "portfolio-website-2403.appspot.com",
  messagingSenderId: "463434953099",
  appId: "1:463434953099:web:abc50d43a127f4ed0e3f8e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);