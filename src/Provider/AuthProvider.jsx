import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebas/Firebas.init";
import axios from "axios";
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
  };

  const singInOut = () => {
    setUser(null)
    return signOut(auth)
  };

  const updateUserProfile = (updateData) => {
    return updateProfile (auth.currentUser, updateData)
  }

  const carInfo = {
    user,
    loading,
    createUser,
    logInUser,
    googleSignIn,
    singInOut,
    updateUserProfile,
    setUser

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios.post('https://assignment-11-server-phi-seven.vercel.app/jwt', user, {withCredentials: true})
          .then(res => {
            console.log(res.data)
            setLoading(false)
          })
      }
      else {
        axios.post('https://assignment-11-server-phi-seven.vercel.app/logout', {}, {
          withCredentials: true
        })
          .then(res => {
            console.log('logout', res.data)
            setLoading(false)
          })
      }

    })
    return () => {
      unsubscribe()
    }
  }, [])
  
  return (
    <AuthContext.Provider value={carInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;