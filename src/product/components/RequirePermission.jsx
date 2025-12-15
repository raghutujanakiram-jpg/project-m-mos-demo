import { useAuth } from "../context/AuthContext";
import { canAccess } from "../engine/rbac.engine";

export default function RequirePermission({ module, children }) {
  const { user } = useAuth();
  if (!canAccess(user.role, module)) {
    return (
      <div className="p-8 text-red-400 text-sm">
        Access denied for role: {user.role}
      </div>
    );
  }
  return children;
}