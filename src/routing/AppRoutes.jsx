import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ProductDetail from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import AdminPanel from "../pages/AdminPanel";
import AdminOrders from "../pages/AdminPanel/AdminOrders";
import AdminProducts from "../pages/AdminPanel/AdminProducts";
import AdminUsers from "../pages/AdminPanel/AdminUsers";

function AppRoutes() {
  const role = useSelector((state) => state.counter.role);
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:category" element={<ProductsPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />

      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      {/* admin only route */}
      <Route
        path="/admin"
        element={role === "admin" ? <AdminPanel /> : <Navigate to="/home" />}
      />

      <Route
        path="/admin"
        element={role === "admin" ? <AdminPanel /> : <Navigate to="/home" />}
      />
      <Route
        path="/admin/orders"
        element={role === "admin" ? <AdminOrders /> : <Navigate to="/home" />}
      />
      <Route
        path="/admin/products"
        element={role === "admin" ? <AdminProducts /> : <Navigate to="/home" />}
      />

      <Route
        path="/admin/users"
        element={role === "admin" ? <AdminUsers /> : <Navigate to="/home" />}
      />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default AppRoutes;
