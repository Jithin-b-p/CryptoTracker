import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageChange = (e, value) => {
    setPage(value);
    const prevIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(prevIndex, prevIndex + 10));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        setCoins(res.data);
        setPaginatedCoins(res.data.slice(0, 10));
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      <Header />
      <Search search={search} onSearchChange={handleSearchChange} />
      <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
      <PaginationComponent page={page} onPageChange={handlePageChange} />
    </>
  );
}

export default DashboardPage;
