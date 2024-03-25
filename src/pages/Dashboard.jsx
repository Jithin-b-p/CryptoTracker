import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";

import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BacktoTop";
import { fetchCoins } from "../functions/fetchCoins";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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
    getData();
  }, []);

  const getData = async () => {
    const coinData = await fetchCoins();
    if (coinData) {
      setCoins(coinData);
      setPaginatedCoins(coinData.slice(0, 10));
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Search search={search} onSearchChange={handleSearchChange} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent page={page} onPageChange={handlePageChange} />
          )}
        </>
      )}
      <BackToTop />
    </>
  );
}

export default DashboardPage;
