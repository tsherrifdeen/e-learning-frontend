import Header from "../Header";
import StatsCard from "./StatsCard";
import BarChart from "./Barchart";
import LineChart from "./LineChart";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Stats Section */}
          <div className="w-full md:w-1/3">
            <StatsCard title="Students enrolled" value="9,419,418" icon="👨‍🎓" />
            <StatsCard title="Courses" value="76,395,167" icon="📚" />
            <StatsCard title="Tutors" value="28,171" icon="🧑‍🏫" />
          </div>

          {/* Bar Chart Section */}
          <div className="w-full md:w-2/3">
            <div className="bg-white p-6 rounded-lg">
              <BarChart />
            </div>
          </div>
        </div>

        {/* Line Chart */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
