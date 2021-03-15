import React, { useContext, useEffect, useState } from "react";
import auth from "../config/firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const loginEmailPassword = async (email, password) => {
    try {
      const login = await auth.signInWithEmailAndPassword(email, password);
      console.log(login);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          throw new Error("Invalid email").toString();
        case "auth/wrong-password":
          throw new Error("Wrong password").toString();
        case "auth/user-not-found":
          throw new Error("User not found").toString();
        case "auth/user-disabled":
          throw new Error("User has been disabled").toString();
        default:
          throw new Error(
            "Something bad happened, please try again"
          ).toString();
      }
    }
  };

  const logout = async () => {
    try {
      auth.logout();

      console.log(logout);
    } catch (error) {
      throw new Error().toString();
    }
  };

  useEffect(() => {
    const unsubs = auth.onAuthStateChanged((user) => {
      // const { uid, email, displayName, phoneNumber } = user;
      // setCurrentUser({ uid, email, displayName, phoneNumber });
      setCurrentUser(user);
      setLoading(false);

      // console.log(uid, email, displayName, phoneNumber);
    });

    return unsubs;
  }, []);

  const value = {
    logout,
    currentUser,
    loginEmailPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
