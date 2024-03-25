import { convertDate } from "./convertDate";

export default function settingMultilineChartData(
  setChartData,
  coinPrices1,
  coinPrices2
) {
  setChartData({
    labels: coinPrices1.map((price) => convertDate(price[0])),
    datasets: [
      {
        label: "crypto1",
        data: coinPrices1.map((price) => price[1]),
        borderColor: "#3a80e9",
        borderWidth: 2,
        fill: false,
        tension: 0.25,
        pointRadius: 0,
        yAxisID: "crypto1",
      },
      {
        label: "crypto2",
        data: coinPrices2.map((price) => price[1]),
        borderColor: "#61c96f",
        borderWidth: 2,
        fill: false,
        tension: 0.25,
        pointRadius: 0,
        yAxisID: "crypto2",
      },
    ],
  });
}
