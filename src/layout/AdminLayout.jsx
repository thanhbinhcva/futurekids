// src/layouts/AdminLayout.jsx
import Sidebar from "../components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 bg-white overflow-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
