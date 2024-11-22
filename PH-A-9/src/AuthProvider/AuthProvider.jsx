import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthenticationContext = createContext(null);
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const createUserWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const createUserWithGoogle = () => signInWithPopup(auth, provider);
    const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const signOutUser = () => signOut(auth);

    useEffect(() => {
        const unmount = onAuthStateChanged(auth, user => {
            setUser(user);
        })
        return () => {
            unmount();
        }
    }, [])
    const authMethods = {
        createUserWithEmail,
        createUserWithGoogle,
        signInUser,
        signOutUser,
        user,
    }
    return (
        <AuthenticationContext.Provider value={authMethods}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthProvider;
