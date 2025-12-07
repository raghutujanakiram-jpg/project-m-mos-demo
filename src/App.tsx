import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// MARKETING
import MarketingLayout from "./marketing/layouts/MarketingLayout";
import Home from "./marketing/pages/Home";
import Technology from "./marketing/pages/Technology";
import Solutions from "./marketing/pages/Solutions";
import Products from "./marketing/pages/Products";
import Pricing from "./marketing/pages/Pricing";
import Support from "./marketing/pages/Support";
import Contact from "./marketing/pages/Contact";

// AUTH
import LoginPage from "./auth/LoginPage";
import RequireAuth from "./auth/RequireAuth";

// PRODUCT (Lazy)
const ProductApp = lazy(() => import("./product/ProductApp"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing Site */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Legacy redirects */}
        <Route path="/customer" element={<Navigate to="/app/customer" replace />} />
        <Route path="/home-types" element={<Navigate to="/app/home-types" replace />} />
        <Route path="/appliances" element={<Navigate to="/app/appliances" replace />} />

        {/* PRODUCT APP */}
        <Route
          path="/app/*"
          element={
            <RequireAuth>
              <Suspense fallback={<div style={{ color: "white" }}>Loading Project-M…</div>}>
                <ProductApp />
              </Suspense>
            </RequireAuth>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}