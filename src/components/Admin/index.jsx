import { Routes, Route } from "react-router-dom";
import MyCourseDetail from "./Courses/Courses";

import Account from "./Account/Account";
import Earnings from "./Earnings/Earnin";
import Sidebar from "./Sidevar";
import Dashboard from "./Dashboard/Dashboard";

const Index = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="lg:w-1/5 w-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-4/5">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-courses" element={<MyCourseDetail />} />
          
          <Route path="/account" element={<Account />} />
          <Route path="/withdrawals" element={<Earnings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;
