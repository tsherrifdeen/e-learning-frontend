
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
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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
    <div className="container mx-auto py-8 px-4">
  {/* Top Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {/* Students */}
    <div className="flex items-center bg-white p-4 sm:p-6 rounded-lg shadow-md gap-4">
      <div className="p-4 rounded-full bg-orange-400">
        <Icon icon="iconoir:profile-circle" className="text-orange-200 text-3xl" />
      </div>
      <div>
        <div className="text-2xl font-extrabold">1,674,767</div>
        <div className="text-md text-gray-500">Students</div>
      </div>
    </div>

    {/* Total Earnings */}
    <div className="flex items-center bg-white p-4 sm:p-6 rounded-lg shadow-md gap-4">
      <div className="p-4 rounded-full bg-blue-100">
        <Icon icon="ph:credit-card" className="text-blue-600 text-3xl" />
      </div>
      <div>
        <div className="text-2xl font-extrabold">$7,461,767</div>
        <div className="text-md text-gray-500">Total Earnings</div>
      </div>
    </div>

    {/* Courses Sold */}
    <div className="flex items-center bg-white p-4 sm:p-6 rounded-lg shadow-md gap-4">
      <div className="p-4 rounded-full bg-gray-300">
        <Icon icon="iconoir:apple-shortcuts" className="text-blue-600 text-3xl" />
      </div>
      <div>
        <div className="text-2xl font-extrabold">56,489</div>
        <div className="text-md text-gray-500">Courses Sold</div>
      </div>
    </div>
  </div>

  {/* Revenue & Recent Activity */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-4">
          <div className="bg-midnightBlue p-3 rounded-full">
            <Icon icon="eva:message-circle-fill" className="text-white" />
          </div>
          <div>
            <p className="text-sm">
              <span className="font-semibold">Kevin</span> comments on your lecture{" "}
              <span className="font-semibold">“What is UX”</span> in{" "}
              <span className="font-semibold">“2021 UI/UX design with Figma”</span>
            </p>
            <p className="text-xs text-gray-500">Just now</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
            <div className="bg-midnightBlue p-2 rounded-full">
            <Icon icon="fontisto:star" className="text-white " />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-semibold">John</span> gave a 5-star rating on your course{" "}
                <span className="font-semibold">“2021 UI/UX design with Figma”</span>
              </p>
              <p className="text-xs text-gray-500">5 mins ago</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="bg-midnightBlue p-2 rounded-full">
            <Icon icon="ion:copy" className="text-white "/>
            </div>
            <div>
              <p className="text-sm">
                <span className="font-semibold">Sraboni</span> purchased your course{" "}
                <span className="font-semibold">“2021 UI/UX design with Figma”</span>
              </p>
              <p className="text-xs text-gray-500">6 mins ago</p>
            </div>
          </li>
      </ul>
    </div>

    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Revenue</h3>
      <div className="w-full">
        <Line data={revenueData} options={revenueOptions} />
      </div>
    </div>
  </div>

  {/* Course Overview */}
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-bold">Course Overview</h3>
    <div className="w-full">
      <Line data={courseOverviewData} options={{ responsive: true }} />
    </div>
  </div>
</div>

  );
};

export default Dashboard;
