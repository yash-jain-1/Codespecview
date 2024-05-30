import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLqfFCE_il5Fpn0pSdIv1SLwr2YGgNH18",
    authDomain: "basics-9bbe0.firebaseapp.com",
    projectId: "basics-9bbe0",
    storageBucket: "basics-9bbe0.appspot.com",
    messagingSenderId: "684582472734",
    appId: "1:684582472734:web:ddbc2685ac63048fcab20f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const handleGoogleSignIn = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user); // User object with details
    } catch (error) {
        console.error(error);
    }
};

export const GoogleSignIn = () => {
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
}