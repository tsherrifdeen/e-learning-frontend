/* eslint-disable react/prop-types */


import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility
  const navigate = useNavigate(); // To navigate programmatically

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };

  const closeSidebar = () => {
    setIsOpen(false); // Close the sidebar
  };

  const handleLinkClick = (path) => {
    closeSidebar(); // Close sidebar when a link is clicked
    navigate(path); // Navigate to the desired path
  };

  return (
    <div className="relative">
      {/* Hamburger Button (Visible only on mobile) */}
      <div className={`lg:hidden fixed top-5 left-5 z-50 ${isOpen ? "hidden" : ""}`}>
        <button
          onClick={toggleSidebar}
          className="text-2xl p-2 text-gray-700 hover:text-gray-900 rounded-md focus:outline-none"
        >
          <Icon icon="charm:menu-hamburger" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-md border-r transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block w-64 z-40`}
      >
        {/* Close Button (Visible only on mobile) */}
        <div className="absolute top-5 right-5 lg:hidden">
          <button
            onClick={closeSidebar}
            className="text-2xl p-2 text-gray-700 hover:text-gray-900 rounded-md focus:outline-none"
          >
            <Icon icon="charm:cross" />
          </button>
        </div>

        
        {/* <div className="p-5 border-b">
          <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
        </div> */}

        {/* Navigation Links */}
        <nav className="p-6 space-y-4">
          <SidebarLink
            to="/user/profile"
            icon="line-md:home"
            label="Profile"
            onClick={handleLinkClick}
          />
          <SidebarLink
            to="/user/tutor"
            icon="carbon:play-outline"
            label="Tutor"
            onClick={handleLinkClick}
          />
          <SidebarLink
            to="/user/notifications"
            icon="line-md:account"
            label="Notifications"
            onClick={handleLinkClick}
          />
        </nav>
      </div>
    </div>
  );
};

/**
 * SidebarLink Component
 * Reusable component for individual sidebar links
 */
const SidebarLink = ({ to, icon, label, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={() => onClick(to)}
      className={({ isActive }) =>
        `flex items-center py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md font-medium ${
          isActive ? "bg-midnightBlue text-white font-bold" : ""
        }`
      }
    >
      <Icon icon={icon} className="mr-3 text-lg" />
      {label}
    </NavLink>
  );
};

export default Sidebar;
