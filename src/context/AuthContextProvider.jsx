import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    auth.onIdTokenChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) history.push("/chat");
    });
  }, [user, history]);

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
