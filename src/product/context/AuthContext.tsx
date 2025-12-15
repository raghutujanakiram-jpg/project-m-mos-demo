import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const ROLES = {
  OWNER: "owner",
  ADMIN: "admin",
  MEMBER: "member",
  GUEST: "guest",
  READONLY: "readonly",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Demo Owner",
    role: ROLES.OWNER,
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);