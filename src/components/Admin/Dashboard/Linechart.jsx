import { Line } from "react-chartjs-2";


const LineChart = () => {


    
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
    <div>
       {/* Course Overview */}
  <div className="bg-white p-4 sm:p-6 rounded-lg ">
    <h3 className="text-lg font-bold">Course Overview</h3>
    <div className="w-full">
      <Line data={courseOverviewData} options={{ responsive: true }} />
    </div>
  </div>
    </div>
  );
};

export default LineChart;
