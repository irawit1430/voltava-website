// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH6v3mr6Bg-OK7XcNYlbBi2_rm9Fud62Y",
  authDomain: "voltava-1.firebaseapp.com",
  projectId: "voltava-1",
  storageBucket: "voltava-1.firebasestorage.app",
  messagingSenderId: "626490828557",
  appId: "1:626490828557:web:dd902ac6c9cca3fea4b244",
  measurementId: "G-F9K7BDJRLZ"
};

// Initialize Firebase
let app;
let analytics;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { app, analytics };
