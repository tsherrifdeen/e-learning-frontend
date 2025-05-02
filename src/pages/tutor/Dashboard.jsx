import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/tutor/TutorDashboard/Sidebar";
import Dashboard from "../../components/tutor/TutorDashboard/Dashboard";
import MyCourses from "../../components/tutor/courses/Courses";
import Messages from "../../components/tutor/messages/messages";
import AccountDetailsForm from "../../components/tutor/TutorDashboard/withdraw/WIthdrawalAmount";
import WithdrawPage from "../../components/tutor/TutorDashboard/withdraw/Withdraw";
import ViewCourse from "../../components/tutor/courses/CourseView";
import HeaderTutor from "../../components/tutor/common/Header";

const TutorDashboard = () => {
  return (
    <div className="flex flex-col h-screen lg:flex-row font-poppins">
      {/* Sidebar */}
      <div className="w-full lg:w-1/5">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-4/5">
        <HeaderTutor />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<MyCourses />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/account" element={<AccountDetailsForm />} />
          <Route path="/withdrawals" element={<WithdrawPage />} />
          <Route path="/courses/view" element={<ViewCourse />} />
        </Routes>
      </div>
    </div>
  );
};

export default TutorDashboard;
