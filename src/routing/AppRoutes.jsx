import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ProductDetail from "../pages/ProductDetails";
import Cart from "../pages/Cart";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/products/:category" element={<ProductsPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />

      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default AppRoutes;
