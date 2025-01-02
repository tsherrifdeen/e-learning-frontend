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
    <div>
      {/* Hamburger Button for mobile (only shown when sidebar is closed) */}
      <div className={`lg:hidden fixed top-5 left-5 z-50 ${isOpen ? 'hidden' : ''}`}>
        <button
          onClick={toggleSidebar}
          className="text-2xl p-2 text-black rounded-md"
        >
          <Icon icon="charm:menu-hamburger" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white border-r transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block w-64 px-5 z-40`}
      >
        {/* Sidebar Close (Cancel) Icon */}
        <div className="absolute top-5 right-5 lg:hidden z-50">
          <button
            onClick={closeSidebar}
            className="text-2xl p-2 text-black rounded-md"
          >
            <Icon icon="charm:cross" />
          </button>
        </div>

        
        {/* Navigation Links */}
        <nav className="pl-6 space-y-4">
          <NavLink
            to="/user/profile"
            onClick={() => handleLinkClick("/user/profile")}
            className={({ isActive }) =>
              `flex items-center py-2 text-gray-700 font-medium ${
                isActive ? "bg-midnightBlue text-white font-bold" : ""
              } rounded-md p-3`
            }
          >
            <Icon icon="line-md:home" className="mr-3" />
            Profile
          </NavLink>
          <NavLink
            to="/user/tutor"
            onClick={() => handleLinkClick("/user/tutor")}
            className={({ isActive }) =>
              `flex items-center py-2 text-gray-700 font-medium ${
                isActive ? "bg-midnightBlue text-white font-bold" : ""
              } rounded-md p-3`
            }
          >
            <Icon icon="carbon:play-outline" className="mr-3" />
            Tutor
          </NavLink>
          
          <NavLink
            to="/user/notifications"
            onClick={() => handleLinkClick("/user/notifications")}
            className={({ isActive }) =>
              `flex items-center py-2 text-gray-700 font-medium ${
                isActive ? "bg-midnightBlue text-white font-bold" : ""
              } rounded-md p-3`
            }
          >
            <Icon icon="line-md:account" className="mr-3" />
            Notifications
          </NavLink>
          
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
