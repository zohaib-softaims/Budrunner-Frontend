import { Link, useLocation } from "react-router-dom";
import { Home, Package, Store, Users, Settings, ChevronDown } from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "orders", label: "Orders", icon: Package, path: "/orders" },
    { id: "merchants", label: "Merchants", icon: Store, path: "/merchants" },
    { id: "customers", label: "Customers", icon: Users, path: "/customers", badge: "5" },
    { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
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
        <p className="text-xs text-gray-400 mt-1">ADMIN PORTAL</p>
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
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Admin Section at Bottom */}
      <div className="px-4 py-4">
        <button className="bg-[#ffffff]/5 w-full flex items-center justify-between px-3 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors">
          <span>Admin</span>
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
