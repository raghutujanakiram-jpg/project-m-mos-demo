import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
import Team from "./marketing/pages/Team";
// ...



// Product bundle only loads after navigating into /app/*
const ProductApp = Suspense
  ? React.lazy(() => import("./product/ProductApp"))
  : null;

const App = () => {
  return (
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
        <Route path="/team" element={<Team />} />
      </Route>

      {/* OLD /dashboard → new /app/dashboard */}
      <Route
        path="/dashboard"
        element={<Navigate to="/app/dashboard" replace />}
      />

      {/* LOGIN */}
      <Route path="/login" element={<LoginPage />} />

      {/* PRODUCT AREA – protected & lazy loaded */}
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

      {/* CATCH-ALL */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;