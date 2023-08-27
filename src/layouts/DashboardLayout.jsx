import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../pages/dashboard/Sidebar";
import Navbar from "../components/Navbar/Navbar";

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
