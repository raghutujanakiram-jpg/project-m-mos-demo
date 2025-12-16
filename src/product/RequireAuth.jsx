import { Navigate } from "react-router-dom";
import { useAuthStore } from "./authStore";

export default function RequireAuth({ children }) {
  const isAuthenticated = useAuthStore(
    (s) => s.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/product/login" replace />;
  }

  return children;
}