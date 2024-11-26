import { Routes, Route } from "react-router-dom";
import MyCourseDetail from "../My courses/mycourses";
import Account from "../Account/Account";
import Withdrawals from "../TutorDashboard/withdraw/Withdraw";
import Sidebar from "./sidebar";

const Index = () => {
  return (
    <div>
      <section className="flex">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full px-4 lg:px-0 lg:w-4/5">
          <Routes>
            {/* Define routes for each component */}
            <Route path="/my-courses" element={<MyCourseDetail />} />
            <Route path="/account" element={<Account />} />
            <Route path="/withdrawals" element={<Withdrawals />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default Index;
