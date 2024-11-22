import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthenticationContext = createContext(null);
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const createUserWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const createUserWithGoogle = () => signInWithPopup(auth, provider);
    const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const signOutUser = () => signOut(auth);
    const updateInfo = (name, profile) => updateProfile(auth.currentUser, {
        displayName: name, photoURL: profile,
    })

    useEffect(() => {
        const unmount = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
        })
        return () => {
            unmount();
            setLoading(true);
        }
    }, [])
    const authMethods = {
        createUserWithEmail,
        createUserWithGoogle,
        signInUser,
        signOutUser,
        user,
        isLoading,
        updateInfo,
    }
    return (
        <AuthenticationContext.Provider value={authMethods}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthProvider;
