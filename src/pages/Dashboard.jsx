import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

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
      <Search search={search} onSearchChange={handleSearchChange} />
      <TabsComponent coins={filteredCoins} />
    </>
  );
}

export default DashboardPage;
