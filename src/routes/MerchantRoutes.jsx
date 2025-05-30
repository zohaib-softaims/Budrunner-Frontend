import { Routes, Route } from "react-router-dom";
import MerchantSidebar from "../components/merchant-components/merchant-shared-components/MerchantSidebar";
import MerchantDashboardPage from "../pages/merchant-pages/MerchantDashboardPage";
import MerchantOrdersPage from "../pages/merchant-pages/MerchantOrdersPage";
import { MerchantMenuManagePage } from "../pages/merchant-pages/MerchantMenuManagePage";
import { MerchantSettingsPage } from "../pages/merchant-pages/MerchantSettingsPage";

const MerchantRoutes = () => (
  <>
    <MerchantSidebar />
    <Routes>
      <Route path="/dashboard" element={<MerchantDashboardPage />} />
      <Route path="/orders" element={<MerchantOrdersPage />} />
      <Route path="/menu-manager" element={<MerchantMenuManagePage />} />
      <Route path="/settings" element={<MerchantSettingsPage />} />
    </Routes>
  </>
);

export default MerchantRoutes;
