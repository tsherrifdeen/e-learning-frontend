import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleLinkClick = (path) => {
    closeSidebar();
    navigate(path);
  };

  const navLinks = [
    {
      to: "/tutor/dashboard",
      icon: "line-md:home",
      label: "Dashboard",
    },
    {
      to: "/tutor/courses",
      icon: "carbon:play-outline",
      label: "My Course",
    },
    {
      to: "/tutor/messages",
      icon: "mage:message-round",
      label: "Messages",
    },
    {
      to: "/tutor/account",
      icon: "line-md:account",
      label: "Account",
    },
    {
      to: "/tutor/withdrawals",
      icon: "ri:wallet-line",
      label: "Withdrawal",
    },
  ];

  return (
    <div>
      {/* Hamburger Button */}
      <div
        className={`lg:hidden fixed top-5 left-5 z-50 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 text-2xl text-black rounded-md"
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
        {/* Close Icon */}
        <div className="absolute z-50 top-5 right-5 lg:hidden">
          <button
            onClick={closeSidebar}
            className="p-2 text-2xl text-black rounded-md"
          >
            <Icon icon="charm:cross" />
          </button>
        </div>

        {/* Header */}
        <div className="p-6">
          <h1 className="text-lg font-bold">Sigvarsity</h1>
        </div>

        {/* Navigation */}
        <nav className="pl-6 space-y-4">
          {navLinks.map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => handleLinkClick(to)}
              className={({ isActive }) =>
                `flex items-center py-2 text-gray-700 font-medium ${
                  isActive ? "bg-midnightBlue text-white font-bold" : ""
                } rounded-md p-3`
              }
            >
              <Icon icon={icon} className="mr-3" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
