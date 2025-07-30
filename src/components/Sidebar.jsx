// Sidebar.tsx
import { Book, Brush, Bot, Users, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const navItems = [
  { label: "Trang chủ", icon: Home, path: "/" },
  { label: "Học tập", icon: Book, path: "/learning" },
  { label: "Nghệ thuật", icon: Brush, path: "/art" },
  { label: "Robotics", icon: Bot, path: "/robotics" },
  { label: "Cộng đồng", icon: Users, path: "/community" },
];

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-[#F0F9FF] min-h-screen shadow-lg flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo và nút thu gọn */}
      <div className="py-6 px-4 flex items-center justify-between border-b border-gray-200">
        {!collapsed && <img src={logo} alt="Future Kids" className="h-10 object-contain" />}
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="text-gray-500 hover:text-gray-700"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-6">
        <ul className="space-y-2">
          {navItems.map(({ label, icon: Icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#A0E9FF] text-[#1D3557] font-semibold"
                      : "text-gray-700 hover:bg-[#E0F7FF]"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-0" />
                  {!collapsed && <span className="ml-3">{label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
