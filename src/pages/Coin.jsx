import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoinInfo from "../components/Coin/CoinInfo";
import LineChart from "../components/Coin/LineChart";
import SelectDays from "../components/Coin/SelectDays";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import settingChartData from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState([]);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    const getData = async () => {
      const data = await getCoinData(id);
      if (data) {
        coinObject(setCoinData, data);
        const coinPrices = await getCoinPrices(id, days, priceType);
        if (coinPrices.length > 0) settingChartData(setChartData, coinPrices);
        setIsLoading(false);
      }
    };

    if (!id) return;
    getData();
  }, [id, days, priceType]);

  const handlePriceTypeChange = (e, newType) => {
    setIsLoading(true);
    setPriceType(newType);
  };

  const handleDaysChange = (e) => {
    setIsLoading(true);
    setDays(e.target.value);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper" style={{ paddingBlock: "3rem" }}>
            <SelectDays days={days} onDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              onPriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </>
  );
}

export default CoinPage;
