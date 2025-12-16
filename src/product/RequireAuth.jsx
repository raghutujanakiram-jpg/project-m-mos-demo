import { Navigate } from "react-router-dom";
import { useAuthStore } from "./authStore";

export default function RequireAuth({ children }) {
  const token = useAuthStore((s) => s.token);

  if (!token) {
    return <Navigate to="/product/login" replace />;
  }

  return children;
}