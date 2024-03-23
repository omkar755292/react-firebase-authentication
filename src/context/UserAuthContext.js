import { createContext, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase';

const UserAuthContext = createContext();

function UserAuthContextProvider(props) {

    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() { }

    const value = { register, login, logout }

    return (
        <UserAuthContext.Provider value={value}>
            {props.children}
        </UserAuthContext.Provider>
    )

}

export default UserAuthContextProvider;
export const useUserAuth = () => useContext(UserAuthContext);
