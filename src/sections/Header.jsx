import React, { useState, useEffect, useRef } from "react";
import { FaXmark, FaBars, FaBell } from "react-icons/fa6";
import { TbRulerMeasure } from "react-icons/tb";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // 👈 tham chiếu đến khu vực avatar + menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const navItems = [
    { label: "Trang chủ", path: "home" },
    { label: "Về chúng tôi", path: "about" },
    { label: "Tra cứu", path: "tracking" },
    { label: "Dịch vụ", path: "services" },
    { label: "Liên hệ", path: "contact" },
  ];

  // 👇 Auto close dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-4 py-4 sticky top-0 z-50 relative">
      {/* Logo */}
      <h1 className="text-black md:text-4xl text-3xl font-bold font-rubik">
        TT <span className="text-red-500 italic">Express</span>
      </h1>

      {/* Menu items */}
    <ul className="lg:flex justify-center items-center gap-6 hidden">
      {navItems.map(({ label, path }) => {
        if (label === "Tra cứu") {
          return (
            <a
              key={path}
              href="/tracking"
              className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-red-400 hover:text-black text-[15px]"
            >
              {label}
            </a>
          );
        }

        return (
          <Link
            key={path}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-red-400 hover:text-black text-[15px]"
            duration={500}
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {label}
          </Link>
        );
      })}
    </ul>

      {/* Notification + Avatar + Dropdown */}
      <div className="hidden lg:flex items-center gap-4 relative" ref={dropdownRef}>
        <FaBell className="text-black text-xl cursor-pointer hover:text-blue-500" />

        <div className="relative">
          <img
            src="https://i.pravatar.cc/100" // ảnh avatar giả
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 cursor-pointer"
            onClick={toggleDropdown}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                onClick={() => {
                  setIsDropdownOpen(false);
                  alert("Chuyển đến Hồ sơ");
                }}
              >
                Hồ sơ
              </button>
              <button
                className="w-full text-red-500 text-left px-4 py-2 hover:bg-gray-100 text-black"
                onClick={() => {
                  setIsDropdownOpen(false);
                  alert("Đăng xuất...");
                }}
              >
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
