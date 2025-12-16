import { Routes, Route } from "react-router-dom";
import RequireAuth from "./product/RequireAuth";
import ProductShell from "./product/ProductShell";
import ProductLogin from "./product/Login";
import Dashboard from "./product/Dashboard";

export default function App() {
  return (
    <Routes>
      {/* MARKETING ROUTES stay untouched */}

      <Route path="/product/login" element={<ProductLogin />} />

      <Route
        path="/product"
        element={
          <RequireAuth>
            <ProductShell />
          </RequireAuth>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}