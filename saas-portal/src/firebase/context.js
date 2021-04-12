//1.
import React, { useEffect, useState } from "react";
import app from "./config";

//2.
export const AuthContext = React.createContext();

// util
const util = require('util')

//3.
export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log("user auth state changed: " + userCred.email);
      }
      setUser(userCred)
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};