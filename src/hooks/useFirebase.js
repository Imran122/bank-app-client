import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Firebase/firebase.initialize";

//initalize firebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [balance, setBalance] = useState(0);

  //register with email password

  const registerUser = (email, password, name, balance, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name, balance: 0 };
        setUser(newUser);
        //save User to mongo Db
        saveUser(email, name, balance, "POST");
        //update profile data to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //signIn function for user signin
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //if user chnage state then it will save auth data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //signout function code
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //save user to mongo DB
  const saveUser = (email, displayName, balance, method) => {
    const user = { email, displayName, balance };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    authError,
    balance,
    setBalance,
    saveUser,
  };
};
export default useFirebase;
