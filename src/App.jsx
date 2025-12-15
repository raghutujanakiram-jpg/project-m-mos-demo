import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./marketing/Home";
import Technology from "./marketing/Technology";
import Products from "./marketing/Products";
import Solutions from "./marketing/Solutions";
import Pricing from "./marketing/Pricing";
import Team from "./marketing/Team";
import Investors from "./marketing/Investors";
import Contact from "./marketing/Contact";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;