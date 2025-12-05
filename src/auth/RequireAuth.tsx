import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../auth/useAuth";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAuthenticated = true; // TODO: wire to real auth state

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
