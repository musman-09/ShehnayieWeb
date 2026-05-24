import { Routes, Route, Navigate } from "react-router-dom";
import AdminPanel from "../pages/admin/AdminPanel";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="*" element={<Navigate to="/admin" />} />
    </Routes>
  );
};

export default AdminRoutes;
