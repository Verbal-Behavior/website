import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDrSnbah_5aL_mN6oxLwKjomczlwiCdm2s",
    authDomain: "flashcard-app-32ebc.firebaseapp.com",
    projectId: "flashcard-app-32ebc",
    storageBucket: "flashcard-app-32ebc.appspot.com",
    messagingSenderId: "585742735291",
    appId: "1:585742735291:web:6a58ebecdedcc3a5bd169e"    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
