import { Link, useLocation } from "react-router-dom";
import { Home, TrendingUp, Package, Menu, ChevronDown } from "lucide-react";

const MerchantSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "sales", label: "Sales", icon: TrendingUp, path: "/sales" },
    { id: "orders", label: "Orders", icon: Package, path: "/orders" },
    { id: "menu-manager", label: "Menu Manager", icon: Menu, path: "/menu-manager" },
  ];

  const isActive = (path) => {
    if (path === "/" && (location.pathname === "/" || location.pathname === "/home")) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <div className="fixed left-0 top-0 w-72 h-screen bg-[#0f0f0f] text-white flex flex-col z-50">
      {/* Header */}
      <div className="px-6 py-6 text-center">
        <h1 className="text-[45.91px] font-normal uppercase leading-[100%] text-white" style={{ fontFamily: "'Jaro', sans-serif" }}>
          BUDRUNNER
        </h1>
        <p className="text-xs text-gray-400 mt-1">MERCHANTS BETA</p>
      </div>

      {/* Store Selector */}
      <div className="px-4 mb-4">
        <p className="text-xs mb-3">Store</p>
        <div className="bg-[#ffffff]/5 rounded-lg p-3">
          <button className="w-full flex items-center justify-between text-sm text-white">
            <span>Smokeshop Store 1</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`w-full flex items-center px-3 py-3 text-sm rounded-md transition-colors relative ${
                    active ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <Icon size={18} className="mr-3 flex-shrink-0" />
                  <span className="flex-1 text-left">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MerchantSidebar;
