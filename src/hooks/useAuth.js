import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebaseConfig";

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userCatched) => {
      if (!userCatched) return console.log("no user");
      if (userCatched) return setUser(userCatched);
    });
  }, []);

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  return { user, signIn };
}
