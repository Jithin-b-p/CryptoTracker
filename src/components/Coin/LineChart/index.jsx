/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
  };
  return <Line data={chartData} options={options} />;
}

export default LineChart;
