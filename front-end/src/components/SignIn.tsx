import { useState } from 'react';
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { app } from '../App';

// import firebase module
// import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:5173/',
    // This must be true.
    handleCodeInApp: true,
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // },
    // dynamicLinkDomain: 'example.page.link'
  };

export const SignIn = () => {
    
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    async function onSignIn(){
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                alert("Email sent");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert("Error: " + errorMessage + " Code: " + errorCode);
                // ...
            });



    }

    return (
        <div>
            <input type="text" placeholder = "Email" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={onSignIn}>Sign In</button>
        </div>
    );
}