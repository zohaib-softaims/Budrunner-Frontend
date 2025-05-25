import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import MerchantRoutes from "./routes/MerchantRoutes";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/merchant/*" element={<MerchantRoutes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
