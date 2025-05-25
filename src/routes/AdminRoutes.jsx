import { Routes, Route } from "react-router-dom";
import AdminSidebar from "../components/admin-components/admin-shared-components/AdminSidebar";
import AdminDashboardPage from "../pages/admin-pages/AdminDashboardPage";
import AdminOrdersPage from "../pages/admin-pages/AdminOrdersPage";
import AdminMerchantsPage from "../pages/admin-pages/AdminMerchantsPage";
const AdminRoutes = () => (
  <>
    <AdminSidebar />
    <Routes>
      <Route path="/dashboard" element={<AdminDashboardPage />} />
      <Route path="/orders" element={<AdminOrdersPage />} />
      <Route path="/merchants" element={<AdminMerchantsPage />} />
    </Routes>
  </>
);

export default AdminRoutes;
