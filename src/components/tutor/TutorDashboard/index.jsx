import { Routes, Route } from "react-router-dom";
import Dashboards from "./Dashboard"
import MyCourseDetail from "./MyCourse"
import Messages from "./Messages"
import Account from "./Account"
import Withdrawals from "./withdraw/WIthdrawalAmount"
import Sidebar from "./sidebar"


const index = () => {
  return (
    <div>
         <section className="flex flex-row max-w-screen-xl gap-8 mx-auto my-4 max-lg:flex-col">
      {/* Sidebar */}
      <div className="w-full lg:w-1/5">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full px-4 lg:px-0 lg:w-4/5">
        <Routes>
          <Route path="/dashboard" element={<Dashboards />} />
          <Route path="/my-course" element={<MyCourseDetail />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/withdrawal" element={<Withdrawals />} />
          {/* Add a fallback route */}
          <Route path="*" element={<Dashboards />} />
        </Routes>
      </div>
    </section>
    </div>
  )
}

export default index
