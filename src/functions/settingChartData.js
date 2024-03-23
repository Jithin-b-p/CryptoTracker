import { convertDate } from "./convertDate";

export default function settingChartData(setChartData, coinPrices) {
  setChartData({
    labels: coinPrices.map((price) => convertDate(price[0])),
    datasets: [
      {
        data: coinPrices.map((price) => price[1]),
        borderColor: "#3a80e9",
        borderWidth: 2,
        fill: true,
        tension: 0.25,
        backgroundColor: "rgba(58, 128, 233, 0.1)",
        pointRadius: 0,
      },
    ],
  });
}
