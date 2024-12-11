import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Sample data for the bar chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Total Revenue",
        data: [500, 600, 700, 800, 900, 682.5, 550, 650, 780, 820, 950, 1050],
        backgroundColor: "#5865F2", // Color for the bars
        borderRadius: 5, // Rounded corners for the bars
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Total Revenue Over 12 Months",
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `$${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        max: 1200,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true, // Automatically skip ticks to avoid overlap
        },
      },
    },
    // Modify bar width (category percentage and bar percentage)
    elements: {
      bar: {
        categoryPercentage: 0.7, // Adjust the width of the bars (default is 0.8)
        barPercentage: 0.8, // Adjust the width of individual bars (default is 0.9)
      },
    },
  };

  return (
    <div className="w-3/4 mx-auto"> {/* Control the width of the chart */}
      <h4 className="text-lg font-bold mb-4">Total Revenue</h4>
      <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
        <span>Month</span>
      </div>
      {/* Render the bar chart */}
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
