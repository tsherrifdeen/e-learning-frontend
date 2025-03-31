import { Line } from "react-chartjs-2";
import { Icon } from "@iconify/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const revenueData = {
    labels: ["Aug 01", "Aug 10", "Aug 20", "Aug 31"],
    datasets: [
      {
        label: "Revenue",
        data: [0, 1000, 50000, 1000000],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const revenueOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 1000, // Adjust based on your needs
          callback: function (value) {
            if (value >= 1000000) return `${value / 1000000}m`;
            if (value >= 1000) return `${value / 1000}k`;
            return value;
          },
        },
        suggestedMin: 0,
        suggestedMax: 1000000,
      },
    },
  };

  const courseOverviewData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Comments",
        data: [10, 30, 50, 30, 60, 70, 40],
        borderColor: "#ff5722",
        backgroundColor: "rgba(255, 87, 34, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Views",
        data: [30, 70, 80, 60, 90, 100, 80],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Students */}{" "}
        <div className="flex items-center gap-4 p-4 bg-white shadow-sm sm:p-6">
          <div className="p-4 bg-[#EBCCB7]">
            <Icon
              icon="iconoir:profile-circle"
              className="text-3xl text-[#654402]"
            />
          </div>
          <div className="p-4 ">
            <div className="text-2xl font-extrabold">1,674,767</div>
            <div className="text-gray-500 text-md">Students</div>
          </div>
        </div>
        {/* Total Earnings */}
        <div className="flex items-center gap-4 p-4 shadow-sm sm:p-6">
          <div className="p-4 bg-[#E6EFFE]">
            <Icon icon="ph:credit-card" className="text-3xl text-blue-600" />
          </div>
          <div>
            <div className="text-2xl font-extrabold">$7,461,767</div>
            <div className="text-gray-500 text-md">Total Earnings</div>
          </div>
        </div>
        {/* Courses Sold */}
        <div className="flex items-center gap-4 p-4 bg-white shadow-sm sm:p-6">
          <div className="p-4 bg-gray-300">
            <Icon
              icon="iconoir:apple-shortcuts"
              className="text-3xl text-blue-600"
            />
          </div>
          <div>
            <div className="text-2xl font-extrabold">56,489</div>
            <div className="text-gray-500 text-md">Courses Sold</div>
          </div>
        </div>
      </div>

      {/* Revenue & Recent Activity */}
      <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
        <div className="p-4 bg-white rounded-lg shadow-md sm:p-6">
          <h3 className="mb-4 text-lg font-bold">Recent Activity</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-midnightBlue">
                <Icon icon="eva:message-circle-fill" className="text-white" />
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">Kevin</span> comments on your
                  lecture <span className="font-medium">“What is UX”</span> in{" "}
                  <span className="font-medium">
                    “2021 UI/UX design with Figma”
                  </span>
                </p>
                <p className="text-xs text-gray-500">Just now</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-midnightBlue">
                <Icon icon="fontisto:star" className="text-white " />
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">John</span> gave a 5-star rating
                  on your course{" "}
                  <span className="font-medium">
                    “2021 UI/UX design with Figma”
                  </span>
                </p>
                <p className="text-xs text-gray-500">5 mins ago</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-midnightBlue">
                <Icon icon="ion:copy" className="text-white " />
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">Sraboni</span> purchased your
                  course{" "}
                  <span className="font-medium">
                    “2021 UI/UX design with Figma”
                  </span>
                </p>
                <p className="text-xs text-gray-500">6 mins ago</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md sm:p-6">
          <h3 className="text-lg font-bold">Revenue</h3>
          <div className="w-full">
            <Line data={revenueData} options={revenueOptions} />
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="p-4 bg-white rounded-lg shadow-md sm:p-6">
        <h3 className="text-lg font-bold">Course Overview</h3>
        <div className="w-full">
          <Line data={courseOverviewData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
