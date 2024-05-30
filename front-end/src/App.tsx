import './App.css';
import { Landing } from './components/Landing';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { SignIn } from './components/SignIn';
import { GoogleSignIn } from './components/GoogleSignIn';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLqfFCE_il5Fpn0pSdIv1SLwr2YGgNH18",
  authDomain: "basics-9bbe0.firebaseapp.com",
  projectId: "basics-9bbe0",
  storageBucket: "basics-9bbe0.appspot.com",
  messagingSenderId: "684582472734",
  appId: "1:684582472734:web:ddbc2685ac63048fcab20f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export default function App(){

  return (
    <>

    <div>
      <Landing />
    </div>

    <div>
      <SignIn />
    </div>

    <div>
      <GoogleSignIn />
    </div>
    </>
  )
  
}