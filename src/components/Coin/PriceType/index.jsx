/* eslint-disable react/prop-types */
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import styles from "./styles.module.css";

function TogglePriceType({ priceType, onPriceTypeChange }) {
  return (
    <div className={styles.toggle_prices}>
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={onPriceTypeChange}
        aria-label="text alignment"
        sx={{
          "&.Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },

          "& .MuiToggleButton-root.Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "var(--white) !important",
          },
        }}
      >
        <ToggleButton
          value="prices"
          aria-label="view price difference"
          className={styles.toggle_btn}
        >
          Price
        </ToggleButton>
        <ToggleButton
          value="market_caps"
          aria-label="view market cap difference"
          className={styles.toggle_btn}
        >
          Market Cap
        </ToggleButton>
        <ToggleButton
          value="total_volumes"
          aria-label="view total volume difference"
          className={styles.toggle_btn}
        >
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default TogglePriceType;
