import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase';

const UserAuthContext = createContext();

function UserAuthContextProvider(props) {
    const [user,setUser] = useState(" ");

    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
      return signOut(auth);
    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
      });
    
      return () => {
        unsubscribe();
      }
    }, [])
    
    const value = { register, login , logout ,user }

    return (
        <UserAuthContext.Provider value={value}>
            {props.children}
        </UserAuthContext.Provider>
    )

}

export default UserAuthContextProvider;
export const useUserAuth = () => useContext(UserAuthContext);
