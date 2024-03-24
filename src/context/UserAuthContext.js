import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase';

const UserAuthContext = createContext();

function UserAuthContextProvider(props) {
  const [user, setUser] = useState(" ");

  const register = async (email, password, fullName) => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: fullName });
      return userCredential.user;

    } catch (error) {
      alert(error.message);
    }
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const loginWithGoogle = async () => {

    try {
      const googleAuthProvider = new GoogleAuthProvider();
      return await signInWithPopup(auth, googleAuthProvider);

    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }

  }

  function logout() {
    return signOut(auth);
  }

  function forgetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    }
  }, [])

  const value = { register, login, logout, loginWithGoogle, forgetPassword, user }

  return (
    <UserAuthContext.Provider value={value}>
      {props.children}
    </UserAuthContext.Provider>
  )

}

export default UserAuthContextProvider;
export const useUserAuth = () => useContext(UserAuthContext);
