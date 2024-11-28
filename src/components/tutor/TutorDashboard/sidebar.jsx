import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed w-64 h-screen px-5 bg-gray-100 border-r">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-lg font-bold">Sigvarsity</h1>
      </div>

      {/* Navigation Links */}
      <nav className="pl-6 space-y-4">
        <Link
          to="/tutor-dash/dashboard"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          Dashboard
        </Link>
        <Link
          to="/tutor-dash/my-courses"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          My Course
        </Link>
        <Link
          to="/tutor-dash/messages"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          Messages
        </Link>
        <Link
          to="/tutor-dash/account"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          Account
        </Link>
        <Link
          to="/tutor-dash/withdrawals"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          Withdrawal
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
