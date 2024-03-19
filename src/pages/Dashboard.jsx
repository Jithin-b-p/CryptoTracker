import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        setCoins(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      <Header />
      <TabsComponent coins={coins} />
    </>
  );
}

export default DashboardPage;
