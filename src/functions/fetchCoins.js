import axios from "axios";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

export const fetchCoins = () => {
  const myCoins = axios
    .get(API_URL)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err.message));

  return myCoins;
};
