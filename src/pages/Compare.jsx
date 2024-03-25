import { useEffect, useState } from "react";

import Header from "../components/Common/Header";
import SelectCoinsContainer from "../components/Compare/SelectCoinsContainer";
import { fetchCoins } from "../functions/fetchCoins";
import Loader from "../components/Common/Loader";
import CompareListContainer from "../components/Compare/CompareListContainer";
import { getCoinPrices } from "../functions/getCoinPrices";
import MultiLineChart from "../components/Compare/MultiLineChart";
import settingMultilineChartData from "../functions/settingMultilineChartData";
import TogglePriceType from "../components/Coin/PriceType";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/coinObject";

function ComparePage() {
  const [fullCoins, setFullCoins] = useState([]);
  const [cryptoOneData, setCryptoOneData] = useState({});
  const [cryptoTwoData, setCryptoTwoData] = useState({});
  const [cryptoOne, setCryptoOne] = useState("bitcoin");
  const [cryptoTwo, setCryptoTwo] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data1 = await getCoinData(cryptoOne);
      const data2 = await getCoinData(cryptoTwo);
      const coinPricesOne = await getCoinPrices(cryptoOne, days, priceType);
      const coinPricesTwo = await getCoinPrices(cryptoTwo, days, priceType);

      settingMultilineChartData(setChartData, coinPricesOne, coinPricesTwo);
      coinObject(setCryptoOneData, data1);
      coinObject(setCryptoTwoData, data2);
      setLoading(false);
    };
    getData();
  }, [cryptoOne, cryptoTwo, days, priceType]);

  useEffect(() => {
    const getData = async () => {
      const coinsData = await fetchCoins();
      console.log(coinsData);
      setFullCoins(coinsData);
    };
    getData();
  }, []);

  const handlePriceTypeChange = (e, newType) => {
    setLoading(true);
    setPriceType(newType);
    setLoading(false);
  };

  const handleDaysChange = (e) => {
    setLoading(true);
    setDays(e.target.value);
    setLoading(false);
  };

  const handleCryptoOneChange = (e) => {
    setLoading(true);
    setCryptoOne(e.target.value);
    setLoading(false);
  };

  const handleCryptoTwoChange = (e) => {
    setLoading(true);
    setCryptoTwo(e.target.value);
    setLoading(false);
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <SelectCoinsContainer
            fullCoins={fullCoins}
            valueOne={cryptoOne}
            valueTwo={cryptoTwo}
            days={days}
            onDaysChange={handleDaysChange}
            onSelectionChangeOne={handleCryptoOneChange}
            onSelectionChangeTwo={handleCryptoTwoChange}
          />
          <CompareListContainer
            cryptoOneData={cryptoOneData}
            cryptoTwoData={cryptoTwoData}
          />

          <div className="grey-wrapper">
            <TogglePriceType
              priceType={priceType}
              onPriceTypeChange={handlePriceTypeChange}
            />
            <MultiLineChart chartData={chartData} priceType={priceType} />
          </div>

          <CoinInfo heading={cryptoOneData.name} desc={cryptoOneData.desc} />
          <CoinInfo heading={cryptoTwoData.name} desc={cryptoTwoData.desc} />
        </>
      )}
    </>
  );
}

export default ComparePage;
