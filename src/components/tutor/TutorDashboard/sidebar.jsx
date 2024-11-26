import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 border-r px-5 fixed">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-lg font-bold">Sigvarsity</h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-4 pl-6">
        <Link
          to="/Dashboard"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          Dashboard
        </Link>
        <Link
          to="/mycourse"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          My Course
        </Link>
        <Link
          to="/messages"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          Messages
        </Link>
        <Link
          to="/account"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          Account
        </Link>
        <Link
          to="/withdrawal"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          Withdrawal
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
