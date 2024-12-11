
import StatsCard from "./StatsCard";
import BarChart from "./Barchart";
import LineChart from "./LineChart";

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
            {/* Notification Icon */}
            <span className="text-gray-600">&#128276;</span>
          </div>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/32"
              alt="Admin"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-2 font-medium">Admin</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6"> {/* Removed flex-wrap to keep items side by side */}
                <div className="w-1/3"> {/* Set width for stats section */}
                    {/* Stats */}
                    <StatsCard title="Students enrolled" value="9,419,418" icon="👨‍🎓"  />
                    <StatsCard title="Courses" value="76,395,167" icon="📚" />
                    <StatsCard title="Tutors" value="28,171" icon="🧑‍🏫" />
                </div>

                <div className="w-2/3"> {/* Set width for the chart */}
                    <div className="bg-white p-6 rounded-lg ">
                    <BarChart />
                    </div>
                </div>
</div>

      {/* Charts */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
       
        <div className="bg-white p-6 rounded-lg ">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
