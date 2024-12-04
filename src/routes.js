import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";
import IndustriesPage from "./pages/IndustriesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const AppRoutes = () => (
 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
 
);

export default AppRoutes;
