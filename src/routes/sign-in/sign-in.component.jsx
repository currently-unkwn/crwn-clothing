import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const createUserDocRef = async () => {
      const response = await getRedirectResult(auth);

      // if response is not null, set the user document
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };

    createUserDocRef();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
