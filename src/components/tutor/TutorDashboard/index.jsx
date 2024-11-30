import { Routes, Route } from "react-router-dom";
import MyCourseDetail from "../My courses/mycourses";
import Messages from "../messages/messages";
import Account from "../Account/Account";
import Withdrawals from "../TutorDashboard/withdraw/Withdraw";
import Sidebar from "./sidebar";
import Dashboard from "../Dahboard/index";

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
          <Route path="/messages" element={<Messages />} />
          <Route path="/account" element={<Account />} />
          <Route path="/withdrawals" element={<Withdrawals />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;
