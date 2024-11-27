
// import Dashboards from "./Dashboard"
import MyCourseDetail from "../My courses/mycourses"
// import Messages from "./Messages"
import Account from "../Account/Account"
import Withdrawals from "../TutorDashboard/withdraw/Withdraw"
import Sidebar from "./sidebar"


const index = () => {
  return (
    <div>
         <section className="flex    ">
      {/* Sidebar */}
      <div className="w-full lg:w-1/5">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full px-4 lg:px-0 lg:w-4/5">
        {/* <Dashboards/> */}
        <MyCourseDetail/>
        {/* <Messages/> */}
        <Account/>
        <Withdrawals/>
      </div>
    </section>
    </div>
  )
}

export default index
