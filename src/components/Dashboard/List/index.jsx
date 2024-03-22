/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";
import { Link } from "react-router-dom";

function List({ coin }) {
  const priceChange = coin.price_change_percentage_24h;
  return (
    <Link to={`/coin/${coin.id}`}>
      <li
        className={`${styles.list_item} ${
          priceChange < 0 ? styles.decreasing : styles.increasing
        }`}
      >
        <div className={styles.item_head}>
          <Tooltip title="coin logo" arrow>
            <img
              className={styles.head_image}
              src={coin.image}
              alt=""
              width={40}
              height={40}
              draggable="false"
            />
          </Tooltip>
          <Tooltip title="coin info" arrow>
            <div className={styles.head_titles}>
              <span className={styles.item_symbol}>{coin.symbol}</span>
              <span className={styles.item_name}>{coin.name}</span>
            </div>
          </Tooltip>
        </div>

        <div className={styles.price_change_indicator}>
          <Tooltip title="price change for last 24hrs" arrow>
            <div
              className={`${
                priceChange < 0 ? styles.decreasing : styles.increasing
              } ${styles.price_change}`}
            >
              {`${priceChange.toFixed(2)} %`}
            </div>
          </Tooltip>
          <div
            className={`${styles.trending} ${
              priceChange < 0 ? styles.decreasing : styles.increasing
            }`}
          >
            {priceChange < 0 ? (
              <TrendingDownRoundedIcon
                className={styles.decreasing}
                sx={{ width: "1rem" }}
              />
            ) : (
              <TrendingUpRoundedIcon
                className={styles.increasing}
                sx={{ width: "1rem" }}
              />
            )}
          </div>
        </div>

        <div className={styles.coin_info}>
          <Tooltip title="current price" arrow>
            <span
              className={`${styles.coin_price} ${
                priceChange < 0 ? styles.decreasing : styles.increasing
              }`}
            >{`₹ ${coin.current_price.toLocaleString()}`}</span>
          </Tooltip>
          <Tooltip title="total volume" arrow>
            <span
              className={styles.total_volume}
            >{`${coin.total_volume.toLocaleString()}`}</span>
          </Tooltip>
          <Tooltip title="market cap" arrow>
            <span
              className={styles.market_cap}
            >{`₹ ${coin.market_cap.toLocaleString()}`}</span>
          </Tooltip>
        </div>
        <div className={styles.coin_info_mdevice}>
          <Tooltip title="current price" arrow>
            <span
              className={`${styles.coin_price} ${
                priceChange < 0 ? styles.decreasing : styles.increasing
              }`}
            >{`₹ ${convertNumber(coin.current_price)}`}</span>
          </Tooltip>
          <Tooltip title="total volume" arrow>
            <span className={styles.total_volume}>{`${convertNumber(
              coin.total_volume
            )}`}</span>
          </Tooltip>
          <Tooltip title="market cap" arrow>
            <span className={styles.market_cap}>{`₹ ${convertNumber(
              coin.market_cap
            )}`}</span>
          </Tooltip>
        </div>
      </li>
    </Link>
  );
}

export default List;
