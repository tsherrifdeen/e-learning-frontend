import { Routes, Route } from "react-router-dom";
import Profile from "./Profile/ProfileSettings"
import Tutor from "./Tutor/Tutor"
import Notifications from "./Notifications/Notification"
import Sidebar  from "./Sidebar";
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;
