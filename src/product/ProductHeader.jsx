import { useAuthStore } from "./authStore";
import { useNavigate } from "react-router-dom";

export default function ProductHeader() {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/product/login");
  };

  return (
    <header className="flex justify-end p-4">
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded bg-red-600 text-white"
      >
        Logout
      </button>
    </header>
  );
}