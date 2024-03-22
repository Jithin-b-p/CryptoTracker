import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        coinObject(setCoinData, res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, [id]);

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
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </>
  );
}

export default CoinPage;
