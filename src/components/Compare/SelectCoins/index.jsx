/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styles from "./styles.module.css";

function SelectCoins({ fullCoins, value, variant, onSelectionChange }) {
  return (
    <div className={styles.cryptoselect_box}>
      <FormControl fullWidth>
        <InputLabel
          id={`crypto${variant}-select-label`}
          sx={{ color: "var(--white)" }}
        >
          Crypto {variant}
        </InputLabel>
        <Select
          labelId={`crypto${variant}-select-label`}
          id={`crypto${variant}-select`}
          value={value}
          label={`Crypto ${variant}`}
          onChange={onSelectionChange}
          sx={{
            height: "2.5rem",
            color: "var(--white)",
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
        >
          {fullCoins.map((coin) => (
            <MenuItem key={coin.id} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectCoins;
