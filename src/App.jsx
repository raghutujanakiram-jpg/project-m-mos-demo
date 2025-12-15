import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/* Layout */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Marketing Pages */
import Home from "./marketing/Home";
import Products from "./marketing/Products";
import Solutions from "./marketing/Solutions";
import Pricing from "./marketing/Pricing";
import Technology from "./marketing/Technology";
import Team from "./marketing/Team";
import Funders from "./marketing/Funders";
import Contact from "./marketing/Contact";

/* Product */
import ProductLogin from "./product/Login";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        {/* Marketing */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/team" element={<Team />} />
        <Route path="/funders" element={<Funders />} />
        <Route path="/contact" element={<Contact />} />

        {/* Product */}
        <Route path="/product/login" element={<ProductLogin />} />

        {/* Legacy redirect */}
        <Route path="/login" element={<Navigate to="/product/login" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;