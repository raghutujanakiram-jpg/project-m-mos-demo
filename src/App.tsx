import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MarketingLayout from "./marketing/layouts/MarketingLayout";
import Home from "./marketing/pages/Home";
import Technology from "./marketing/pages/Technology";
import Solutions from "./marketing/pages/Solutions";
import Products from "./marketing/pages/Products";
import Pricing from "./marketing/pages/Pricing";
import Support from "./marketing/pages/Support";
import Contact from "./marketing/pages/Contact";
import LoginPage from "./auth/LoginPage";
import RequireAuth from "./auth/RequireAuth";

// 🔻 Product bundle only loads AFTER login navigation
const ProductApp = lazy(() => import("./product/ProductApp"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MARKETING SITE */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* LEGACY /dashboard -> new location */}
        <Route
          path="/dashboard"
          element={<Navigate to="/app/dashboard" replace />}
        />

        {/* LOGIN */}
        <Route path="/login" element={<LoginPage />} />

        {/* PRODUCT AREA – only after auth, and lazy loaded */}
        <Route
          path="/app/*"
          element={
            <RequireAuth>
              <Suspense fallback={<div>Loading Project-M…</div>}>
                <ProductApp />
              </Suspense>
            </RequireAuth>
          }
        />

        {/* CATCH-ALL: send any unknown URL to marketing home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}