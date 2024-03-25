/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { convertNumber } from "../../../functions/convertNumber";
function MultiLineChart({ chartData, priceType }) {
  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      crypto1: {
        type: "linear",
        display: true,
        position: "left",
        grid: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (priceType === "prices" || priceType === "market_caps") {
              return "₹" + convertNumber(value);
            }
            return convertNumber(value);
          },
        },
      },
      crypto2: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (priceType === "prices" || priceType === "market_caps") {
              return "₹" + convertNumber(value);
            }
            return convertNumber(value);
          },
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

export default MultiLineChart;
