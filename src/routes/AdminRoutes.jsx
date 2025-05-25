import { Routes, Route } from "react-router-dom";
import { Sidebar } from "../components/admin-components/admin-shared-components/Sidebar";
import { AdminDashboard } from "../pages/admin-pages/AdminDashboard";
import { AdminOrders } from "../pages/admin-pages/AdminOrders";
import { AdminMerchants } from "../pages/admin-pages/AdminMerchants";
const AdminRoutes = () => (
  <>
    <Sidebar />
    <Routes>
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/orders" element={<AdminOrders />} />
      <Route path="/merchants" element={<AdminMerchants />} />
    </Routes>
  </>
);

export default AdminRoutes;
