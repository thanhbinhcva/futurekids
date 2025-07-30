import React, { useState, useEffect, useRef } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { label: "HomePage", path: "home" },
    { label: "Robotics", path: "robotics" },
    { label: "Art", path: "services" },
    { label: "Progaming", path: "contact" },
    { label: "Contact", path: "contact" },
    { label: "About Us", path: "about" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-white sticky top-0 z-50 px-4 lg:px-16 py-4 shadow">
      {/* Dòng trên: Logo - Search - Đăng nhập/Đăng ký */}
      <div className="flex justify-between items-center gap-6 flex-wrap">
        {/* Logo */}
        <img src={logo} alt="FutureKids Logo" className="h-24 w-auto object-contain" />

        {/* Search Box */}
        <div className="flex-grow">
          <div className="flex items-center w-full border rounded-full px-4 py-2 max-w-5xl mx-auto">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder='Tìm kiếm "trò chơi toán học"...'
              className="flex-grow outline-none text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="/login" className="text-gray-700 hover:text-blue-600">
            Đăng nhập
          </a>
          <a
            href="/signup"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full"
          >
            Đăng ký
          </a>
        </div>
      </div>

      {/* Dòng dưới: Menu Items */}
      <ul className="flex justify-center flex-wrap gap-16">
        {navItems.map(({ label, path }) => {
          if (label === "Tra cứu") {
            return (
              <a
                key={path}
                href="/tracking"
                className="text-black uppercase font-bold cursor-pointer hover:text-cyan-600 text-[15px]"
              >
                {label}
              </a>
            );
          }

          return (
            <Link
              key={path}
              className="text-black uppercase font-bold cursor-pointer hover:text-cyan-600 text-[15px]"
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
    </nav>
  );
};

export default Header;
