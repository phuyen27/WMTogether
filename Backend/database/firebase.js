// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import config from "../utils/config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: config.db.API_KEY,
    authDomain: config.db.AUTH_DOMAIN,
    databaseURL: config.db.DATABASE_URL,
    projectId: config.db.PROJECT_ID,
    storageBucket: config.db.STORAGE_BUCKET,
    messagingSenderId: config.db.MESSAGING_SENDER_ID,
    appId: config.db.APP_ID,
    measurementId: config.db.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export { analytics };