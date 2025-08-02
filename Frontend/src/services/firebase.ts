// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDscXfUTjTCX25rvkcWTFHng9DSHPPZQes",
  authDomain: "wmtogether-80585.firebaseapp.com",
  databaseURL: "https://wmtogether-80585-default-rtdb.firebaseio.com",
  projectId: "wmtogether-80585",
  storageBucket: "wmtogether-80585.appspot.com",
  messagingSenderId: "469603107353",
  appId: "1:469603107353:web:d6aac7694d527deef42088"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Realtime Database
const db = getDatabase(app);

// Khởi tạo Firebase Auth
const auth = getAuth(app);

// Xuất cả hai để dùng ở nơi khác
export { app, db, auth };
