/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Grid({ coin }) {
  const priceChange = coin.price_change_percentage_24h;

  return (
    <div
      className={`${styles.grid_item} ${
        priceChange < 0 ? styles.decreasing : styles.increasing
      }`}
    >
      <div className={styles.item_head}>
        <img
          className={styles.head_image}
          src={coin.image}
          alt=""
          width={40}
          height={40}
          draggable="false"
        />
        <div className={styles.head_titles}>
          <span className={styles.item_symbol}>{coin.symbol}</span>
          <span className={styles.item_name}>{coin.name}</span>
        </div>
        <div
          className={`${styles.head_favorite} ${
            priceChange < 0 ? styles.decreasing : styles.increasing
          }`}
        >
          <StarRoundedIcon className={styles.star} />
        </div>
      </div>

      <div className={styles.price_change_indicator}>
        <div
          className={`${
            priceChange < 0 ? styles.decreasing : styles.increasing
          } ${styles.price_change}`}
        >
          {`${priceChange.toFixed(2)} %`}
        </div>
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
        <span
          className={`${styles.coin_price} ${
            priceChange < 0 ? styles.decreasing : styles.increasing
          }`}
        >{`₹ ${coin.current_price.toLocaleString()}`}</span>
        <span
          className={styles.total_volume}
        >{`Total Volume: ${coin.total_volume}`}</span>
        <span
          className={styles.market_cap}
        >{`Market Cap: ₹ ${coin.market_cap.toLocaleString()}`}</span>
      </div>
    </div>
  );
}

export default Grid;
