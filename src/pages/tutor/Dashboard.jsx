import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/tutor/TutorDashboard/sidebar";
import Dashboard from "../../components/tutor/TutorDashboard/Dashboard";
import MyCourses from "../../components/tutor/courses/mycourses";
import Messages from "../../components/tutor/messages/messages";
import AccountDetailsForm from "../../components/tutor/TutorDashboard/withdraw/WIthdrawalAmount";
import WithdrawPage from "../../components/tutor/TutorDashboard/withdraw/Withdraw";

const TutorDashboard = () => {
  return (
    <div className="flex flex-col h-screen lg:flex-row font-poppins">
      {/* Sidebar */}
      <div className="w-full lg:w-1/5">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-4/5">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/account" element={<AccountDetailsForm />} />
          <Route path="/withdrawals" element={<WithdrawPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default TutorDashboard;
