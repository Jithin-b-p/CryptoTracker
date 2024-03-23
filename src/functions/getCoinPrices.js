import axios from "axios";

export const getCoinPrices = (id, days) => {
  const coinPrices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily`
    )
    .then((res) => {
      return res.data.prices;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return coinPrices;
};
